import {connect} from 'react-redux';

import RegisterForm from './RegisterForm';
import * as registerFormDuck from './registerForm.duck';

const mapStateToProps = (globalState, ownProps) => {
    const state = registerFormDuck.getState(globalState);
    return {
        firstName: registerFormDuck.getFirstName(state),
        lastName: registerFormDuck.getLastName(state),
        dateOfBirth: registerFormDuck.getDateOfBirth(state),
        userName: registerFormDuck.getUserName(state),
        email: registerFormDuck.getEmail(state),
        avatarImgSrc: registerFormDuck.getAvatarImgSrc(state)
    };
};
const mapDispatchToProps = dispatch => ({
    onFirstNameChange: (evt, newValue) => dispatch(registerFormDuck.setFirstname(newValue)),
    onLastNameChange: (evt, newValue) => dispatch(registerFormDuck.setLastname(newValue)),
    onDateOfBirthChange: (evt, newValue) => dispatch(registerFormDuck.setDateOfBirth(newValue)),
    onUserNameChange: (evt, newValue) => dispatch(registerFormDuck.setUserName(newValue)),
    onEmailChange: (evt, newValue) => dispatch(registerFormDuck.setEmail(newValue)),
    onAvatarImageChange: (evt, newValue) => dispatch(registerFormDuck.setAvatarImgSrc(newValue)),
    onReset: () => dispatch(registerFormDuck.onReset()),
    onSubmit: () => {}
});
export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);