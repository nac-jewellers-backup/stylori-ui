import React from "react";
import * as Yup from "yup";
import { Input } from "../InputComponents/TextField/Input";
import { Grid, InputAdornment, IconButton } from "@material-ui/core";
import   VisibilityOff  from "@material-ui/icons/VisibilityOff";
import  Visiblity  from "@material-ui/icons/Visibility";

// NOTABLE POINTS
//  Min and Max
// Email ID
// Confirm Email ID
// Mobile Number
// Number
// Password
// Repeat Password
// On Button Submit
// On Moving Out
// Live

function equalTo(ref, msg) {
  return Yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    message: msg || "${path} must be the same as ${reference}",
    params: {
      reference: ref.path
    },
    test: function(value) {
      return value === this.resolve(ref);
    }
  });
}
Yup.addMethod(Yup.string, "equalTo", equalTo);

export class Form extends React.Component {
  initialValues = {
    mailId: null,
    confirmMail: null,
    mobileNo: null,
    password: null,
    confirmPassword: null
  };

  errors = {
    mailId: {
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
    }
  };

  state = {
    values: this.initialValues,
    errors: this.initialValues,
    show: { password: false, confirmPassword: false }
  };

  handleSubmit = e => {
    e.preventDefault();
    let { confirmMail, confirmPassword, ...rest } = this.state.values;
    console.info("VALUES", rest);
  };

  handleChange = e => {
    let { values, errors } = this.state;
    errors = { ...errors, [e.target.name]: null };
    values = { ...values, [e.target.name]: e.target.value };
    this.setState({ values, errors });
  };

  handleInvalid = type => e => {
    e.preventDefault();
    let { errors } = this.state;
    errors[e.target.name] = this.errors[e.target.name][type];
    this.setState({ errors });
  };

  renderForm = () => {
    return (
      <>
       {this.props.inputFields}
       </>
    );
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
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
