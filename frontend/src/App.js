import React, { Component } from "react";
import { Route, Switch, Link, withRouter } from "react-router-dom";
import UsersContainer from './containers/UsersContainer.js'
import UserDisplayContainer from "./containers/UserDisplayContainer.js";
import AddUserContainer from "./containers/AddUserContainer.js";

class App extends Component {
  // state = {
  //   usersData: [],
  //   formSubmitted: false,
  //   newUser: { username: "", phonenumber: "", email: "", password: "" },
  //   editing: null,
  //   errorMessage: '',
  //   numUserDisplayed: 2,
  //   offsetBy: 0,
  // };
  //
  // componentDidMount() {
  //   this.getAllUsers();
  // }
  //
  // getAllUsers = async (numUsers=2, offsetBy=0) => {
  //   let response = await axios.get("/users", {
  //   params: {
  //     limit: numUsers,
  //     offset: offsetBy
  //   }
  // });
  //   this.setState({
  //     usersData: response.data.users,
  //     formSubmitted: false,
  //     offsetBy: response.data.users[0].id <= 1  || response.data.users[1].id <= 1 ? 0 : this.state.offsetBy + 2,
  //     numUserDisplayed: response.data.users[0].id <= 1 || response.data.users[1].id <= 1 ? 2 : this.state.numUserDisplayed,
  //   });
  // };
  //
  // resetState = () => {
  //   this.setState({
  //     formSubmitted: false,
  //     newUser: { ...this.state.newUser, username: "", phonenumber: "", email: "", password: "" },
  //     editing: null,
  //     errorMessage:''
  //   });
  // };
  //


  //
  // toggleEditing = (id) => {
  //   if (this.state.editing !== id) {
  //     this.setState({
  //       editing: id
  //     })
  //   } else {
  //     this.resetState()
  //   }
  // }
  //
  // handleEditSubmit = (e, id)=> {
  //   e.preventDefault();
  //
  //   axios.patch(`/users/${id}`,
  //     this.state.newUser
  //   )
  //   .then(()=>{
  //     this.getAllUsers();
  //   })
  //   .then(()=>{
  //     this.resetState()
  //   })
  //   .catch(error => {
  //     console.log("ERROR on Edit Submit", error);
  //   });
  // };


  render() {
    return (
      <div className="app">
        <h1>Clone Users App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">All Users</Link>
          <Link to="/users/add">Add User</Link>
        </nav>
        <Switch>
          <Route path="/users/add" component={AddUserContainer} />
          <Route path="/users/:id" component={UserDisplayContainer} />
          <Route path="/users" component={UsersContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
