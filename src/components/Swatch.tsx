import '../styles/swatch.scss';
function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

interface SwatchProps{
  r: number;
  g:number;
  b:number;
  showRGB?: boolean;
  mystery?: boolean;
  binary?: boolean;
}

Swatch.defaultProps = {
  showRGB: true,
  mystery: false,
  binary: false,
};

export function Swatch(props: SwatchProps):JSX.Element {
  const rgb = 'rgb('+props.r+', '+props.g+', '+props.b+') ';
  const hex = '#' + componentToHex(props.r) + componentToHex(props.g) + componentToHex(props.b);
  return(
    <div className="swatch">
      {
        props.mystery?
          <div className="swatch-mystery">?</div>:
          <div className="swatch-color" style={{ backgroundColor: rgb}}></div>
      }
      <div className="swatch-labels">
        {!props.binary && <div className="swatch-hex">{hex}</div>}
        {(props.showRGB && !props.binary) && <div className="swatch-rgb">{rgb}</div>}
        {props.binary && <div className="swatch-bin">R: {('00000000'+(props.r).toString(2)).slice(-8)}</div>}
        {props.binary && <div className="swatch-bin">G: {('00000000'+(props.g).toString(2)).slice(-8)}</div>}
        {props.binary && <div className="swatch-bin">B: {('00000000'+(props.b).toString(2)).slice(-8)}</div>}
      </div>
    </div>
  );
}