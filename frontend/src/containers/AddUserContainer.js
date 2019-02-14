import { connect } from "react-redux";
import AddUser from "../components/AddUser.js";
import { addUserBackend } from '../actions/UserActions.js';

const mapStateToProps = (state, ownProps) => {
  let user = state.users[ownProps.match.params.id]
  return {
    user: user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addUser: (user) => {

        dispatch(addUserBackend(user))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (AddUser);
