import React from "react";
import { Menu } from "antd";
import './index.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoSchoolSharp } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import Profile from "../Profile/Profile";
import Education from "../Education/Education";
import Skill from "../Skill/Skill";
import JobTraining from "../Job Training/JobTraining";
import Projects from "../Projects/Projects";

// import { Content } from "antd/es/layout/layout";


const Body = () => {
    const navigate = useNavigate();
    const style = {
        backgroundColor: 'aqua',
        backgroundSize: 'auto'
    }
        return (
            <div className="body">
                <Menu style={style}
                    onClick={({key}) => {
                        if (key === "profile") {
                            
                        }else{
                            navigate(key);
                        };
                    }}
                    items={[
                    {label: "Profile", key:"/profile", icon: <CgProfile/>},
                    {label: "Education", key:"/education", icon: <IoSchoolSharp/>},
                    {label: "Skill", key:"/skill", icon: <GiSkills/>},
                    {label: "Job Training", key:"/jobTraining", icon: <MdModelTraining/>},
                    {label: "Projects", key:"/project", icon: <GrProjects/>}
                ]}></Menu>
                <Content/>
            </div>
        );
}
    
function Content() {
    return(
        <Routes>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/education" element={<Education/>}></Route>
        <Route path="/skill" element={<Skill/>}></Route>
        <Route path="/jobTraining" element={<JobTraining/>}></Route>
        <Route path="/project" element={<Projects/>}></Route>
        </Routes>
    );
};

export default Body;