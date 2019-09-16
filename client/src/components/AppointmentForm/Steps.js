import React, { Component } from 'react';
import { Segment , Step} from 'semantic-ui-react';
import { connect } from 'react-redux';
class Steps extends Component{


render (){
    switch (this.props.page)
    {
        case 1:
        return(

            <Step.Group ordered unstackable attached='top'>
                <Step active>
                  <Step.Content>
                    <Step.Title>Schedule</Step.Title>

                  </Step.Content>
                </Step>

                <Step >
                  <Step.Content>
                    <Step.Title>Review</Step.Title>

                  </Step.Content>
                </Step>

            <Step >
              <Step.Content>
                <Step.Title>Payment</Step.Title>
              </Step.Content>
            </Step>
            <Step>
              <Step.Content>
                <Step.Title>Complete</Step.Title>

              </Step.Content>
            </Step>
          </Step.Group>)



        case 2:
        return (
            <Step.Group ordered unstackable attached='top'>

                <Step>
                  <Step.Content>
                    <Step.Title>Schedule</Step.Title>

                  </Step.Content>
                </Step>

                <Step active>
                  <Step.Content>
                    <Step.Title>Review</Step.Title>

                  </Step.Content>
                </Step>

            <Step >
              <Step.Content>
                <Step.Title>Payment</Step.Title>
              </Step.Content>
            </Step>
            <Step>
              <Step.Content>
                <Step.Title>Complete</Step.Title>

              </Step.Content>
            </Step>
          </Step.Group>

        )

        case 3:
        return (
            <Step.Group ordered unstackable attached='top'>

                <Step>
                  <Step.Content>
                    <Step.Title>Schedule</Step.Title>

                  </Step.Content>
                </Step>

                <Step >
                  <Step.Content>
                    <Step.Title>Review</Step.Title>

                  </Step.Content>
                </Step>

            <Step active>
              <Step.Content>
                <Step.Title>Payment</Step.Title>
              </Step.Content>
            </Step>
            <Step>
              <Step.Content>
                <Step.Title>Complete</Step.Title>

              </Step.Content>
            </Step>
          </Step.Group>

        )
        case 4:
        return (
            <Step.Group ordered unstackable attached='top'>

            <Step>
              <Step.Content>
                <Step.Title>Schedule</Step.Title>

              </Step.Content>
            </Step>

            <Step >
              <Step.Content>
                <Step.Title>Review</Step.Title>

              </Step.Content>
            </Step>
            <Step >
              <Step.Content>
                <Step.Title>Payment</Step.Title>
              </Step.Content>
            </Step>

            <Step active>
              <Step.Content>
                <Step.Title>Complete</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>

        )

    }

}
}


export default Steps;
