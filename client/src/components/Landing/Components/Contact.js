import React,{Component} from 'react'
import { Button, Container, Divider,Grid, Header } from 'semantic-ui-react'
import MyMapComponent from './Map';



export default class Contact extends Component {

render() {


  return (

                  <Container textAlign='center'>
                  <Grid columns={2}>
                      <Grid.Row>

                          <Grid.Column>
                           <Header as ='h2'>HOURS</Header>
                           <p>Monday 10-7</p>
                           <p>Tuesday 10-7</p>
                           <p>Wednesday 10-7</p>
                           <p>Thursday 10-7</p>
                           <p>Friday 10-7</p>
                           <p>Saturday 10-7</p>
                           <p>Sunday 10-7</p>

                           </Grid.Column>
                          <Grid.Column>

                              <Header as='h2'>CONTACT</Header>
                              <p>Sylyanne (587) 990-9085</p>
                              <p>An (780) 906-3361</p>
                              <p>DM on instagram <a href="https://www.instagram.com/lashlab_yeg/" target="_blank">@lashlab_yeg</a></p>
                              <p>hello@lashlabyeg.com</p>
                              <Button color='black' content='BOOK ONLINE' />

                          </Grid.Column>






                  </Grid.Row>
                  </Grid>
 <Divider  style={{margin:"30px"}}/>
                          <Header as ='h2'>LOCATION</Header>
                          <p style={{marginBottom:'25px'}}>North Edmonton</p>

                          <MyMapComponent isMarkerShown />





                  </Container>



  )

}
}
