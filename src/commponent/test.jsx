import React, { Component } from "react";
import Addto from "./addto";

class Test extends Component {
  state = {
    newid: 4,
    bugs: [
      {
        id: 1,
        bugdescription: "capital letter",
        resolved: "false",
      },
      {
        id: 2,
        bugdescription: "capital letter",
        resolved: "false",
      },
      {
        id: 3,
        bugdescription: "capital letter",
        resolved: "false",
      },
      {
        id: 4,
        bugdescription: "capital letter",
        resolved: "false",
      },
    ],
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.bugs.map((val) => (
            <li>
              bug id:{val.id} your bug is:{val.bugdescription} resole:
              {val.resolved}
              <button onClick={() => this.resolve(val.id)}> resolve</button>
            </li>
          ))}
        </ul>
        <Addto onsubmitadding={this.onsubmitadding} />
      </div>
    );
  }
  resolve(id) {
    let bugs = this.state.bugs.map((value) => {
      if (id == value.id) {
        value.resolved = "true";
      }
      return value;
    });
    this.setState({ bugs });
    const bugsfalse = this.state.bugs.filter((val) => val.resolved !== "true");
    this.setState({ bugs: bugsfalse });
  }
  onsubmitadding = (event, Formik) => {
    event.preventDefault();
    console.log(Formik);
    this.state.bugs.push({
      id: this.state.newid,
      bugdescription: Formik.bugdescription,
      resolved: "false",
    });
    this.state.newid++;
    this.setState({ newId: this.state.newid });
    event.target.reset();
  };
}

export default Test;
