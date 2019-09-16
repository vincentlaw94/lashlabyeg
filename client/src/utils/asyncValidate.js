import axios from 'axios';


const asyncValidate = (values/* , dispatch*/)=>
{
    return axios.post('/api/emails',{email:values.email},{validateStatus: function (status) {
    return status < 500; // Reject only if the status code is greater than or equal to 500
  }})
    .then(res => {

      if (res.status === 400) {throw { email: "This email has already been taken."}

      }

  })

}

export default asyncValidate
