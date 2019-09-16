const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema ({

    google: {


        email: String

    },
    googleId:{type:String},
    facebookId:{type:String},
    facebook: {


        email: String
    },

    email: {type:String},
    password:{type:String},
    waiver:{type:Boolean, default:false},

    info:{
        firstName:String,
        lastName:String,
        dob:String,
        phone:String,
        address:String,
        city:String,
        province:String,
        postalCode:String,
        emergName:String,
        emergRelationship:String,
        emergPhone:String,
        q1:String,
        q2:String,
        q3:String,
        q4:String,
        notes:String,

        dateCreated:Date
    }

});

mongoose.model('users',userSchema);
