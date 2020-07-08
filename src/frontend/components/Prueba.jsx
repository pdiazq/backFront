
let data = [
  {
    dataConnectionName: "Customer_Details",
    dataConnectionType: "NO_SQL",
    databaseHost: "17.8.10.26",
    pluginName: "AGT1_Customer_Details",
    createdDate: "2018-09-23",
    createBy: "Admin"
  },
  {
    dataConnectionName: "User_Details",
    dataConnectionType: "NO_SQL",
    databaseHost: "17.8.10.26",
    pluginName: "AGT1_Customer_Details",
    createdDate: "2018-09-24",
    createBy: "Admin"
  },
  {
    dataConnectionName: "Manager_Details",
    dataConnectionType: "NO_SQL",
    databaseHost: "17.8.10.26",
    pluginName: "AGT1_Customer_Details",
    createdDate: "2018-09-25",
    createBy: "Admin"
  },
  {
    dataConnectionName: "Director_Details",
    dataConnectionType: "NO_SQL",
    databaseHost: "17.8.10.26",
    pluginName: "AGT1_Customer_Details",
    createdDate: "2018-09-26",
    createBy: "Admin"
  }
];

// Give each element a unique id that is used as key
data.forEach(el => el.id = Math.random());

class App extends React.Component {
  state = {
    data,
    filteredData: data
  };

  _handleSearchChange = e => {
    const { value } = e.target;
    const lowercasedValue = value.toLowerCase();

    this.setState(prevState => {
      const filteredData = prevState.data.filter(el =>
        el.dataConnectionName.toLowerCase().includes(lowercasedValue)
      );

      return { filteredData };
    });
  };

  render() {
    const { filteredData } = this.state;

    return (
      <div>
        <input onChange={this._handleSearchChange} placeholder="Search"/>
        {filteredData.map(el => (
          <div key={el.key}>
            <div>
              {el.dataConnectionName} - {el.pluginName} - {el.createdDate} - {el.createBy}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));