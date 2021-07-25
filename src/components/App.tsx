import '../assets/WestwoodSans-Regular.ttf';
import '../styles/landing.scss';
import '../styles/ending.scss';
import {useState} from 'react';

import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  Link,
  useLocation }from 'react-router-dom';
import ColoringPage from '../assets/background.png';
import TeachLALogo from '../assets/teach-la-logo.svg';


const pages = ['/','/level1','/level2','/level3','/level4','/level5','/level6','/level7','/level8', '/level9', '/level10', '/ending'];
const titles = [
  'match the color',
  'match another one',
  'try it blind?',
  'one more time',
  'let\'s switch it up',
  'a little different...',
  'a "bit" harder',
  'a real challenge',
  'another round',
  'home stretch!',
];
const content = [
  <One key="1"></One>,
  <Two key="2"></Two>,
  <Three key="3"></Three>,
  <Four key="4"></Four>,
  <Five key="5"></Five>,
  <Six key="6"></Six>,
  <Seven key="7"></Seven>,
  <Eight key="8"></Eight>,
  <Nine key="9"></Nine>,
  <Ten key="10"></Ten>,
];

function App(): JSX.Element {

  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Router>
        {modalShow && <Modal
          show={setModalShow}
        ></Modal>}
        <div>
          <Switch>
            <Route exact path="/">
              <Landing
                show={setModalShow}
              ></Landing>
            </Route>
            <Route exact path="/ending">
              <Ending></Ending>
            </Route>
            <Route>
              <Level />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>


  );
}

function Modal(props: any) {
  return(
    <div id="modal">
      <div id="modal-overlay" onClick={() => props.show(false)}>
      </div>
      <div id="modal-container">
        <div id="modal-content">
          <h2 id="modal-title">instructions</h2>
          <p id="modal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet. In odio magna, aliquet vel efficitur iaculis, lobortis at nisi. Suspendisse fermentum libero elit, id facilisis felis convallis in. Donec augue justo, eleifend ut tempus non, volutpat ac neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vehicula ut sem eget posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet. In odio magna, aliquet vel efficitur iaculis, lobortis at nisi. Suspendisse fermentum libero elit, id facilisis felis convallis in. Donec augue justo, eleifend ut tempus non, volutpat ac neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vehicula ut sem eget posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet. In odio magna, aliquet vel efficitur iaculis, lobortis at nisi. Suspendisse fermentum libero elit, id facilisis felis convallis in. </p>
        </div>
      </div>

    </div>
  );
}

function Sidebar() {

  const location = useLocation();
  const current = location.pathname;
  const currPage = pages.indexOf(current);

  return(
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">{titles[currPage-1]}</div>
        <div className="level-select">
          {currPage !== 1 && <Link to={pages[currPage-1]} className="level-select-button">&#9664;</Link>}
        level {pages.indexOf(current)} of {pages.length-2}
          {currPage !== 10 && <Link to={pages[currPage+1]} className="level-select-button">&#9654;</Link>}
        </div>
      </div>
      <div className="level-content">
        {content[currPage-1]}
      </div>
      <Link to={pages[currPage+1]} className="next">next</Link>
    </div>
  );
}

function Swatch(props: { rgb: string, hex: string; }) {
  return(
    <div className="swatch">
      <div className="swatch-color" style={{ backgroundColor: props.rgb}}></div>
      <div className="swatch-labels">
        <div className="swatch-hex">{props.hex}</div>
        <div className="swatch-rgb">{props.rgb}</div>
      </div>
    </div>
  );
}

function One() {
  return(
    <div id="level-one" className="level">
      <div className="swatches">
        <Swatch rgb="rgb(0, 35, 80)" hex="#0085FF"></Swatch>
        <Swatch rgb="" hex=""></Swatch>
      </div>
    </div>
  );
}

function Two() {
  return(
    <div id="level-two" className="level">
      2
    </div>
  );
}

function Three() {
  return(
    <div id="level-three" className="level">
      3
    </div>
  );
}

function Four() {
  return(
    <div id="level-four" className="level">
      4
    </div>
  );
}

function Five() {
  return(
    <div id="level-five" className="level">
      5
    </div>
  );
}
function Six() {
  return(
    <div id="level-six" className="level">
      6
    </div>
  );
}
function Seven() {
  return(
    <div id="level-seven" className="level">
      7
    </div>
  );
}
function Eight() {
  return(
    <div id="level-eight" className="level">
      8
    </div>
  );
}
function Nine() {
  return(
    <div id="level-nine" className="level">
      9
    </div>
  );
}

function Ten() {
  return(
    <div id="level-nine" className="level">
      10
    </div>
  );
}

function Level() {
  return (
    <div className="frame">
      <Sidebar></Sidebar>
      <div className="image"></div>
    </div>
  );
}

function Landing(props: any) {
  return(
    <div id="landing">
      <div id="landing-container">
        <div id="landing-title">COLOR LAB</div>
        <div id="landing-button-container">
          <Link to="/level1" className="landing-button" id="landing-start">start</Link>
          <button className="landing-button" id="landing-instructions"
            onClick={() => props.show(true)}
          >instructions</button>
        </div>
      </div>
      <h3 id="footer">
      made with ❤️ by
        <a
          href="https://teachla.uclaacm.com"
          target="_blank"
          rel="noopener noreferrer"
          id="footer-link"
        >
          <img id="tla-logo" src={TeachLALogo} alt="teach la logo!" />
          acm.teachLA
        </a>
      </h3>
    </div>
  );
}

function Ending() {
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

export default App;
