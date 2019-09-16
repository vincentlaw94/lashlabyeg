import React, { Component} from 'react';
import { compose } from 'redux';
import { Button,Icon, Form, Grid, Header, Image, Message, Segment, Divider, TextArea, Checkbox } from 'semantic-ui-react'
import icon1 from '../../images/icon.png';

import { Field, reduxForm} from 'redux-form';
import renderCheckBox from '../../utils/renderCheckbox';
import * as actions from '../../actions';

import validate from '../../utils/validation';

import ScrollArea from 'react-scrollbar';
class WaiverFields extends Component{




    render(){
        var waiver = (<div><p></p>
        I HAVE AGREED TO HAVE SEMI PERMANENT EYELASH EXTENSIONS APPLIED TO AND / OR REMOVED FROM MY
        EYELASHES. BEFORE MY QUALIFIED PROFESSIONAL CAN PERFORM THIS PROCEDURE, I UNDERSTAND I MUST
        COMPLETE THIS AGREEMENT AND PROVIDE MY INFORMED CONSENT BY AGREEING TO THE TERM AND CONDITIONS INDICATED
        BELOW. FOR VALUABLE CONSIDERATION, IN ORDER TO HAVE SEMI PERMANENT EYELASH EXTENSIONS APPLIED
        AND/ OR REMOVED FROM MY EYELASHES:
        <p></p>

        <b>1. WAVER OF LIABILITY.</b>
        <p></p>
        I understand there are risks associated with having semi-permanent eyelash extensions applied to and/ or removed from my existing
        eyelashes, and that notwithstanding the utmost of care in the application or removal of these products, there still exists risks
        associated with the procedure and product itself, which include, without limitation, eye irritation, eye pain, and some discomfort. as
        part of this procedure i understand that eyelash extensions are adhered to my own natural lashes. I understand that the natural lash
        cycle is sixty to ninety days. when one lash falls out, there is another lash growing in. I understand that I am required to follow the
        eyelash extension after care guide in order to maintain my eyelash extensions. I understand that variables, including the natural lash
        cycle and customer care, will influence the longevity of my eyelash extensions. I understand that it is my responsibility to keep my
        eyes closed and be still during the entire process, until my eyelash technician addresses me to open my eyes I understand the fumes
        from the adhesives may cause my eyes to tear up. I agree to disclose any allergies that I may have to latex, surgical tape,
        cyanoacrylate, Vaseline, etc.
        <p></p>
        <b>2. PERMISSION TO USE PICTURES.</b>
        <p></p>

        I hereby grant to the professional and Lash Lab YEG, the full right to take, publish, and reproduce photographs of me, my face, my
        eyes and/ or eyelashes, both before and after this procedure, for any advertising, education, or other purposes whatsoever, including
        the right to retouch these photographs as deemed necessary by Lash Lab YEG. I further expressly assign any copyright in the
        photographs to Lash Lab YEG. I also grant my consent for Lash Lab YEG to use my image and likeness as contained in these
        photographs for any advertising or other purposes, along with any comments I may provide.
        <p></p>
        <b>3. CARE AND MAINTENANCE.</b>
        <p></p>
        I agree to follow the care and maintenance instructions provided by Lash Lab YEG for the use and care of semi-permanent eyelash
        extensions, and that if any follow up care is required due to my own mistake or negligence, or failure to follow these instructions, this
        will be at my own risk and expense. I understand that if i do any of the following, it may result in damage to my semi-permanent
        eyelash extension or may cause my lashes to fall off prematurely. knowing this, I agree to follow the aftercare guide provided to me
        by Lash Lab YEG. I understand that I should not attempt to remove my lash extensions on my own or with any product, but that the
        procedure recommends that the lash extensions be professionally removed.
        <p></p>
        <b>4. NO KNOWN MEDICAL CONDITIONS/ INFORMED CONSENT.</b>
        <p></p>
        I have read and completed the Lash Lab YEG client intake form in its entirety and truth. I acknowledge that I have been advised of
        the potential harmful or negative side effects that the procedure or removal may cause to those who have specific medical or skin
        conditions. I understand that the procedure requires that i lay still up to 90 minutes or longer with my eyes shut, and that if I wear
        contacts, I must remove my contact lenses for the duration of the application or removal. I further state that I have no known
        medical condition that might be aggravated by the procedure or any medical condition that would prevent me from complying with
        or heeding to the professionals instructions or these warnings.
        <p></p></div>);
            const{ handleSubmit, previousPage, pristine, submitting } = this.props

        return (



                  <Form size='large' onSubmit={handleSubmit}>


                    <Segment stacked>







                        <Header as='h1' color='black' textAlign='left'>
                            <Image src={icon1} />
                        <Header.Content>
                         Privacy and Terms
                         <Header.Subheader> To create an account you’ll need to agree to the Terms and Conditions below. </Header.Subheader>

                        </Header.Content>
                        </Header>
                        <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            style={{height:'500px'}}
            >
            {waiver}
          </ScrollArea>

          <Field
              name='waiver'

              label="I agree to the Terms and Conditions"

              component={renderCheckBox}




              style={{marginTop:"10px"}}
              />







          <Button type="submit" disabled={pristine || submitting} style={{marginTop:'5px'}} color='black' floated='right'  compact size='large'>
          Next
        </Button>
        <Button onClick={previousPage}style={{marginTop:'5px'}}color='black' basic floated='left'> Back </Button>



                      <br></br>
                      <br></br>

                    </Segment>
                  </Form>


        )
    }



}
export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: true, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WaiverFields)
