
import './Footer.css';

function Footer({ reset, setReset }) {
  
  return (
    <div>
      <button onClick={() => {
        setReset(!reset)
      }} className='button-reset'>Reset</button>
    </div>
  );
}

export default Footer;
