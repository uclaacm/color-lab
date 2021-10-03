import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route }from 'react-router-dom';
import Modal from '../components/Modal';
import Ending from './Ending';
import Landing from './Landing';
import Level from './level';
import '../styles/scrollbar.scss';

function App(): JSX.Element {
  const [modalShow, setModalShow] = useState(false);
  // const [myR, setR] = useState(0);
  // const [myG, setG] = useState(0);
  // const [myB, setB] = useState(0);

  return (
    <div>
      <Router>
        {modalShow && <Modal show={setModalShow}></Modal>}
        <div>
          <Switch>
            <Route exact path="/">
              <Landing show={setModalShow}></Landing>
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

export default App;
