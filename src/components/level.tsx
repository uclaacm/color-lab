// import svg from './home.svg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ColoringPage from './artBlank';
import { Sidebar } from './Sidebar';

export default function Level():JSX.Element {
  const pages = ['/','/level1','/level2','/level3','/level4','/level5','/level6','/level7','/level8', '/level9', '/level10', '/ending'];
  const colors = ['#FFBBDC', '#F1A2C9', '#F25C84', '#5AE1D9', '#B0D4E3', '#8245BF', '#F2AA6B', '#FED584', '#6D3BD9', '#D2FFD7'];

  const location = useLocation();
  const current = location.pathname;
  const currPage = pages.indexOf(current);

  const [fillColors, setFillColors] = useState((colors.slice(0,currPage-1)).concat(Array(11).fill('white').slice(currPage-1)));

  function updatePage(back: boolean){
    let slicePage;
    back ? slicePage=currPage-2 : slicePage=currPage;
    const arr = (colors.slice(0,slicePage)).concat(Array(11).fill('white').slice(slicePage));
    setFillColors(arr);
  }

  return (
    <div className="frame">
      <Sidebar setFills={setFillColors} updatePage={updatePage} pages={pages}></Sidebar>
      <div className="image">
        <ColoringPage fillColors={fillColors} ></ColoringPage>
      </div>
    </div>
  );
}
