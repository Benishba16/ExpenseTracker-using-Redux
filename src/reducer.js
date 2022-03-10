const initialState = {
  formValues: [],
  message: "",
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_FORMVALUES":
      return {
        ...state,
        formValues: [ ...state.formValues,action.payload],
      };
    case "SUBMIT_FORM":
      console.log(state.formValues);
      return {
        ...state,
        message: "Form Submitted!",
      };
    default:
      return state;
  }
};

export default reducers;
