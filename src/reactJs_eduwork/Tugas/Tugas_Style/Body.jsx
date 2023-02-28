import React from "react";
import './style.css';
import { Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoSchoolSharp } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import Profile from "./Profile";
import Education from "./Education";
import Skill from "./Skill"
import JobTraining from "./JobTraining";
import Projects from "./Projects";
import Header from "./Header";



const Body = () => {
    const navigate = useNavigate();
    const style = {
        marginTop: '80px',
        height: '100%',
        width: '160px',
        position: 'fixed',
        zIndex:'1',
        top:'0',
        left:'0',
        overflowX: 'hidden',
        backgroundColor: 'aqua'
    }
    return (
        <div>
            <Header />
            <div className="body">
                <Menu style={style}
                    onClick={({ key }) => {
                        if (key === "profile") {

                        } else {
                            navigate(key);
                        };
                    }}
                    items={[
                        { label: "Profile", key: "/profile", icon: <CgProfile /> },
                        { label: "Education", key: "/education", icon: <IoSchoolSharp /> },
                        { label: "Skill", key: "/skill", icon: <GiSkills /> },
                        { label: "Job Training", key: "/jobTraining", icon: <MdModelTraining /> },
                        { label: "Projects", key: "/project", icon: <GrProjects /> }
                    ]}></Menu>
                <Content />
            </div>
        </div>
    );
}

function Content() {
    return (
        <Routes>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/skill" element={<Skill />}></Route>
            <Route path="/jobTraining" element={<JobTraining />}></Route>
            <Route path="/project" element={<Projects />}></Route>
        </Routes>
    );
};

export default Body;