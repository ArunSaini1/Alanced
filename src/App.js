import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import SignUp from './SignUp'
import JoinAsAFreelancer from "./Components/JoinAsAFreelancer";
import Profile from './Components/Profile'
import Singlepopup from './Components/Singlepopup'
import ProfileOpenjobinanewwindow from './Components/ProfileOpenjobinanewwindow'
import FullProfile from './Components/FullProfile'
import EditProfile from './Components/EditProfile'
import Message from './Message'
import SavedJobs from './SavedJobs'
import MyReports from './MyReports'
import Search2 from "./Search2";
import MyProposals from './Components/MyProposals'
import MyProposalsReferrals from './Components/MyProposalsReferrals'
import MyProposalsArchived from './MyProposalsArchived'
import ProjectList from './ProjectList'
import MyJobs from './MyJobs'
import AllContracts from './AllContracts'
import ConnectsHistory from './ConnectsHistory'

export default function App() {
  return (
    <>
    <div className="App">
        
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/findtalent" element={<JoinAsAFreelancer/>}/>
      <Route path="/arun" element={<Profile/>}/>
      <Route path="/more" element={<Singlepopup/>}/>
      <Route path="mores" element={<ProfileOpenjobinanewwindow/>} />
      <Route path="/fullprofile" element={<FullProfile/>} />
      <Route path='/edit' element={<EditProfile/>} />
      <Route path="/messages" element={<Message/>} />
      <Route path="/savejobs" element={<SavedJobs/>}/>
      <Route path="/search" element={<Search2/>}/>
      <Route path="/proposals" element={<MyProposals/>}/>
      <Route path="/MyProposalsReferrals" element={<MyProposalsReferrals/>} />
      <Route path="/MyProposalsArchived" element={<MyProposalsArchived/>}/>
      <Route path="/projectlist" element={<ProjectList/>}/>
      <Route path="/myjobs" element={<MyJobs/>} />
      <Route path="/allcontracts" element={<AllContracts/>} />
      <Route path="/connecthistory" element={<ConnectsHistory/>} />
      <Route path="/report" element={<MyReports/>}/>

    </Routes>
    </div>
    </>
  );
}
