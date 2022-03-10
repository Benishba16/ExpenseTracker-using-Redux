import { connect } from "react-redux";

const Button = props => (
  <div>
    Click this to
    <button onClick={e => props.dispatch({ type: "SUBMIT_FORM" })}>
      Trigger Form submit
    </button>
    from outside the form
  </div>
);

export default connect(null)(Button);