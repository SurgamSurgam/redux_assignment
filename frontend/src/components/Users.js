import React from "react";

export default class Users extends React.Component {

  componentDidMount() {
    this.props.getUsers();
  }

  handleOnClick = e => {
    this.props.history.push("/users/" + e.target.value);
  };
  render(){
    let users = Object.values(this.props.users).map(user => {
      return (
        <li key={user.id} onClick={this.handleOnClick} value={user.id}>
          Username: {user.username} <br />
          Phone: {user.phonenumber} <br />
          Email: {user.email}
        </li>
      );
    });

  return (
    <div className="allUsersDiv">
      <h2>All Users</h2>
      <ul className="allUsersUl">{users}</ul>
    </div>
  );
 }
}
