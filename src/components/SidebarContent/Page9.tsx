import {Binary} from '../Binary';

export default function Page9():JSX.Element {
  return(
    <div id="level-nine" className="level">
      <div className="title2">Convert the binary number to an RGB code.</div>
      <Binary r={0} g={255} b={100} labels={false}></Binary>
      <div className='input-container'>
        #
        <input type="text" className='input'></input>
      </div>
    </div>
  );
}