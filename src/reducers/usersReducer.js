const initialState = [
    {
      id: 0,
      userName: "John",
      userGender: "Male",
      userCreditCard: "",
      withLoyalty: false,
      userCoupon: "",
      dateAdded: "Nov 28 2020 04:20:00"
    },
    {
      id: 1,
      userName: "Jane",
      userGender: "Female",
      userCreditCard: "",
      withLoyalty: false,
      userCoupon: "",
      dateAdded: "Sep 11 2001 02:40:00"
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