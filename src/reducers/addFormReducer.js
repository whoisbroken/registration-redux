const initialState = {
  id: null,
  userName: "",
  userGender: "Male",
  userCreditCard: "",
  withLoyalty: false,
  userCoupon: "",
  dateAdded: new Date().toString().slice(4, 24),
};

export const addFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_FORM_CHANGE":
      return {
        ...state, ...action.payload,
      };

    default:
      return state;
  }
};