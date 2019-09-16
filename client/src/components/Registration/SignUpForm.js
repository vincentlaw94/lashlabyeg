import React, { Component } from "react";
import { connect } from "react-redux";

import { Container, Segment } from "semantic-ui-react";
import AccountFields from "./AccountFields";
import ContactFields from "./ContactFields";
import HistoryFields from "./HistoryFields";
import WaiverFields from "./WaiverFields";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit, submitForm, history } = this.props;
    const { page } = this.state;
    return (
      <div>
        <Container>
          <Segment>
            {page === 1 && <AccountFields onSubmit={this.nextPage} />}
            {page === 2 && (
              <ContactFields
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
              />
            )}
            {page === 3 && (
              <HistoryFields
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
              />
            )}
            {page === 4 && (
              <WaiverFields
                previousPage={this.previousPage}
                onSubmit={v => submitForm(v, history)}
              />
            )}
          </Segment>
        </Container>
      </div>
    );
  }
}
export default connect(
  null,
  actions
)(withRouter(SignUpForm));
