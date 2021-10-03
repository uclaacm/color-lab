import { Link }from 'react-router-dom';
import ColoringPage from '../assets/background.png';
import '../styles/ending.scss';
export default function Ending():JSX.Element {
  return(
    <div id="ending">
      <div id="ending-container">
        <div id="ending-title">you did it!</div>
        <div id="ending-button-container">
          <Link to="/" className="ending-button" id="ending-playagain">play again</Link>
          <a href={ColoringPage} download="Color Lab Art" className="ending-button" id="ending-save">save your artwork</a>
        </div>
      </div>
      <img id="ending-image" src={ColoringPage} alt="completed coloring page"></img>
    </div>
  );
}
