export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
}

export const colourOptions: readonly ColourOption[] = [
  { value: 'red', label: 'Red', color: '#FF0000'},
  { value: 'yellow', label: 'Yellow', color: '#fae20c' },
  { value: 'green', label: 'Green', color: '#00FF00' },
  { value: 'cyan', label: 'Cyan', color: '#13e0eb' },
  { value: 'blue', label: 'Blue', color: '#0000FF' },
  { value: 'magenta', label: 'Magenta', color: '#FF00FF' },
];