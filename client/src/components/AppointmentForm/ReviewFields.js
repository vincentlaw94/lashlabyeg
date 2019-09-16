import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Table, Button,Icon, Form, Grid, Header, Image, Message, Segment, Divider, TextArea, Checkbox, Accordion } from 'semantic-ui-react'
import icon1 from '../../images/icon.png';
import renderInlineDateInput from '../../utils/renderInlineDateInput';
import { Field, reduxForm, formValueSelector} from 'redux-form';
import renderField from '../../utils/renderField';
import AvailableTime from './AvailableTime';

import  MaskedInput  from 'react-text-mask';
import validate from '../../utils/validation';
import {phone,date } from '../../utils/normalize';
import axios from 'axios';
import * as actions from '../../actions';
import moment from 'moment'


class ReviewFields extends Component {

    constructor(props){
    super(props);
}
;

formatDate(date){

    const newDate = moment(date,"YYYY-MM-DD").format("ddd DD MMM YYYY")
    const time = date.slice(11,16)
    return newDate + " " + time
}
render(){

    const{ onChange, handleSubmit, previousPage , submitForm } = this.props;
        return(
<Segment>
        <Form size='large' onSubmit={handleSubmit}>
              <Header as='h1' color='black' textAlign='left'>
                  <Image src={icon1} />
              <Header.Content>
               Review Appointment
              </Header.Content>
              </Header>
              <Table definition>
                <Table.Body>
      <Table.Row>
        <Table.Cell>Appointment Date</Table.Cell>
        <Table.Cell>{this.formatDate(this.props.dateValue)}</Table.Cell>

      </Table.Row>
      <Table.Row>
        <Table.Cell>Technician</Table.Cell>
        <Table.Cell>{this.props.technicianValue}</Table.Cell>

      </Table.Row>
      <Table.Row>
        <Table.Cell>Treatment</Table.Cell>
        <Table.Cell>{this.props.treatmentValue}</Table.Cell>

      </Table.Row>
    </Table.Body>
    <Table.Footer >
     <Table.Row warning>
       <Table.Cell>TOTAL:</Table.Cell>
       <Table.Cell><b>${this.props.priceValue}</b></Table.Cell>



     </Table.Row>
   </Table.Footer>
</Table>



                      <Button type='submit'style={{marginTop:'5px'}} color='black' floated='right'  compact size='large'>
                      Next
                    </Button>
        <Button onClick={previousPage}style={{marginTop:'5px'}}color='black' basic floated='left'> Back </Button>



            <br></br>
            <br></br>

        </Form>
    </Segment>


)};}

function mapStateToProps({ technician }) {
  return { technician };
}

const selector = formValueSelector('schedule')
ReviewFields =connect(
    state => {

    const technicianValue = selector(state, 'technician')
    const treatmentValue = selector (state, 'treatment')
    const dateValue = selector(state, 'startTime')
    const priceValue = selector(state, 'price')
    return {
        technicianValue,
        treatmentValue,
        dateValue,
        priceValue
    }}
)(ReviewFields);


export default reduxForm({
  form: 'schedule', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(ReviewFields)
