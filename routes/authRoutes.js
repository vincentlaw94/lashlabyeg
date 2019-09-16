const passport = require("passport");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const Appointment = mongoose.model("appointments");
const Technician = mongoose.model("technicians");
const Treatment = mongoose.model("treatments");
const requireForm = require("../middleware/requireForm");
const requireLogin = require("../middleware/requireLogin");
const gcal = require("google-calendar");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/onlinebooking",
      failureRedirect: "/login"
    })
  );

  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", {
      scope: ["email", "public_profile"]
    })
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", {
      sucessRedirect: "/",
      failureRedirect: "/login"
    })
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.post(
    "/api/login",
    passport.authenticate("local", {
      successRedirect: "/"
    })
  );

  app.post("/api/signup", (req, res) => {
    const {
      email,
      password,
      firstName,
      lastName,
      dob,
      phone,
      address,
      city,
      province,
      postalCode,
      emergName,
      emergRelationship,
      emergPhone,
      q1,
      q2,
      q3,
      q4,
      notes,
      waiver,
      dateCreated
    } = req.body;

    var newUser = new User({
      email: email,
      waiver: waiver,
      password: password,
      info: {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        phone: phone,
        address: address,
        city: city,
        province: province,
        postalCode: postalCode,
        emergName: emergName,
        emergRelationship: emergRelationship,
        emergPhone: emergPhone,
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        notes: notes,

        dateCreated: Date.now()
      }
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save();
      });
    });

    newUser.save();
    res.redirect("/");
  });

  app.post("/api/form", (req, res) => {
    const {
      firstName,
      lastName,
      dob,
      phone,
      address,
      city,
      province,
      postalCode,
      emergName,
      emergRelationship,
      emergPhone,
      q1,
      q2,
      q3,
      q4,
      notes,
      waiver,
      dateCreated,
      _id
    } = req.body;

    const update = {
      waiver: true,
      info: {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        phone: phone,
        address: address,
        city: city,
        province: province,
        postalCode: postalCode,
        emergName: emergName,
        emergRelationship: emergRelationship,
        emergPhone: emergPhone,
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        notes: notes,
        dateCreated: Date.now()
      }
    };
    User.findByIdAndUpdate({ _id: req.user._id }, update, (err, result) => {
      if (err) {
        console.log(err);
      }
    });

    res.redirect("/");
  });

  app.post("/api/update", (req, res) => {
    const {
      firstName,
      lastName,
      dob,
      phone,
      address,
      city,
      province,
      postalCode,
      emergName,
      emergRelationship,
      emergPhone,
      _id,
      q1,
      q2,
      q3,
      q4,
      notes,
      dateCreated
    } = req.body;

    const update = {
      waiver: true,
      info: {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        phone: phone,
        address: address,
        city: city,
        province: province,
        postalCode: postalCode,
        emergName: emergName,
        emergRelationship: emergRelationship,
        emergPhone: emergPhone,
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        notes: notes,
        dateCreated: dateCreated
      }
    };
    User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: update },
      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );
    res.redirect("/");
  });
  app.post("/api/emails", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (user) return res.sendStatus(400);
      return res.sendStatus(200);
    });
  });

  app.post("/api/book", (req, res) => {
    //const { email, password, firstName, lastName, dob, phone, address, city,province, postalCode, emergName, emergRelationship, emergPhone,
    //q1,q2,q3,q4, notes, waiver, dateCreated } = req.body;
    console.log(req.user.id);
    var newAppointment = new Appointment({
      treatment: "1",
      technician: "1",
      date: Date.now(),
      _user: req.user.id
    });

    newAppointment.save();
    res.redirect("/");
  });

  app.delete("/api/book/:id", (req, res) => {
    Appointment.findByIdAndRemove({ _id: req.params.id });
  });

  app.get("/api/book", requireLogin, async (req, res) => {
    const appointments = await Appointment.find({ _user: req.user.id });
    res.send(appointments);
  });

  app.post("/api/technician", (req, res) => {
    //const { email, password, firstName, lastName, dob, phone, address, city,province, postalCode, emergName, emergRelationship, emergPhone,
    //q1,q2,q3,q4, notes, waiver, dateCreated } = req.body;
    console.log(req.user.id);
    var t1 = new Treatment({ treatment: " Classic", duration: 1, price: 65 });
    var t2 = new Treatment({ treatment: " Volumn", duration: 1, price: 100 });
    var t3 = new Treatment({ treatment: " Hybrid", duration: 1, price: 85 });
    var newTechnician = new Technician({
      name: "An",
      treatments: [t1, t2, t3]
    });
    newTechnician.save();
    res.redirect("/");
  });

  app.get("/api/technician", async (req, res) => {
    const technician = await Technician.find({});

    res.send(technician);
  });

  //
};
