import PropTypes from 'prop-types';
import React from 'react';

export const Passwordfield = (props) => {
    const {value, onChange, placeholder} = props;
    return (
        <input type="password" 
        value={value} 
        onChange={evt => onChange(evt.target.value)} 
        placeholder={placeholder}
        />   
    );
};
Passwordfield.defaultProps = {
    value: ''
};
Passwordfield.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}
export default Passwordfield;