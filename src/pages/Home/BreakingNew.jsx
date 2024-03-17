import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const BreakingNew = () => {
    return (
        <div className='flex'>
           <button className="btn btn-secondary">Breaking News</button>
           <Marquee pauseOnHover = { true}>
           <Link className = 'mr-12'  to = '/'>React hub it can be Anything you learn</Link>
           <Link className = 'mr-12'  to = '/'>React hub it can be Anything you learn</Link>
           <Link className = 'mr-12'  to = '/'>React hub it can be Anything you learn</Link>
           <Link className = 'mr-12'  to = '/'>React hub it can be Anything you learn</Link>
           </Marquee>
        
        </div>
    );
};

export default BreakingNew;