import {Swatch} from '../Swatch';

const choiceDict: {[k: string]: string} = {red: '#FF0000', green: '#00FF00', blue: '#0000FF', magenta: '#FF00FF', cyan: '#00FFFF', yellow: '#FFFF00'};
const choices = Object.values(choiceDict);
const shuffledChoices: string[] =[];
while(shuffledChoices.length < 3) {
  const chosen = choices[Math.floor(Math.random() *(choices.length))];
  if (!shuffledChoices.includes(chosen)) {
    shuffledChoices.push(chosen);
  }
}
const correctAnswer = shuffledChoices[Math.floor(Math.random() *(shuffledChoices.length))];


export default function Page6(props:{
  setEnabled: (arg0: boolean)=> void,
  hexToRGB: (arg0: string) =>  {[k: string]: number},
}):JSX.Element {

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