import React,{Component} from 'react'
import { Grid, Segment, Divider, Image, Header, Container, List } from 'semantic-ui-react'
import classic from "../images/1.jpg"
import volume from "../images/2.jpg"
import hybrid from "../images/3.jpg"


export default class Services extends Component {
    render(){
        return(
            <div>
                <Container >
            <Header
              as='h1'


              textAlign ="center"
              style= {{padding:'15px'}}>OUR SERVICES</Header>

          <p style={{padding:'10px'}}></p>



            <Grid columns={3}>


              <Grid.Row>
                <Grid.Column>
                  <Image src={classic} rounded/>
                </Grid.Column>
                <Grid.Column>
                  <Image src={volume} rounded/>
                </Grid.Column>
                <Grid.Column>
                  <Image src={hybrid} rounded/>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Header as='h2'>CLASSIC</Header>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h2'>VOLUME</Header>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h2'>HYBRID</Header>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <p><i>Classic eyelash</i> extensions is when one synthetic lash is applied onto one natural lash. Weight and length of extension is taken into account to maintain the integrity of natural lashes.</p>
                </Grid.Column>
                <Grid.Column>
                <p><i>Volume lashes</i> are 2-8D hand made fans that are applied onto one individual lash. Each fan is light weight and tailored to be safely applied to ensure protection of natural lashes. Choose from soft to full drama </p>

                </Grid.Column>
                <Grid.Column>
                <p><i>Hybrid lashes</i> is a combination of classic and volume lashes. This is when equal amounts of both classic and volume fans are applied to create a natural yet fluffy look. Perfect balance between a natural and dramatic set.</p>

                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                   <p>Recommended for:</p>
                </Grid.Column>
                <Grid.Column>
                   <p>Recommended for:</p>
                </Grid.Column>
                <Grid.Column>
                   <p>Recommended for:</p>
                </Grid.Column>
              </Grid.Row>


              <Grid.Row>
                <Grid.Column>
                <List as='ul'>
                    <List.Item as='li'>healthy natural lashes</List.Item>
                    <List.Item as='li'>those new to eyelash extensions</List.Item>
                    <List.Item as='li'>everyday natural look</List.Item>
                </List>
                </Grid.Column>
                <Grid.Column>
                <List as='ul'>
                    <List.Item as='li'>sparse thin lashes</List.Item>
                    <List.Item as='li'>damaged natural lashes</List.Item>
                    <List.Item as='li'>those who want a dramatic look</List.Item>
                </List>
                </Grid.Column>
                <Grid.Column>
                <List as='ul'>
                    <List.Item as='li'>moderately sparse lashes</List.Item>
                    <List.Item as='li'>those who want more fullness</List.Item>
                    <List.Item as='li'>short and thin lashes</List.Item>
                </List>
                </Grid.Column>
              </Grid.Row>

            </Grid>
<p style={{padding:'25px'}}></p>
            <Divider fitted/>
            </Container>
        </div>

)}

}
