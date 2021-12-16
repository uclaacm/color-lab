import {Binary} from '../Binary';

export default function Page8():JSX.Element {
  return(
    <div id="level-eight" className="level">
      <div className="title2">Convert the binary number to an RGB code.</div>
      <Binary r={0} g={255} b={100} labels={true}></Binary>
      <div className='input-container'>
        rgb (
        <input type="text" className='input'></input>,
        <input type="text" className='input'></input>,
        <input type="text" className='input'></input>
        )
      </div>
    </div>
  );
}