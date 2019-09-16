import React, { Component} from 'react';
import { compose } from 'redux';
import { Button,Icon, Form, Grid, Header, Image, Message, Segment, Divider, TextArea, Checkbox } from 'semantic-ui-react'
import icon1 from '../../images/icon.png';
import renderDateInput from '../../utils/renderDateInput';
import { Field, reduxForm} from 'redux-form';
import renderField from '../../utils/renderField';

import  MaskedInput  from 'react-text-mask';
import validate from '../../utils/validation';
import {phone,date } from '../../utils/normalize';


class HistoryFields extends Component{
constructor(props){
    super(props)
    this.state={

    }
}

render(){
    const  handleChange = (e, { value }) => this.setState({ value })
    const { handleSubmit, previousPage } = this.props
    const {value } = this.state
    return(
        <Form size='large' onSubmit={handleSubmit}>


  <Segment stacked>




      <Header as='h1' color='black' textAlign='left'>
          <Image src={icon1} />
      <Header.Content>
        History Questions
      </Header.Content>
      </Header>

                        <Form.Group inline>
                             <label>Have you recieved eyelash extensions before?</label>
                                 <Field
                                     name='q1'
                                     type='radio'
                                     label="Yes"
                                     value="Yes"

                                     as={Form.Radio}
                                     component={renderField}

                                     />

                                     <Field
                                         name='q1'
                                         type='radio'
                                         label="No"
                                         value="No"

                                         as={Form.Radio}
                                         component={renderField}

                                         />

                     </Form.Group>


                     <Form.Group inline>
                          <label>Have you ever had eyelash extensions removed?</label>
                              <Field
                                  name='q2'
                                  type='radio'
                                  label="Yes"
                                  value="Yes"

                                  as={Form.Radio}
                                  component={renderField}

                                  />
                          <Field
                              name='q2'
                              type='radio'
                              label="No"
                              value="No"

                              as={Form.Radio}
                              component={renderField}

                              />
                  </Form.Group>


                  <Form.Group inline>
                       <label>Have you used under eye gel patches before?</label>
                           <Field
                               name='q3'
                               type='radio'
                               label="Yes"
                               value="Yes"

                               as={Form.Radio}
                               component={renderField}

                               />
                       <Field
                           name='q3'
                           type='radio'
                           label="No"
                           value="No"

                           as={Form.Radio}
                           component={renderField}

                           />
               </Form.Group>


               <Form.Group inline>
                    <label>Have you had permanent cosmetics applied to your eye area?</label>
                        <Field
                            name='q4'
                            type='radio'
                            label="Yes"
                            value="Yes"

                            as={Form.Radio}
                            component={renderField}

                            />
                    <Field
                        name='q4'
                        type='radio'
                        label="No"
                        value="No"

                        as={Form.Radio}
                        component={renderField}

                        />
            </Form.Group>
            <Field
                name='notes'
                type='radio'
                label="Additional Comments (i.e. any concerns, allergies, etc... )' "
                placeholder='Tell us more about you...'


                as={Form.TextArea}
                component={renderField}

                />


                 <Button type='submit' style={{marginTop:'5px'}} color='black' floated='right'  compact size='large'>
                       Next
                     </Button>
         <Button onClick={previousPage}style={{marginTop:'5px'}}color='black' basic floated='left'> Back </Button>
         <br></br>
         <br></br>
        </Segment>
    </Form>)}}
    export default reduxForm({
      form: 'wizard', // <------ same form name
      destroyOnUnmount: false, // <------ preserve form data
      forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
      
    })(HistoryFields)
