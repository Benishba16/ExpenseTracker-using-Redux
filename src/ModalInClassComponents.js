import React, { Component } from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './styles.css'

class ModalInClassComponents extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            values: {
                email: "",
                password: ""
              },
            openModal : false
        }
    }

    submitForm = e => {
        e.preventDefault();
        this.props.dispatch({
          type: "SUBMIT_FORM"
        });
      };

      handleInputChange = e =>
        this.setState(
        {
            values: { ...this.state.values, [e.target.name]: e.target.value }
        },
        () =>
            this.props.dispatch({
            type: "SET_FORMVALUES",
            payload: this.state.values
        })
    );

    onClickButton = e =>{
        e.preventDefault()
        this.setState({openModal : true})
    }

    onCloseModal = ()=>{
        this.setState({openModal : false})
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickButton}>Click Me!</button>
                <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                <div>
        <form onSubmit={this.submitForm}>
          <div className="input-group">
            <label htmlFor="email">E-mail Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.values.email}
              onChange={this.handleInputChange}
              title="Email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.values.password}
              onChange={this.handleInputChange}
              title="password"
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
                </Modal>   
            </div>
        )
    }  
}

export default ModalInClassComponents;