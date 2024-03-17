import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3"> 
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-outline btn-primary w-full">
      <FaGoogle></FaGoogle>
  Button
      </button>
                <button className="btn btn-outline btn-primary w-full">
      <FaGithub></FaGithub>
      Button
      </button>
            </div>    
            <div>
                <h2 className="text-3xl">Find us on</h2>
                <a className="p-4 flex text-lg items-center rounded-t-lg" href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    Facebook
                </a>
                <a className="p-4 flex text-lg items-center rounded-t-lg" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    Twitter
                </a>
                <a className="p-4 flex text-lg items-center rounded-t-lg" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                   Instagram
                </a>
                </div> 
                <div className="p-4 space-y-3"> 
                <h2 className="text-3xl">Q-zone</h2>
           <img src={qzone1} alt="" />  
           <img src={qzone2} alt="" />  
           <img src={qzone3} alt="" />  
        </div>
        </div>
    );
};

export default RightSideNav;