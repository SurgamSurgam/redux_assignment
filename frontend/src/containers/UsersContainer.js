import Users from '../components/Users.js';
import { connect } from 'react-redux';
import { getUsers } from '../actions/UserActions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(Users);
