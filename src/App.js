import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddNote from "./AddNote";
import LoginPage from "./LoginPage";
import { Route, Switch, withRouter } from "react-router-dom";
import Styled from "styled-components";
const Keeper = (props) => {
  return (
    <div className="note">
      <h3>{props.title}</h3>
      <span>{props.text}</span>
      <button className="deleteBtn" onClick={props.onDelete}>
        Delete
      </button>
    </div>
  );
};

var id = 0;
class App extends React.Component {
  state = {
    notes: [],
    data: [],
    authenticate: false,
  };
  componentDidMount() {
    console.log(this.state.data);
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((res) => res.json())
        .then((data) => {
          this.setState({ data: data });
        })
        .catch((err) => console.log(err));
    }, 3000);
  }
  authenticated = () => {
    this.setState({ authenticate: false });
    this.props.history.push("/");
  };

  addNotes = (e, title, text) => {
    e.preventDefault();
    this.setState({
      notes: [
        ...this.state.notes,
        { id: new Date().getMilliseconds(), title, text },
      ],
    });
  };
  deleteNotes = (id) => {
    this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
  };
  loggedIn = (event, pass) => {
    event.preventDefault();
    if (pass.length >= 7) {
      this.setState({ authenticate: true });
      this.props.history.push("/addNotes");
    } else {
      this.setState({ authenticate: false });
      //this.props.history.replace("/");
    }
  };
  render = () => {
    return (
      <div className="container">
        <Switch>
          {this.state.authenticate === false ? (
            <div>
              <Route path="/" exact>
                <LoginPage changed={this.loggedIn} />
              </Route>
            </div>
          ) : (
            <div>
              <Route path="/addNotes">
                <Header webName="Keeper" />
                <AddNote click={this.addNotes} backward={this.authenticated} />
                {this.state.notes.map((note) => {
                  return (
                    <Keeper
                      onDelete={() => {
                        this.deleteNotes(note.id);
                      }}
                      id={note.id}
                      title={note.title}
                      text={note.text}
                    />
                  );
                })}
              </Route>
            </div>
          )}
          <Route path="*">Not Found</Route>
        </Switch>
        <Footer />
      </div>
    );
  };
}

export default withRouter(App);
