import React,{Component} from 'react'
import { Button, Container,Grid,Header,List,Message, Segment} from 'semantic-ui-react'
import TopHeader from './TopHeader';
import Footer from './Footer';


export default class Policies extends Component {




      render() {



        return(
            <Container>

            <TopHeader/>
<Segment vertical>

            <Container textAlign="left">
               <Grid stackable columns={2}>
              <Grid.Column>
                  <Grid.Row>
                      <Header as="h2" content="POLICIES" style={{marginBottom:"25px",marginTop:"25px"}}/>
                  </Grid.Row>

                  <Grid.Row>
                      <Header as="h4" content="BOOKING"/>
                      <p style={{marginBottom:"25px"}}style={{marginBottom:"25px"}}>We have quick and easy ways by which you can book an appointment. Call, text, email or book online.

</p>
                  </Grid.Row>

                  <Grid.Row>
                      <Header as="h4" content="CANCELLATIONS"/>
                      <p>We all do at some point, so we get it. But please kindly let us know 24 hours in advance</p>
                      <p style={{marginBottom:"25px"}}>to avoid a cancellation fee.</p>
                  </Grid.Row>

                  <Grid.Row>
                      <Header as="h4" content="CANCELLATION FEES"/>
                      <p>Should you cancel your appointment with less than 24 hours notice, you will be charged</p>
<p style={{marginBottom:"25px"}}>the service amount half of which will be refunded at your rescheduled appointment.</p>
                  </Grid.Row>

                  <Grid.Row>
                      <Header as="h4" content="KEEP IN MIND"/>
                      <p style={{marginBottom:"25px"}}>Contact lenses MUST BE removed during lash applications. Please bring a lens case to store
your lenses in during your appointment. You may put your contact lenses back in following
your appointment.</p>
<List as='ul'>
    <List.Item as='li'>Come to your appointment eye makeup free, this means no mascara, eyeliner
or eye shadow.</List.Item>
    <List.Item as='li'>Lash extensions MUST NOT contact water, steam or heavy humidity for 24 hrs
after application.</List.Item>
    <List.Item as='li'>Eyelash extensions CANNOT be applied to persons allergic to any type of adhesives.</List.Item>

<List.Item as='li'>Please disclose any eye conditions, injuries, medications or treatments used on/in or
affecting the eye area in advance.</List.Item>
</List>

<p style={{marginBottom:"25px"}}></p>
                  </Grid.Row>

              </Grid.Column>
              <Grid.Column>

                  <Grid.Row>
                      <Header as="h2" content="ADDITIONAL INFORMATION" style={{marginBottom:"25px",marginTop:"25px"}}/>
                      <p></p>
                  </Grid.Row>

                  <Grid.Row>
                      <Header as="h4" content="REGISTRATION"/>
                      <p style={{marginBottom:"25px"}}>When arriving for your very first appointment please arrive 10 minutes early so that we may register you in our system. Alternatively fill out our online registration form prior to your visit.</p>
                  </Grid.Row>

                  <Grid.Row>
                      <Header as="h4" content="CLIENT SERVICES"/>
                      <p style={{marginBottom:"25px"}}>If you have any questions , concerns or feedback we would love to hear from you. Please contact us by phone or email with your thoughts.</p>
                  </Grid.Row>

                  <Grid.Row>
                      <Header as="h4" content="PRIVACY"/>
                      <p style={{marginBottom:"25px"}}>Your privacy is very important to us. We collect your personal information such as your name, email and telephone number in order to create an easy client booking database and to keep you informed about all the fun stuff were up to. We know how annoying it is to get junk mail so will never disclose your personal information to any third party. </p>
                  </Grid.Row>

                  <Grid.Row>
                      <Header as="h4" content="RESULTS"/>
                      <p style={{marginBottom:"25px"}}>Individual results may vary and are dependant on the length/volume of your natural lashes and on the type of extension you choose to have applied.</p>
                  </Grid.Row>



                  <Grid.Row>
                      <Button color="black">BOOK ONLINE</Button>
                  </Grid.Row>
              </Grid.Column>
            </Grid>

        </Container>
        </Segment>
        <Segment vertical>
<Footer/>
</Segment>
    </Container>)
}}
