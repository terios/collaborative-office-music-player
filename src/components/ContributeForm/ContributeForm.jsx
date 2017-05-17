import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form/immutable';

const renderField = ({
  input,
  label,
  type,
  meta: {
    touched,
    error
  }
}) => (
  <div className="form-control">
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/> {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const ImmutableForm = (props) => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <div className="contribute-form">
      <form onSubmit={handleSubmit}>
        <Field name="username" type="text" component={renderField} label="Username"/>
        <Field name="videolink" type="text" component={renderField} label="Video Link"/>
        <div className="action-container">
          <button className="primary" type="submit" disabled={submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'contribute'
})(ImmutableForm)
