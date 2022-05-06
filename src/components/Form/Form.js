import React from "react";
import { Grid } from "@material-ui/core";

export class Form extends React.Component {
  

  errors = {
    mailId: {
      invalid: "Enter a valid mail id",
      required: "Email ID is required!"
    },
    mail: {
      invalid: "Enter a valid mail id",
      required: "Email ID is required!"
    },
    confirmMail: {
      invalid: "Mail ID's are not matching",
      required: "Email ID is required!"
    },
    mobileNo: {
      invalid: "Invalid mobile number",
      required: "Mobile number is required!"
    },
    password: {
      invalid: "Password should have special characters",
      required: "Password is required!"
    },
    confirmPassword: {
      invalid: "Passwords do not match!",
      required: "Confirm Password is required"
    },
    name: {
      invalid: "Passwords do not match!",
      required: "Confirm Name is required"
    },
    request: {
      required: "Confirm request is required"
    },
    title: {
      required: "Confirm title is required"
    }
  };

  state = {
    values:'',
    errors: this.initialValues,
    errorvalid: {},
    show: { password: false, confirmPassword: false }
  };

  handleSubmit = e => {
    e.preventDefault();
    let { confirmMail, confirmPassword } = this.state.values;
  };

  handleChange = e => {
    let { values, errors } = this.state;
    errors = { ...errors, [e.target.name]: null };
    values = { ...values, [e.target.name]: e.target.value };
    this.setState({ values, errors });
  };

  handleInvalid = type => e => {
    e.preventDefault();
    let { errorvalid } = this.state; 
    errorvalid[e.target.name] = true;
    this.setState({ errorvalid });
  };


  
  renderForm = () => {
    return (
      <>
        {this.props.children(this.state.errorvalid, this.handleInvalid, this.errors)}
      </>
    );
  };

  render() {
    return (
      <div>
        <form
          action="javascript:void(0)"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          onInvalid={this.handleInvalid("invalid")}
          onError={this.handleInvalid("required")}
          style={{ width: "100%" }}
        >
          <Grid container>{this.renderForm()}</Grid>
        </form>
      </div>
    );
  }
}
