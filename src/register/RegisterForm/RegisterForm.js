import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from '../Avatar';

import classes from './RegisterForm.scss';

export class RegisterForm extends React.PureComponent{
    render(){
        const {props} = this;
        return (
            <div className={classes.container}>
                <h1>Register a new user</h1>
                <form>
                    <div>
                        <TextField floatingLabelText="First name" value={props.firstName} onChange={props.onFirstNameChange} fullWidth/>
                        <TextField floatingLabelText="Last name" value={props.lastName} onChange={props.onLastNameChange} fullWidth/>
                        <DatePicker floatingLabelText="Date of birth" value={props.dateOfBirth} onChange={props.onDateOfBirthChange} maxDate={new Date()} openToYearSelection fullWidth />
                        
                        <hr className={classes.separator}/>

                        <TextField floatingLabelText="User name" value={props.userName} onChange={props.onUserNameChange} hintText="Make it something unique" fullWidth/>
                        <TextField floatingLabelText="Email" value={props.email} onChange={props.onEmailChange} fullWidth/>                       
                    </div>
                    <div className={classes.avatarFrame}>
                        <Avatar src={props.avatarImgSrc}/>

                        <hr className={classes.separator}/>
                        
                        <TextField floatingLabelText="Avatar image url" value={props.avatarImgSrc} onChange={props.onAvatarImageChange} fullWidth/>                                        
                    </div>
                </form>
                <div className={classes.controls}>
                    <RaisedButton label="Reset" onClick={props.onReset}/>
                    <RaisedButton label="Submit" onClick={props.onSubmit} primary/>                    
                </div>
            </div>
        );
    }

    static propTypes = {
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        dateOfBirth: PropTypes.instanceOf(Date),
        userName: PropTypes.string,
        email: PropTypes.string,
        avatarImgSrc: PropTypes.string,

        onFirstNameChange: PropTypes.func.isRequired,
        onLastNameChange: PropTypes.func.isRequired,
        onDateOfBirthChange: PropTypes.func.isRequired,
        onUserNameChange: PropTypes.func.isRequired,
        onEmailChange: PropTypes.func.isRequired,
        onAvatarImageChange: PropTypes.func.isRequired,

        onSubmit: PropTypes.func.isRequired,
        onReset: PropTypes.func.isRequired
    }
}
export default RegisterForm;