import PropTypes from 'prop-types';
import React from 'react';

export const Datepicker = (props) => {
    const {value, onChange, placeholder} = props;
    return (
        <input type="date" 
            value={value} 
            onChange={evt => onChange(evt.target.value)} 
            placeholder={placeholder} 
        /> 
    );
};
Datepicker.defaultProps = {
    value: ''
};
Datepicker.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}
export default Datepicker;