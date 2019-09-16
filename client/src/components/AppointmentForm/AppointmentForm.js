import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { Container, Grid, Responsive } from "semantic-ui-react";

import { injectStripe } from "react-stripe-elements";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";
import Steps from "./Steps";
import AppointmentFields from "./AppointmentFields";
import ReviewFields from "./ReviewFields";
import PaymentFields from "./PaymentFields";

import ConfirmPage from "./ConfirmPage";

class AppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
      fetching: false
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  handleSubmit = async e => {
    try {
      let token = await this.props.stripe.createToken({ name: e.name });
      if (token.error) {
      } else {
        this.setState({ fetching: true });

        axios
          .post("/api/charge", { e, token })
          .then(() => {
            this.setState({
              page: 4,
              fetching: false
            });
          })
          .catch(error => {
            //this.setState({fetching: false})
            console.log(error);
          });
      }
    } catch (e) {
      throw e;
    }
  };

  close() {}
  render() {
    const { page } = this.state;
    return (
      <Container>
        <Grid textAlign="center">
          <Grid.Column textAlign="left">
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
              <Steps page={page} />
            </Responsive>

            {page === 1 && <AppointmentFields onSubmit={this.nextPage} />}

            {page === 2 && (
              <ReviewFields
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
              />
            )}

            {page === 3 && (
              <PaymentFields
                previousPage={this.previousPage}
                fetching={this.state.fetching}
                onSubmit={v => this.handleSubmit(v)}
              />
            )}

            {page === 4 && <ConfirmPage />}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default injectStripe(
  connect(
    null,
    actions
  )(withRouter(AppointmentForm))
);
