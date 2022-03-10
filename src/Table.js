import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Table = (props) => {
  const [date, setDate] = useState("");
  let [table, setTable] = useState(props.list);

  const handleChange = (e) => {
    e.preventDefault();
    setDate(e.target.value);
    const newTable = [];
    table = props.list;
    for (const row of table) {
      console.log("row",row);
      if (row.values.date === e.target.value) {
        newTable.push(row);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      }
    }
    setTable(newTable);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setTable(props.list)
  }

  useEffect(() => {
    setTable(props.list);
  }, [props.list]);

  return (
    <div>
      <div>
        <input type='date' value={date} onChange={handleChange} />
        <button onClick={handleReset}>Reset</button>
        <br />
      </div>
      <table>
        <tbody>
          <tr>
            <th>Expense Catagory</th>
            <th>Amount Spend</th>
            <th>Expense Name</th>
            <th>Date of Transaction</th>
            <th>Description</th>
          </tr>
          {table.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.values.catagory}</td>
                <td>{item.values.amount}</td>
                <td>{item.values.expensename}</td>
                <td>{item.values.date}</td>
                <td>{item.values.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.formValues,
  };
};

export default connect(mapStateToProps)(Table);
