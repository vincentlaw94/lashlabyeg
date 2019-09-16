import React, { Component} from 'react';
import { compose } from 'redux';

import { Link } from 'react-router-dom';
import { Button,Icon, Form, Grid, Header, Image, Message, Segment, Divider, TextArea, Checkbox } from 'semantic-ui-react'
import icon1 from '../../images/icon.png';
import renderDateInput from '../../utils/renderDateInput';
import { Field, reduxForm} from 'redux-form';
import renderField from '../../utils/renderField';

import  MaskedInput  from 'react-text-mask';
import validate from '../../utils/validation';

import {lower } from '../../utils/normalize';



class LoginField extends Component {

render(){
    const { handleSubmit} = this.props
    return(



<Form size='large' onSubmit={handleSubmit}>
        <Field
            name='email'

            component={renderField}
            as={Form.Input}
            type='text'
            icon='user'
            iconPosition='left'
            placeholder='E-mail address'
            normalize ={lower}
       />
       <Field
           name='password'

           component={renderField}
           as={Form.Input}
           type='password'
           icon='lock'
           iconPosition='left'
           placeholder='Password'
      />

      <Button  color='black' fluid size='large' type="submit">
            Login
      </Button>
</Form>)}

}

export default reduxForm({
    form: 'login'
})(LoginField)
