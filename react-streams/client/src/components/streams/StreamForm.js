import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="ui error message">{error}</div>;
    }
  }

  renderInput = ({ input, label, placeholder, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} placeholder={placeholder} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formProps) => {
    this.props.onSubmit(formProps);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        action=""
        className="ui form error"
      >
        <Field
          name="title"
          label="Enter Title:"
          placeholder="stream-title"
          component={this.renderInput}
        />
        <Field
          name="description"
          label="Enter Description:"
          placeholder="stream-description"
          component={this.renderInput}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formProps) => {
  const errors = {};
  if (!formProps.title) {
    errors.title = "*You must enter a title";
  }

  if (!formProps.description) {
    errors.description = "*You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
