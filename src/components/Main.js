import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';

const MainPage = () => {
  const mainFrame = useRef(null);
  const navigate = useNavigate();
  const onDiscoverClick = () => {
    setTimeout(() => {
      navigate('/shop');
    }, 300);
  };

  useEffect(() => {
    mainFrame.current.setAttribute('class', 'main-frame drop-in-anim');
    setTimeout(() => {
      mainFrame.current.setAttribute('class', 'main-frame spread-anim');
    }, 1500);
  }, []);

  return (
    <div id="Main">
      <div ref={mainFrame} className="main-frame">
        <div className="title">
          <p className="side-text side-left-insert-anim">Embark on a</p>
          <div className="special-text special-insert-anim">journey</div>
          <p className="side-text side-right-insert-anim">of discovery_</p>
        </div>
        <button
          onClick={onDiscoverClick}
          className="discover-btn animate__animated animate__fadeIn animate__delay-5s"
        >
          Discover
        </button>
      </div>
    </div>
  );
};

export default MainPage;
