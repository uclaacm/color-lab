import '../styles/swatch.scss';
function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

export function Swatch(props: { r: number, g:number, b:number }):JSX.Element {
  const rgb = 'rgb('+props.r+', '+props.g+', '+props.b+') ';
  const hex = '#' + componentToHex(props.r) + componentToHex(props.g) + componentToHex(props.b);
  return(
    <div className="swatch">
      <div className="swatch-color" style={{ backgroundColor: rgb}}></div>
      <div className="swatch-labels">
        <div className="swatch-hex">{hex}</div>
        <div className="swatch-rgb">{rgb}</div>
      </div>
    </div>
  );
}