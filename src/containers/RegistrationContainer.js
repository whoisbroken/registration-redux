import React, { Component } from 'react';
import { connect } from 'react-redux';

import {addUser, handleFormChange, showSuccessAlert, 
  showErrorAlert, hideNotification, loadJoke} from '../actions/actions';
import RegistrationForm from '../components/Registration/RegistrationForm';

class RegistrationContainer extends Component { 
  
  componentDidMount() {
    this.props.loadJoke()
  }
  
  
  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    
    this.props.handleFormInputChange({ [name]: value });
  }
  
  handleSubmit = () => {
    
    if (this.handleValidation()) {
      
      this.props.addUser({ ...this.props.formData, dateAdded: new Date().toString().slice(4, 24) });
      this.props.showSuccessAlert(this.props.notification);
      console.log(this.props)
     // localStorage.setItem('users', JSON.stringify(this.props.formData));

      this.props.handleFormInputChange({
        id: null,
        userName: "",
        userGender: "Male",
        userCreditCard: "",
        withLoyalty: false,
        userCoupon: "",
        dateAdded: new Date().toString(),
      });
    } else {
      this.props.showErrorAlert(this.props.notification);
    }

  }

  handleValidation() {
    let fields = this.props.formData;
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
    this.props.hideNotification(this.props.notification);
  }


  render() {
    return (
      <RegistrationForm
        formData={this.props.formData}
        onInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleClose={this.handleClose}
        joke={this.props.joke}
        isLoading={this.props.isLoading}
        notificationMessage={this.props.notificationMessage}
        hideNotification={this.props.hideNotification}
        successAlert={this.props.successAlert}
        errorAlert={this.props.errorAlert}
      />
    );    
  } 
}

const mapStateToProps = (state) => ({   
  formData: state.formData,
  joke: state.joke.value,
  isLoading: state.joke.isLoading,
  notification: state.notification,
  notificationMessage: state.notification.message,
  successAlert: state.notification.successAlert,
  errorAlert: state.notification.errorAlert,
});

const mapDispatchToProps = (dispatch) => ({
  loadJoke: () => dispatch(loadJoke()),
  handleFormInputChange: (formData) => dispatch(handleFormChange(formData)),
  addUser: (userData) => dispatch(addUser(userData)),
  showSuccessAlert: () => dispatch(showSuccessAlert()),
  showErrorAlert: () => dispatch(showErrorAlert()),
  hideNotification: () => dispatch(hideNotification()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);