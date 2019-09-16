import React,{Component} from 'react'
import { Container, Icon, Menu} from 'semantic-ui-react'
import {  Link } from 'react-router-dom';



export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state={facebook: false,instagram: false, yelp: false

        };
        this.toggleFacebook = this.toggleFacebook.bind(this);
        this.toggleInstagram = this.toggleInstagram.bind(this);
        this.toggleYelp = this.toggleYelp.bind(this);
    }

    toggleFacebook(){
        this.setState({facebook:!this.state.facebook})
    }
    toggleInstagram(){
        this.setState({instagram:!this.state.instagram})
    }
    toggleYelp(){
        this.setState({yelp:!this.state.yelp})
    }

      render() {

          var iconStyle ={opacity: 1}
        var iconStyle1;
        var iconStyle2;
        var iconStyle3;
        if(this.state.facebook){
            iconStyle1 = {opacity: 0.5, margin:"0 10.325px"}
        }else{
            iconStyle1= {opacity: 1,margin:"0 10.325px"}}

       if(this.state.instagram){
           iconStyle2 = {opacity: 0.5, margin:"0 10.325px"}
       }else{
              iconStyle2= {opacity: 1,margin:"0 10.325px"}}

      if(this.state.yelp){
          iconStyle3 = {opacity: 0.5, margin:"0 10.325px"}
      }else{
             iconStyle3= {opacity: 1,margin:"0 10.325px"}}

        return(
            <Container textAlign='center'>

                <div style={iconStyle}>
                  <a href='https://www.instagram.com/lashlab_yeg/'target="_blank" > <Icon name='facebook square' size='big' color='black' style={iconStyle1} onMouseEnter={this.toggleFacebook} onMouseLeave={this.toggleFacebook}/></a>
                   <a href='https://www.instagram.com/lashlab_yeg/'target="_blank" > <Icon name='instagram' size='big' color='black'style={iconStyle2} onMouseEnter={this.toggleInstagram} onMouseLeave={this.toggleInstagram}/></a>
                   <a href='https://www.instagram.com/lashlab_yeg/'target="_blank"> <Icon name='yelp' size='big' color='black'style={iconStyle3} onMouseEnter={this.toggleYelp} onMouseLeave={this.toggleYelp}/></a>
                  </div>

              <div>
              <Menu



                size='large'
                borderless
                compact
                color="pink"
                text
                style={{padding:"25px"}}
              >
                <Menu.Item as={Link} to={'faq'}> FAQ </Menu.Item>
                  <Menu.Item as={Link} to={'policies'}>
                    POLICIES
                    </Menu.Item>


                    </Menu>
              </div>
              <div>
                  <p style={{marginBottom:"100px" }}>Lash Lab YEG • North Edmonton •  780 906-3361 • 587 990-9085 •  © 2018  Lash Lab YEG Inc  • All rights reserved.</p>

              </div>
            </Container>
        )
    }}
