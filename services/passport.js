const keys = require('../config/keys');
const passport = require('passport');
const moment =require('moment');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');


const mongoose = require('mongoose');
const User = mongoose.model('users');


passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id, done)=>{
    User.findById(id).then(user=>{
    done(null,user);
});




});


passport.use(new LocalStrategy({
    usernameField: 'email',
    proxy: true
}, (email, password, done)=>{
    User.findOne({email:email})
    .then( user => {
        if (!user) return done(null,false, { message : "Invalid Email and Password"});
        bcrypt.compare(password, user.password, (err,isMatch)=>{
            if (err) throw err;
            if (isMatch) {
                return done (null, user);
            } else {
                return done(null,false, { message : "Invalid Email and Password"});
            }
        })
    })
    .catch (err=>console.log(err));
}))

passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookClientSecret,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'email'],
    proxy: true
},async (accessToken, refreshToken, profile, done)=>{
    const existingUser = await User.findOne({facebookId:profile.id});
        if (existingUser){
            done(null,existingUser)
        } else {
            const user = await new User({
                facebookId:profile.id,
                email:profile.emails[0].value
            }).save()
            done(null,user);

        }

}));

passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done)=>{


    const existingUser = await User.findOne({googleId:profile.id})
        if (existingUser){
            done(null,existingUser)

        } else{
        const user = await new User({
            googleId:profile.id,
            google: {email:profile.emails[0].value}}).save()
            done(null,user);
        }
    })




);
