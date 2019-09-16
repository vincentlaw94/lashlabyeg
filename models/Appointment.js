const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new Schema({
    date: String,
    endDate: String,
    technician: String,
    treatment: String,
    _user: { type: Schema.Types.ObjectId, ref: 'users' },
    stripeId: String,
    eventId: String,
    canceled: { type: Boolean, default: false },
});

mongoose.model('appointments',appointmentSchema);
