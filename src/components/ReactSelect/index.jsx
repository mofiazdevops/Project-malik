import React from 'react';
import styled from "@emotion/styled";
import Select from 'react-select';

const SelectCommonSelect = styled(Select)`
  .Select__control {
    cursor: pointer;
    outline:none !important;
    min-height: 50px;
    border: 1px solid #D5D5D5;
    border-radius: 10px;
    background:transparent;
    font-style: normal;
    font-weight: 360;
    font-size: 14px;
    text-align:${(props) => props.center ? 'center' : ''};
    width:${(props) => props.width};
    margin-right:${(props) => props.width ? "10px" : ""}
  }

  .Select__control:hover {
    border-color: #a1a1a1;
  }

  .Select__control--is-focused {
    box-shadow: none;
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    color: #151515;
    font-size:14px;  }
`;

export default function ReactSelect({ padding, width, center, options, value, onChange, ...props }) {
  const selectOptionStyles = {
    control: styles => ({ ...styles, padding }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused
        ? '#F6F6F6'
        : isSelected
          ? '#F6F6F6'
          : undefined,
      color: isFocused
        ? '#151515'
        : isSelected
          ? '#151515'
          : undefined,
      margin: '10px',
      width: "auto",
      padding: '10px 15px 15px 10px',
      borderRadius: '5px',
      zIndex: 1,
      '&:hover':
      {
        cursor: 'pointer'
      }
    })
  };
  return (
    <SelectCommonSelect
      width={width}
      center={center}
      classNamePrefix="Select"
      placeholder="Select"
      styles={selectOptionStyles}
      options={options}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
