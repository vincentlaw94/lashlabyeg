const _ = require('lodash');

const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const Appointment = mongoose.model('appointments');

module.exports = app => {
  app.get('/api/appointment', requireLogin, async (req, res) => {
    const appointment = await Appointment.find({ _user: req.user.id })

    res.send(appointment);
  });

  
  //what is webhooks?
};
