//return a list of booked time slots
//input appointment date, output available
// also get the next available date if day is completely booked
// call another query to the next available time. new input of

// when we get the array of busytimes - overla

///
const CONFIG =require('../config/Settings');
const CalendarAPI = require('node-google-calendar');
const cal = new CalendarAPI(CONFIG);
const calendarId = require('../config/Settings').calendarId;

const requireLogin = require('../middleware/requireLogin');


//
module.exports = app =>{

app.get('/api/calendar',requireLogin, (req, res)=> {
    let params = {
    		"timeMin": req.query.timeMin,
    		"timeMax": req.query.timeMax,
    		"items": [{ "id": calendarId[req.query.technician] }]
    	};

    	return cal.FreeBusy.query(calendarId[req.query.technician], params)
    		.then(resp => {
    			res.send(resp);
    		})
    		.catch(err => {
    			
    		});
        });

app.post('/api/event', requireLogin, (req,res)=>{
    let params = {
        'summary': '<treatment>Appointment with <client> ',
		'start': { 'dateTime': '2019-09-10T10:30:00-06:00' },
		'end': { 'dateTime': '2017-09-10T12:00:00-06:00' },
		'description': '<treatment>Appointment with <client> ',
		'status': 'confirmed',
		'colorId': 3,
		"reminders": {
			"useDefault": false,
			"overrides": [
				{ "method": "email", "minutes": 25 },
				{ "method": "popup", "minutes": 20 }
			]
		},
		'attendees': [{ 'email': 'vincentlaw94@gmail.com' }]
    }
    return cal.Events.insert(calendarId[req.query.technician], params )
        .then(resp=>{

        })

})

//
}
