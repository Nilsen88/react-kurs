import PropTypes from 'prop-types';
import React from 'react';

export const Textarea = (props) => {
    const {value, onChange, placeholder} = props;
    return (
        <textarea
            value={value} 
            onChange={evt => onChange(evt.target.value)} 
            placeholder={placeholder}>
        </textarea>   
    );
};
Textarea.defaultProps = {
    value: ''
};
Textarea.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}
export default Textarea;