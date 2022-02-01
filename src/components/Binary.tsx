import '../styles/binary.scss';

interface BinaryProps{
  r: number;
  g: number;
  b: number;
  labels: boolean;
}

export function Binary(props: BinaryProps):JSX.Element {
  return(
    <div className="binary">
      {props.labels && <span className="binary-section" id="red" data-bracket="red">{('00000000'+(props.r).toString(2)).slice(-8)}</span>}
      {props.labels && <span className="binary-section" id="green" data-bracket="green">{('00000000'+(props.g).toString(2)).slice(-8)}</span>}
      {props.labels && <span className="binary-section" id="blue" data-bracket="blue">{('00000000'+(props.b).toString(2)).slice(-8)}</span>}

      {!props.labels && <span className="binary-section">{('00000000'+(props.r).toString(2)).slice(-8)}</span>}
      {!props.labels && <span className="binary-section">{('00000000'+(props.g).toString(2)).slice(-8)}</span>}
      {!props.labels && <span className="binary-section">{('00000000'+(props.b).toString(2)).slice(-8)}</span>}
    </div>
  );
}