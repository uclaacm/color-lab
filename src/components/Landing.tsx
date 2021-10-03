import { Link }from 'react-router-dom';
import TeachLALogo from '../assets/teach-la-logo.svg';
import '../styles/landing.scss';
interface LandingProps{
  show: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Landing(props: LandingProps):JSX.Element {
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
