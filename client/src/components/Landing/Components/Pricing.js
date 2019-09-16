import React,{Component} from 'react'
import { Grid, Segment, Divider, Image, Header, Container, List} from 'semantic-ui-react'




export default class Pricing extends Component {
    render(){
        return(



            <Container textAlign="center">
                <Header
                  as='h2'


                  textAlign ="center"
                  style= {{padding:'25px'}}>LASH MENU</Header>

            <Grid>

              <Grid.Row columns={2} >
                <Grid.Column>
                  <Header as='h4' content ='Classic' />
                </Grid.Column>
                <Grid.Column>
                  <Header as='h4' content ='$65' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2} >
                  <Grid.Column>
                      <Header as='h4' content="Classic Refills"/>
                  </Grid.Column>

                  <Grid.Column>
                      <Header as='h4' content="$35"/>
                  </Grid.Column>
              </Grid.Row>

        <Divider fitted/>

              <Grid.Row columns={2} >
                <Grid.Column>
                  <Header as='h4' content ='Volume' />
                </Grid.Column>
                <Grid.Column>
                  <Header as='h4' content ='$100' />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row columns={2} >
                  <Grid.Column>
                      <Header as='h4' content="Volume Refills"/>
                  </Grid.Column>

                  <Grid.Column>
                      <Header as='h4' content="$35"/>
                  </Grid.Column>
              </Grid.Row>

        <Divider fitted/>


            <Grid.Row columns={2} >
              <Grid.Column>
                <Header as='h4' content ='Hybrid' />
              </Grid.Column>
              <Grid.Column>
                <Header as='h4' content ='$85' />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2} >
                <Grid.Column>
                    <Header as='h4' content="Hybrid Refills"/>
                </Grid.Column>

                <Grid.Column>
                    <Header as='h4' content="$35"/>
                </Grid.Column>
            </Grid.Row>

      <Divider fitted/>

          <Grid.Row columns={2} >
            <Grid.Column>
              <Header as='h4' content ='Lash Removal' />
            </Grid.Column>
            <Grid.Column>
              <Header as='h4' content ='$15' />
            </Grid.Column>
          </Grid.Row>
          <p style={{marginBottom:"10px"}}></p>







            </Grid>

            <Divider />

            <Container textAlign="center" style={{padding:"30px"}}>
            <p>Please refer to our FAQ section for more information or CONTACT US with any questions you may have about any of our services.</p>
            <p>Prices listed do not include applicable taxes. All prices are subject to change without notice</p>
            </Container>
</Container>

        )}
}
