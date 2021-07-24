import '../assets/WestwoodSans-Regular.ttf';
import '../styles/landing.scss';

import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  Link,
  useLocation }from 'react-router-dom';


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
  return (
    <div>
      {/* <Landing></Landing> */}
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Landing></Landing>
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

// function swatch() {
//   return(
//     <div className="swatch">
//       <div className="swatch-color"></div>
//       <div className="swatch-hex"></div>
//       <div className="swatch-rgb"></div>
//     </div>
//   );
// }

function One() {
  return(
    <div id="level-one" className="level">
      1
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

function Landing() {
  return(
    <div id="landing">
      <div id="landing-container">
        <div id="landing-title">COLOR LAB</div>
        <div id="landing-button-container">
          <Link to="/level1" className="landing-button" id="landing-start">start</Link>
          <button className="landing-button" id="landing-instructions">instructions</button>
        </div>
      </div>
    </div>
  );
}

function Ending() {
  return(
    <div id="landing">
      <div id="landing-container">
        <div id="landing-title">END</div>
        <div id="landing-button-container">
          <Link to="/level1" className="landing-button" id="landing-start">start</Link>
          <button className="landing-button" id="landing-instructions">instructions</button>
        </div>
      </div>
    </div>
  );
}

export default App;
