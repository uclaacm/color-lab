import {Swatch} from '../Swatch';

export default function Page6():JSX.Element {
  return(
    <div id="level-six" className="level">
      <div className="title2">What color is this?</div>
      <div className='swatches single'>
        <Swatch r={0} g={255} b={255} mystery={true} showRGB={false}></Swatch>
      </div>
      <div className='colors'>
        <div className='single-color' style={{backgroundColor: 'red'}}></div>
        <div className='single-color' style={{backgroundColor: 'green'}}></div>
        <div className='single-color' style={{backgroundColor: 'blue'}}></div>
      </div>
    </div>
  );
}