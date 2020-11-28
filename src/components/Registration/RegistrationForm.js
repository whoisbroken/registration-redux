import React from 'react';
import InputMask from "react-input-mask";
import "./RegistrationForm.scss";

import {
  Button, Checkbox, TextField, FormControlLabel,
  InputLabel, Select, MenuItem, Snackbar,
  Box, CircularProgress, Typography
} from '@material-ui/core';
import { Alert } from "@material-ui/lab"

const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      ref={inputRef}
      mask={"9999 9999 9999 9999"}
    />
  );
}

const RegistrationForm = ({ formData, onInputChange, handleSubmit, handleClose, isLoading, joke, notificationMessage, successAlert, errorAlert }) => {
  return (
      <form className="Registration">
          <TextField
            required={true}
            className="Registration_Input"
            type="text"
            name="userName"
            value={formData.userName}
            onChange={onInputChange}
            fullWidth
            label="Name"
          />
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            className="Registration_Input"
            id="demo-simple-select"
            value={formData.userGender}
            onChange={onInputChange}
            name="userGender"
            fullWidth
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
          <TextField
            className="Registration_Input"
            value={formData.userCreditCard}
            onChange={onInputChange}
            type="text"
            name="userCreditCard"
            label="Credit Card"
            fullWidth
            InputProps={{
              inputComponent: TextMaskCustom
            }}
          >
          </TextField>
          <FormControlLabel
            value="top"
            label="Loyalty"
            labelPlacement="end"
            control={<Checkbox
              className="Registration_Input"
              type="checkbox"
              name="withLoyalty"
              value={formData.withLoyalty}
              onChange={onInputChange}
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }} />}
          />
          {formData.withLoyalty ?
            <TextField
              className="Registration_Input"
              type="text"
              name="userCoupon"
              value={formData.userCoupon}
              onChange={onInputChange}
              label="Loyalty"
              fullWidth
              InputProps={{
                inputComponent: TextMaskCustom
              }}
            /> : null}

          <Button
            className="Registration_Btn"
            onClick={handleSubmit}
            variant="outlined"
            color="primary"
            fullWidth
          >Send</Button>
        <Snackbar open={successAlert} autoHideDuration={4000} onClose={handleClose} >
          <Alert
            variant="outlined"
            severity="success"
            onClose={handleClose}
            >
            {notificationMessage}
        </Alert>
        </Snackbar>
        <Snackbar open={errorAlert} autoHideDuration={4000} onClose={handleClose} >
          <Alert
            variant="outlined"
            severity="error"
            onClose={handleClose}
            >
            {notificationMessage}
        </Alert>
        </Snackbar>
        <Box mt={5}>
          {isLoading ? <CircularProgress /> : <Typography>{joke}</Typography>}
        </Box>
      </form>

  );
};

export default RegistrationForm;