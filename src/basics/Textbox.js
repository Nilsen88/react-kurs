import PropTypes from 'prop-types';
import React from 'react';

export const Textbox = (props) => {
    const {value, onChange, placeholder} = props;
    return (
        <input type="text" 
        value={value} 
        onChange={evt => onChange(evt.target.value)} 
        placeholder={placeholder}
        />   
    );
};
Textbox.defaultProps = {
    value: ''
};
Textbox.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}
export default Textbox;