import React from 'react';
import Select from 'react-select';

import './DropDownInput.css';

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: 'none',
    color: 'white',
    // match with the menu
    // borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
    // Overwrittes the different states of border
    borderColor: 'white',
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    marginTop: '30px',
    height: '50px',
    // '&:hover': {
    //   // Overwrittes the different states of border
    //   borderColor: state.isFocused ? 'red' : 'blue',
    // },
  }),
  menu: (base) => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0,
    background: 'black',
    color: 'white',
  }),
  input: (base) => ({
    ...base,
    color: 'white',
  }),
};

class DropDownInput extends React.Component {
  render() {
    return (
      <Select
        placeholder={this.props.placeholder}
        className="login-form-select"
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: 'grey',
            primary: 'black',
          },
        })}
        options={this.props.options}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export default DropDownInput;
