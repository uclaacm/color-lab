import chroma from 'chroma-js';

import Select, { StylesConfig } from 'react-select';
import { ColourOption, colourOptions } from './data';

const dot = (color = 'transparent') => ({
  'alignItems': 'center',
  'display': 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles: StylesConfig<ColourOption> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    border: 'none',
    color: '#FFFFFF',
    fontSize: 'calc(10px + 0.6vw)',
    padding: '0.2vw 0',
  }),
  option: (styles, { data, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      'fontSize': 'calc(10px + 0.6vw)',
      'backgroundColor': isSelected || isFocused
        ? color.alpha(0.1).css()
        : undefined,
      'color': data.color,
      'cursor': 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: color.alpha(0.15).css(),
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  dropdownIndicator: defaultStyles => ({
    ...defaultStyles,
    color: 'white',
  }),
  indicatorSeparator: defaultStyles => ({
    ...defaultStyles,
    backgroundColor: 'white',
  }),
};

export default function Swatch():JSX.Element {
  return(
    <Select
      defaultValue={colourOptions[2]}
      options={colourOptions}
      styles={colourStyles}
      menuPlacement="top"
    />
  );
}
