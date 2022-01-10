import '../styles/sidebar.scss';
import { useState } from 'react';
import { useLocation, Link }from 'react-router-dom';
import {Page1,Page2,Page3,Page4,Page5,Page6,Page7,Page8,Page9,Page10} from './SidebarContent/index.js';

export function Sidebar(props: {
  setFills: React.Dispatch<React.SetStateAction<string[]>>,
  updatePage: (back: boolean)=>void,
  pages: string[]
}):JSX.Element {
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

  function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : {
      r: 0, g: 0, b: 0,
    };
  }

  const [enabled, setEnabled] = useState(false);

  const content = [
    <Page1 setEnabled={setEnabled} key="1"></Page1>,
    <Page2 setEnabled={setEnabled} key="2"></Page2>,
    <Page3 setEnabled={setEnabled} key="3"></Page3>,
    <Page4 setEnabled={setEnabled} key="4"></Page4>,
    <Page5 setEnabled={setEnabled} hexToRGB={hexToRgb} key="5"></Page5>,
    <Page6 setEnabled={setEnabled} hexToRGB={hexToRgb} key="6"></Page6>,
    <Page7 setEnabled={setEnabled} hexToRGB={hexToRgb} key="7"></Page7>,
    <Page8 setEnabled={setEnabled}  hexToRGB={hexToRgb} key="8"></Page8>,
    <Page9 setEnabled={setEnabled} key="9"></Page9>,
    <Page10 setEnabled={setEnabled} key="10"></Page10>,
  ];

  const location = useLocation();
  const current = location.pathname;
  const currPage = props.pages.indexOf(current);

  return(
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">{titles[currPage-1]}</div>
        <div className="level-select">
          {currPage !== 1 && <Link to={props.pages[currPage-1]} className="level-select-button" onClick={() => {props.updatePage(true);}}>&#9664;</Link>}
          level {props.pages.indexOf(current)} of {props.pages.length-2}
          {currPage !== 10 && <Link to={props.pages[currPage+1]} className="level-select-button" onClick={() => {props.updatePage(false);}}>&#9654;</Link>}
        </div>
      </div>
      <div className="level-content">
        {content[currPage-1]}
      </div>
      <Link
        className={enabled ? 'enabled' : 'disabled'}
        to={props.pages[currPage+1]} id="next" onClick={() => {
          setEnabled(false);
          // let fillCopy = [...props.fills]
          // fillCopy[currPage-1] = colors[currPage-1]
          // console.log(currPage, fillCopy)
          // props.setFills(fillCopy)
          props.updatePage(false);
        }}>next</Link>
    </div>
  );
}