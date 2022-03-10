import React, { Component } from "react";
import { submitFormValues, submitForm} from "./actions";
import { connect } from "react-redux";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catagory: "",
      amount: "",
      expensename: "",
      date: "",
      description: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    let message = {
      values: this.state,
    };
    this.props.onSubmitFormValues(message);
    this.props.onSubmitForm();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <div className='input-group'>
            <label htmlFor='catagory'>Expense Catagory</label>
            <input
              type='text'
              name='catagory'
              id='catagory'
              value={this.state.catagory}
              onChange={this.handleInputChange}
              title='Expense Catagory'
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor='amount'>Amount Spend</label>
            <input
              type='text'
              name='amount'
              id='amount'
              value={this.state.amount}
              onChange={this.handleInputChange}
              title='Amount Spend'
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor='expensename'>Expense Name</label>
            <input
              type='text'
              name='expensename'
              id='expensename'
              value={this.state.expensename}
              onChange={this.handleInputChange}
              title='Expense Name'
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor='date'>Date of Transaction</label>
            <input
              type='date'
              name='date'
              id='date'
              value={this.state.date}
              onChange={this.handleInputChange}
              title='Date of Transaction'
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              name='description'
              id='description'
              value={this.state.description}
              onChange={this.handleInputChange}
              title='Description'
              required
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
    data: state.formValues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitForm: () => {
      dispatch(submitForm());
    },
    onSubmitFormValues: (message) => {
      dispatch(submitFormValues(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
