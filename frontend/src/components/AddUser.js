import React from "react";

class AddUser extends React.Component {
  state = {
    newUser: { username: "", phonenumber: "", email: "", password: "" }
  }

  handleOnChange = e => {
    this.setState({
      newUser: { ...this.state.newUser, [e.target.name]: e.target.value }
    });
  };

  handleOnSubmit = async e => {
    e.preventDefault();
    await this.props.addUser(this.state.newUser);
    this.props.history.push(`/users`);
  };


  render () {
    console.log(this.state);
    debugger;
    let { newUser } = this.state;

    return (
      <div className="formDiv">
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={newUser.name}
            onChange={this.handleOnChange}
            required
          />
          <br />
          <input
            type="text"
            name="phonenumber"
            placeholder="Phone Number"
            value={newUser.phonenumber}
            onChange={this.handleOnChange}
            required
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={this.handleOnChange}
            required
          />
          <br />
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={newUser.password}
            onChange={this.handleOnChange}
            required
          />
          <br />
          <input className='addButton' type="submit" />
        </form>
      </div>
    );
  };
}

export default AddUser;
