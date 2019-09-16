import React, { Component} from 'react';
import {connect} from 'react-redux';
import { Button,Icon, Form, Grid, Header, Image, Message, Segment, Divider, TextArea, Checkbox, Accordion } from 'semantic-ui-react'
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


class AppointmentFields extends Component {

    constructor(props){
    super(props);
    this.state = {
      technician: [],
      treatments:{},
      price:{},
      duration:{},
      touched: false
  }
};

    componentDidMount() {
        axios.get('/api/technician')
        .then(res=> {

            var ret =[];
            var hash={};


      res.data.map(x=>{
          ret.push({key:x.name,text:x.name,value:x.name});
          hash[x.name]=x.treatments;

      })


      this.setState({ technician: ret,
                        treatments:hash,
                    })


  })
};

    getTreatment(technician){
        var ret=[]


        for ( var x in this.state.treatments[technician])
            if (this.state.treatments[technician].hasOwnProperty(x)){

                ret.push({key:this.state.treatments[technician][x].treatment, text:this.state.treatments[technician][x].treatment, value:this.state.treatments[technician][x].treatment})
            }
        return ret
};

    getPrice(technician, treatment)
    {
        this.props.resetAvailableTime();
        var price={}
        var duration ={}
        this.state.treatments[technician].map(x=>{
            price[x.treatment]=x.price
            duration[x.treatment]=x.duration
        })
        this.setState({
            price:price,
            duration:duration  })

        this.props.change('technician',technician)
        this.props.change('treatment',treatment)
        var price = price[treatment]

        this.props.change("price",price)
        this.props.change("date",null)


    }

    handleGetTime(date, technician, treatment){
        this.props.resetAvailableTime();
        this.setState({touched:true})
        this.props.change("startTime",null)
        var duration = this.state.duration[treatment]
        var price = this.state.price[treatment]

        this.props.change("price",price)
        this.props.getAvailableTime(date,technician,duration);

    }
    getTechnician(technician)
    {
        this.props.resetAvailableTime();
        this.props.change('technician',technician)
        this.props.getAvailableTime(this.props.dateValue,technician,this.state.duration[this.props.treatmentValue])
    }
render(){

    const{ onChange,getAvailableTime,handleSubmit,  previousPage, formValues, submitForm, technicianValue, treatmentValue, dateValue } = this.props;
        return(
            <Segment stacked>
        <Form size='large' onSubmit={handleSubmit}>
              <Header as='h1' color='black' textAlign='left'>
                  <Image src={icon1} />
              <Header.Content>
               Schedule an appointment
              </Header.Content>
              </Header>



                 <Field
                     name='technician'
                     label='Technician'
                     component={renderField}
                     as={Form.Select}
                     options = {this.state.technician}
                     onChange={(v,f)=>this.getTechnician(f)}
                     type='text'


                     placeholder='Technician'
                />
            {technicianValue && <Field
                name='treatment'
                label='Treatment'
                component={renderField}
                as={Form.Select}
                options = {this.getTreatment(technicianValue)}
                type='value'
                onChange={(v,f)=>this.getPrice(technicianValue,f)}
                placeholder='Treatment'
                />}


              
              <p></p>
              {treatmentValue&&
                  <Field
                      name='date'
                      label = "Date"
                      component={renderInlineDateInput}
                      onChange = { (v, f)=>this.handleGetTime(f, technicianValue,treatmentValue)}
                      normalize={date}/>}

              <p></p>
              <AvailableTime
                    touched={this.state.touched}/>


                <Button disabled={this.props.schedule.isEmpty}type='submit'style={{marginTop:'5px'}} color='black' floated='right'  compact size='large'>
                      Next
                    </Button>
        <Button  onClick={previousPage}style={{marginTop:'5px'}}color='black' basic floated='left'> Back </Button>



            <br></br>
            <br></br>

        </Form>
    </Segment>


)};}

function mapStateToProps({ technician, schedule }) {
  return { technician, schedule };
}

AppointmentFields = connect(
    mapStateToProps, actions
)(AppointmentFields);

const selector = formValueSelector('schedule')
AppointmentFields =connect(
    state => {

    const technicianValue = selector(state, 'technician')
    const treatmentValue = selector (state, 'treatment')
    const dateValue = selector (state,'date')
    const price = selector (state,'price')
    return {
        technicianValue,
        treatmentValue,
        dateValue,
        price
    }}
)(AppointmentFields);

export default reduxForm({
  form: 'schedule', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(AppointmentFields)
