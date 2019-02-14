import React from "react";

class UserDisplay extends React.Component {

  deleteUser = (id) => {
    this.props.deleteUser(id); //this fires deleteUsersBackend in my actions 
  }

  render(){
    if (!!this.props.user) {
      let { user } = this.props;
      return (
        <div className="singleUserDiv">
          <h2>Single User</h2>
          <ul className="singleUserUl">
            <li>Username: {user.username}</li>
            <li>Phone: {user.phonenumber}</li>
            <li>Email: {user.email}</li>
          </ul>
          <div className='singleUserButtons'>
            <button >EDIT</button>
            <button onClick={() => this.deleteUser(user.id)}>DELETE</button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default UserDisplay;
