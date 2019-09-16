const mongoose = require('mongoose');
const { Schema } = mongoose;

const treatmentSchema = new Schema({ treatment: String, duration: Number, price: Number });
const technicianSchema = new Schema({
    name: String,
    treatments: [treatmentSchema]

});
mongoose.model('treatments', treatmentSchema)
mongoose.model('technicians',technicianSchema);
