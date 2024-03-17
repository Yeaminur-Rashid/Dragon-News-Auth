import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav"
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import BreakingNew from "./BreakingNew";


const Home = () => {
    return (
        <div >
           <Header></Header>
           <BreakingNew></BreakingNew>
           <Navbar></Navbar>
            
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border">
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="md:cols-span-2 border "> 
                <h2 className="text-4xl ">News Coming Soon...</h2>
            </div>
            <div className="border"><RightSideNav></RightSideNav></div>
         </div>
        </div>
    );
};

export default Home;