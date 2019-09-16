const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSKey);
const requireLogin = require('../middleware/requireLogin');
const mongoose = require('mongoose');
const Appointment = mongoose.model('appointments');


const CONFIG =require('../config/Settings');
const CalendarAPI = require('node-google-calendar');
const cal = new CalendarAPI(CONFIG);
const calendarId = require('../config/Settings').calendarId;

module.exports = app => {
  app.post('/api/charge', requireLogin, async (req, res) => {
      try{
          var email =(req.user.google.email===undefined)?req.user.email:req.user.google.email

          const charge = await stripe.charges.create({
            amount: req.body.e.price *100,
            currency: 'cad',
            description: 'LashLabYEG',
            source: req.body.token.token.id
          });

          let event = {
            'summary': "Lash Lab YEG Appointment with "  + req.body.e.technician,
      		'start': { 'dateTime': req.body.e.startTime },
      		'end': { 'dateTime': req.body.e.endTime },
      		'description': req.body.e.treatment + " Lash Extension",
      		'status': 'confirmed',
      		'colorId': 3,
      		"reminders": {
      			"useDefault": false,
      			"overrides": [
      				{ "method": "email", "minutes": 24*60 },
      			]
      		},
      		'attendees': [{ 'email': email,
                            'responseStatus': 'accepted'}]
          }



          cal.Events.insert(calendarId[req.body.e.technician],event,{sendNotifications: true})
            .then(resp=>{
                var  newAppointment = new Appointment({
                    date: req.body.e.startTime,
                    endDate: req.body.e.endTime,
                    technician: req.body.e.technician,
                    treatment: req.body.e.treatment,
                    stripeId: charge.id,
                    _user: req.user._id,
                    eventId: resp.id
                })
                newAppointment.save();
            })
            .catch(err=>{console.log(err)})



      }

    catch (err) {
        console.log(err)
    return res.sendStatus(404)
  }
  return res.sendStatus(200)
  });

  app.post('/api/refund', requireLogin, async (req,res)=>{
      try {
          const refund = await stripe.refunds.create({
              charge: req.body.stripeId,
              reason: "requested_by_customer"
          })
          cal.Events.delete(calendarId[req.body.technician], req.body.eventId,{sendNotifications: true})
            .then(resp=>{})
            .catch(err=>{})
            Appointment.findByIdAndUpdate(req.body.id,{canceled:true},function(err,doc) {
               if (err) { throw err; }})
      }
      catch (err) {

          return res.sendStatus(404)
      }
      return res.sendStatus(200)
  })

  app.post('/api/reschedule', requireLogin, async(req,res)=>{
      try {
          var email =(req.user.google.email===undefined)?req.user.email:req.user.google.email
          let event = {
            'summary': "Lash Lab YEG Appointment with "  + req.body.technician,
      		'start': { 'dateTime': req.body.date },
      		'end': { 'dateTime': req.body.endDate },
      		'description': req.body.treatment + " Lash Extension",
      		'status': 'confirmed',
      		'colorId': 3,
      		"reminders": {
      			"useDefault": false,
      			"overrides": [
      				{ "method": "email", "minutes": 24*60 },
      			]
      		},
      		'attendees': [{ 'email': email,
                            'responseStatus': 'accepted'}]
          }

          cal.Events.delete(calendarId[req.body.technician], req.body.eventId,{sendNotifications: true})
            .then(resp=>{})
            .catch(err=>{})
        cal.Events.insert(calendarId[req.body.technician],event,{sendNotifications: true})
          .then(resp=>{
              Appointment.findByIdAndUpdate(req.body.id,{date:req.body.date, endDate:req.body.endDate, eventId:resp.id},function(err,doc) {
                 if (err) { throw err; }})
             })
          .catch(err=>{})



      } catch (err) {

          return res.sendStatus(404)
      }
      return res.sendStatus(200)
  })
};
