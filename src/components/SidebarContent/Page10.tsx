import {Binary} from '../Binary';
import {Swatch} from '../Swatch';

export default function Page10():JSX.Element {
  return(
    <div id="level-ten" className="level">
      <div className="title2">What color is this?</div>
      <Binary r={0} g={255} b={100} labels={false}></Binary>
      <div className="swatches">
        <Swatch r={0} g={35} b={80}></Swatch>
        <Swatch r={0} g={35} b={80}></Swatch>
        <Swatch r={0} g={35} b={80}></Swatch>
      </div>
    </div>
  );
}