import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  Button,
  Container,
  Divider,


  Icon,
  Image,

  Menu,
  Responsive,
  Segment,
  Sidebar,

} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Logo from './images/lashlabyeglogo.jpg';
import Message from './Components/Message';
import About from './Components/About';
import Contact from './Components/Contact';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';

import TopHeader from './Components/TopHeader';




const HomepageLayout = () => (
<Container style={{backgroundColor:"white"}}>
  <TopHeader/>


      <Container>
      <Segment  vertical>

<p id="About"></p>
        <About/>
        </Segment>
    </Container>
<Container>
<p id="Services"></p>
    <Segment  vertical>

         <Services/>
    </Segment>
</Container>

    <Segment vertical >
        <p id="Lashmenu"></p>
        <container>
        <Pricing/>
         </container>
    </Segment>

 <container>
    <Segment vertical style={{padding:'30px'}}>
        <p id="Contacts"></p>
      <Contact/>
     </Segment>
 </container>


<Divider/>
      <Segment vertical  style={{ padding: '30px' }}>

          <Footer/>
      </Segment>





</Container>
)
export default HomepageLayout
