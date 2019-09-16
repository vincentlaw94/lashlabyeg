const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = " ";
  }
  if (!values.password) {
    errors.password = " ";
  } else if (values.password.length < 5) {
    errors.password = "Password must be more than 5 characters";
  }

  if (!values.password1) {
    errors.password1 = " ";
  } else if (values.password1 !== values.password) {
    errors.password1 = "Password does not match";
  }

  if (!values.firstName) {
    errors.firstName = " ";
  }

  if (!values.lastName) {
    errors.lastName = " ";
  }

  if (!values.dob) {
    errors.dob = " ";
  }

  if (!values.phone) {
    errors.phone = " ";
  }

  if (!values.address) {
    errors.address = " ";
  }

  if (!values.city) {
    errors.city = " ";
  }

  if (!values.province) {
    errors.province = " ";
  }

  if (!values.postalcode) {
    errors.postalcode = " ";
  }

  if (!values.emergName) {
    errors.emergName = " ";
  }

  if (!values.emergRelationship) {
    errors.emergRelationship = " ";
  }

  if (!values.emergPhone) {
    errors.emergPhone = " ";
  }

  if (!values.waiver) {
    errors.waiver = " ";
  }

  if (!values.treatment) {
    errors.treatment = " ";
  }

  if (!values.technician) {
    errors.technician = " ";
  }
  if (!values.date) {
    errors.date = " ";
  }
  if (!values.name) {
    errors.name = " ";
  }
  if (!values.startTime) {
    errors.startTime = " ";
  }
  if (!values.stripe) {
    errors.stripe = "";
  }
  return errors;
};

export default validate;
