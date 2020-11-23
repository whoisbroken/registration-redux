import React, { Component } from 'react';
import { connect } from 'react-redux';

import {addUser} from '../actions/actions';
import RegistrationForm from '../components/Registration/RegistrationForm';

const userData = {
  id: null,
  userName: "",
  userGender: "",
  userCreditCard: "",
  withLoyalty: false,
  userCoupon: "",
  dateAdded: new Date()
}

class RegistrationContainer extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      ...userData,
      showSuccessAlert: false,
      showErrorAlert: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = () => {

    if (this.handleValidation()) {
      this.props.addUser({ ...this.state, dateAdded: new Date().toString().slice(4, 24) });
      this.setState({
        userData,
        showSuccessAlert: true
      })
    } else {
      this.setState({
        showErrorAlert: true
      })
    }

  }

  handleValidation() {
    let fields = this.state;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields.userName) {
      formIsValid = false;
      errors["userName"] = "Cannot be empty";
    }

    //only letters
    if (typeof fields.userName !== "undefined") {
      if (!fields.userName.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
      }
    }

    return formIsValid;
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      showSuccessAlert: false,
      showErrorAlert: false
    })
  }


  render() {
    return (
      <RegistrationForm
        formData={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleClose={this.handleClose}
      />
    );  
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (userData) => dispatch(addUser(userData))
  }
}

export default connect(null, mapDispatchToProps)(RegistrationContainer);