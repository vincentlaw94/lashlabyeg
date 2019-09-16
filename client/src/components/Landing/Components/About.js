import React,{Component} from 'react'
import { Container, Divider, Icon, Image, Segment} from 'semantic-ui-react'

function importAll(r) {
let images = {};
r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });

return images;
}

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));


export default class Services extends Component {
    constructor(props){
        super(props);
        this.state = { index: 0};

    }

    componentDidMount(){
        this.timerID=setInterval(()=>this.tick(),3000);

    }

    tick(){
        if (this.state.index === 3){
            this.setState({index:0});
        } else {
            this.setState((prevState) => ({
  index: prevState.index + 1
}));
        }


    }

      render() {

        return(

            <Container textAlign='center'>
                <Image src={images[Object.keys(images)[this.state.index]]} fluid size="huge" rounded  style={{margin:"auto",height:"450px"}}/>




                <p style={{padding:"25px"}}>Lash Lab YEG is Edmonton's premier full-service eyelash extension boutique, specializing in semi-permanent lash extensions. </p>
                <blockquote style={{  position: "relative",
                padding: "25px",
                border: "1px solid",
                textRendering: 'optimizeLegibility',
                borderWidth:'0 0 0 1px',
                lineHeight: '1.6em',
                fontSize: "25"

                }}> <span style={{fontSize:"15px"}}>We craft</span>  finely detailed, premium eyelash extensions.</blockquote>
<Divider fitter/>
</Container>
        )
    }
}
