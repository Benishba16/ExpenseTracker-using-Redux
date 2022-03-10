import { SUBMIT_FORM, SUBMIT_FORMVALUES, TABLE_SUBMIT } from "./actionTypes";

export function submitFormValues(values) {
  return {
    type: SUBMIT_FORMVALUES,
    payload: values,
  };
}
export function submitForm() {
  return {
    type: SUBMIT_FORM,
  };
}

