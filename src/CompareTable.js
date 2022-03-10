import React,{Component} from "react";
import { connect } from "react-redux";

class CompareTable extends Component  {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      data : '',
  //   }
  // }

  // handleChange = e => {
  //   this.setState({
  //     data : e.target.value,
  //   })
  // }

  //  handleReset = e => {
  //    console.log("Reset");
  //    e.preventDefault();
  //  } 

  render() {
    console.log(this.props.table);
  return (
    <div>
      {/* <form>
        <br/>
        <label>Enter the date</label>
        <input type="date" value={this.state.data} onChange={this.handleChange}/>
        <button onClick={this.handleReset}>Reset</button>
      </form> */}
      <br/>
      <table>
        <tbody>
          <tr>
            <th>Expense Catagory</th>
            <th>Amount Spend</th>
            <th>Expense Name</th>
            <th>Date of Transaction</th>
            <th>Description</th>
          </tr>
          {this.props.table.map((item, index) => {
            // if(item.values.date === this.state.data)
            // {
            return (
              <tr key={index}>
                <td>{item.values.catagory}</td>
                <td>{item.values.amount}</td>
                <td>{item.values.expensename}</td>
                <td>{item.values.date}</td>
                <td>{item.values.description}</td>
              </tr>
            );
            // }
          })}
        </tbody>
      </table>
    </div>
  );
}
};

const mapStateToProps = (state) => {
  return {
    // data: state.date,
    table: state.formValues,
  };
};

export default connect(mapStateToProps)(CompareTable);
