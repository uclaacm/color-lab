import '../styles/sidebar.scss';
import { useLocation, Link }from 'react-router-dom';
import {Page1,Page2,Page3,Page4,Page5,Page6,Page7,Page8,Page9,Page10} from './SidebarContent/index.js';
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
  <Page1 key="1"></Page1>,
  <Page2 key="2"></Page2>,
  <Page3 key="3"></Page3>,
  <Page4 key="4"></Page4>,
  <Page5 key="5"></Page5>,
  <Page6 key="6"></Page6>,
  <Page7 key="7"></Page7>,
  <Page8 key="8"></Page8>,
  <Page9 key="9"></Page9>,
  <Page10 key="10"></Page10>,
];

export function Sidebar():JSX.Element {

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