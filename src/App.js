import React, { useState } from "react";
import "./styles.css";
import SignInForm from "./SignInForm";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Table from "./Table";
import CompareTable from "./CompareTable";
import "./Table.css";
import "./App.css";
import { connect } from "react-redux";
import Button from "./Button";

function App(props) {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className='App'>
        <br />

        <button onClick={() => setModal(true)}>Click Me</button>
        <br />

        <Modal open={modal} onClose={() => setModal(false)}>
          <h1>Expense Catagory Form</h1>
          <SignInForm />
        </Modal>
        <br />

        <Table />
        {/* <CompareTable/> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.date,
  };
};

export default connect(mapStateToProps)(App);
