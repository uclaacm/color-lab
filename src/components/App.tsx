import '../assets/WestwoodSans-Regular.ttf';
import '../styles/landing.scss';

import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  Link,
  useLocation }from 'react-router-dom';


const pages = ['/','/level1','/level2','/level3','/level4','/level5','/level6','/level7','/level8', '/ending'];
const titles = [
  'match the color',
  'match another one',
  'try it blind?',
  'one more time',
  'let\'s switch it up',
  'a little different...',
  'a real challenge',
  'another round',
  'home stretch!',
];

function App(): JSX.Element {
  return (
    <div>
      {/* <Landing></Landing> */}
      <Router>
        <div>
          <Switch>
            <Route path="/level1">
              <Level1 />
            </Route>
            <Route path="/">
              {/* <Home /> */}
              <Landing></Landing>
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
        level {pages.indexOf(current)} of 8
          {currPage !== 7 && <Link to={pages[currPage+1]} className="level-select-button">&#9654;</Link>}
        </div>
      </div>

      <div className="level-content">stuff here</div>
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
// function one() {
//   return(
//     <div id="level-one" className="level">

//     </div>
//   );
// }

function Level1() {
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

export default App;
