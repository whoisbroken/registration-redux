import React, { Component } from 'react';
import { connect } from 'react-redux';

import {addUser, handleFormChange} from '../actions/actions';
import RegistrationForm from '../components/Registration/RegistrationForm';

class RegistrationContainer extends Component { 

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.props.handleFormInputChange({ [name]: value });
  }

  handleSubmit = () => {

    if (this.handleValidation()) {

       this.props.addUser(this.props.formData);
      // this.setState({
      //   userData,
      //   showSuccessAlert: true
      // })   

      this.props.handleFormInputChange({
        id: null,
        userName: "",
        userGender: "male",
        userCreditCard: "",
        withLoyalty: false,
        userCoupon: "",
        dateAdded: "",
      });
    } else {
      // this.setState({
      //   showErrorAlert: true
      // })
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
      />
    );    
  } 
}

const mapStateToProps = (state) => ({   
  formData: state.formData,
});

const mapDispatchToProps = (dispatch) => ({
  handleFormInputChange: (formData) => dispatch(handleFormChange(formData)),
  addUser: (userData) => dispatch(addUser(userData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);