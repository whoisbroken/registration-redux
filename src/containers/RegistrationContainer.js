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
      
      this.props.addUser(this.props.formData);
      this.props.showSuccessAlert();
      console.log(this.props)
      localStorage.setItem('users', JSON.stringify(this.props.formData));

      this.props.handleFormInputChange({
        id: null,
        userName: "",
        userGender: "Male",
        userCreditCard: "",
        withLoyalty: false,
        userCoupon: "",
        dateAdded: "",
      });
    } else {
      // this.props.showErrorAlert();
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
    // this.setState({
    //   showSuccessAlert: false,
    //   showErrorAlert: false
    // })
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
        showSuccessAlert={this.props.showSuccesAlert}
        showErrorAlert={this.props.showErrorAlert}
      />
    );    
  } 
}

const mapStateToProps = (state) => ({   
  formData: state.formData,
  joke: state.joke.value,
  isLoading: state.joke.isLoading,
  notificationMessage: state.notification.message,
  showSuccessAlert: state.notification.isVisible,
  showErrorAlert: state.notification.isVisible,
});

const mapDispatchToProps = (dispatch) => ({
  loadJoke: () => dispatch(loadJoke()),
  handleFormInputChange: (formData) => dispatch(handleFormChange(formData)),
  addUser: (userData) => dispatch(addUser(userData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);