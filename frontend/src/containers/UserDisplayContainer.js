import { connect } from "react-redux";
import UserDisplay from "../components/UserDisplay";
import { deleteUserBackend } from '../actions/UserActions.js';

const mapStateToProps = (state, ownProps) => {
  let user = state.users[ownProps.match.params.id]
  return {
    user: user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteUser: () => dispatch(deleteUserBackend(ownProps.match.params.id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (UserDisplay);
