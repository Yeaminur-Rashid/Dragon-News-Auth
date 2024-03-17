import logo from '../../assets/logo.png';
import moment from 'moment/moment';
const Header = () => {
    return (
        <div className='text-center'>
        <img className='mx-auto' src={logo} alt="" />
        <p>Journalism without fear or in favour</p> 
         <p className='text-2xl'>{moment().format("dddd, MMMM D YYYY")}</p>
        </div>
    );
};

export default Header;