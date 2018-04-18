import PropTypes from 'prop-types';
import React from 'react';

export const Range = (props) => {
    const {value, onChange, placeholder, minVal, maxVal} = props;
    return (
        <input type="range" 
        min={minVal}
        max={maxVal} 
        value={value}
        onChange={evt => onChange(evt.target.value)}
        placeholder={placeholder}
        />
    );
};
Range.defaultProps = {
    value: ''
};
Range.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}
export default Range;