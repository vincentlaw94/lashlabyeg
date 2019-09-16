import React,{Component} from 'react'
import { Message,Icon } from 'semantic-ui-react'


export default class Services extends Component {
    state = { visible: true }

      handleDismiss = () => {
        this.setState({ visible: false })


      }

      render() {
        if (this.state.visible) {
          return (
            <a href="/onlinebooking"><Message
              onDismiss={this.handleDismiss}
              header='Schedule an Appointment Now!'
              size='small'
              content='Call Text (780) 906-3367 / (587) 990-9085 • DM Instagram @lashlab_yeg • Book Online '
              color="black"
              style={{position:"fixed", zIndex:2, top:0,left:0}}
              icon='comment alternate'

        /></a>
          )
        }
}
}
