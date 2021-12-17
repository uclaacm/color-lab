import {Swatch} from '../Swatch';

export default function Page6(props:{
  setEnabled: (arg0: boolean)=> void,
  hexToRGB: (arg0: string) =>  {[k: string]: number},
  threeChoices: () => string[]
}):JSX.Element {
  const shuffledChoices:string[] = props.threeChoices();
  const correctAnswer = shuffledChoices[Math.floor(Math.random() *(shuffledChoices.length))];

  return(
    <div id="level-six" className="level">
      <div className="title2">What color is this?</div>
      <div className='swatches single'>
        <Swatch
          r={props.hexToRGB(correctAnswer).r}
          g={props.hexToRGB(correctAnswer).g}
          b={props.hexToRGB(correctAnswer).b}
          mystery={true}
          showRGB={false}
        ></Swatch>
      </div>
      <div className='colors'>
        {shuffledChoices.map((choice) => {
          return <div key={choice} className='single-color' style={{backgroundColor: choice}} onClick={()=> {
            if(choice == correctAnswer) props.setEnabled(true);
          }}></div>;
        })}
      </div>
    </div>
  );
}