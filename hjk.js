import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      data: [{firstname: 'kk', lastname: 'uui', fullname: 'dd'},
      {firstname: 'Na', lastname: 'ff', fullname: 'd'},
      {firstname: 'zcd', lastname: 'das', fullname: 'saddas'}],
      firstname: "",     
      lastname: "",
      full:""
    }
  }

  handleChange = event => {
    if (event.target.name === "firstname")
      this.setState({ firstname: event.target.value });
    if (event.target.name === "lastname")
      this.setState({ lastname: event.target.value });
  };

  handleSubmit = event => {
    if (event.target.name === "firstname")
      this.setState({ firstname: event.target.value });
    if (event.target.name === "lastname")
      this.setState({ lastname: event.target.value });
  };

  renderEditable = cellInfo => {
    return (
      <div
        style={{ backgroundColor: "#fadafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
         </header> */}
        <p className="App-intro">
          <form>
          <h3>Table</h3>
          <br></br>
            <h5><b>Add new record</b></h5>
            <label>
              FirstName:
              <input
                type="text"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleChange}
              />
            </label>{" "}
            <label>
              LastName:
              <input
                type="text"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleChange}
              />
            </label> 

            <input type="submit" value="Add"  onSubmit={this.handleSubmit}/>
          </form>
        </p>
        <div>
       <ReactTable
            data={data}
            
            columns={[
              {
                Header: "First Name",
                accessor: "firstname",
                Cell: this.renderEditable
              },
              {
                Header: "Last Name",
                accessor: "lastname",
                Cell: this.renderEditable
              },
              {
                Header: "Full Name",
                id: "fullname",
                accessor: d => (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: d.firstname + " " + d.lastname
                    }}
                  />
                )
              }
            ]}
            defaultPageSize={1}
            style={{
              height: "100px" 
            }}
            className="-striped -highlight"
          /> 
        </div>
      </div>
    );
  }
}

export default Table;