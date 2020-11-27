const initialState = [
    {
      id: 0,
      userName: "John",
      userGender: "Male",
      userCreditCard: "",
      withLoyalty: false,
      userCoupon: "",
      dateAdded: "10 Nov"
    },
    {
      id: 1,
      userName: "Jane",
      userGender: "Female",
      userCreditCard: "",
      withLoyalty: false,
      userCoupon: "",
      dateAdded: "12 Nov"
    }
  ];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload]
      
      default:
        return state;
  }
}