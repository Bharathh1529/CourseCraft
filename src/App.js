// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import CourseCardList from './CourseCardList';
import CourseDetail from './CourseDetail';
import About from './About';
import Profession from './Profession';
import { UserProvider } from './UserContext';
import AdminPannel from './Admin/AdminPannel';
import AddCourse from './Admin/AddCourse';
import ArtsVideoPage from './VideoPages/ArtsVideoPage';
import PaymentPage from './Payment/PaymentPage';
import ModernPhysics from './ArtsCourses/ModernPhysics';
import IntroductionToLiterature from './ArtsCourses/IntroductionToLiterature';
import BiologyForBeginners from './ArtsCourses/BiologyForBeginners';
import ChemistryEssentials from './ArtsCourses/ChemistryEssentials';
import PhilosophyOverview from './ArtsCourses/PhilosophyOverview';
import EnvironmentalScience from './ArtsCourses/EnvironmentalScience';
import PsychologyFundamentals from './ArtsCourses/PsychologyFundamentals';
import ModernPhysicsVideoPage from './VideoPages/ModernPhysicsVideoPageModernPhysicsVideoPage';
import IntroductionToLiteratureLectures from './VideoPages/IntroductionToLiteratureLectures';
import PhilosophyOverviewLectures from './VideoPages/PhilosophyOverviewLectures';
import ChemistryVideoPage from './VideoPages/ChemistryVideoPage';
import BiologyVideoPage from './VideoPages/BiologyVideoPage';
import EnvironmentalScienceLectures from './VideoPages/EnvironmentalScienceLectures';
import PsychologyFundamentalsLectures from './VideoPages/PsychologyFundamentalsLectures';
import QuizPage from './Quiz/QuizPage';
import AddQuiz from './Admin/AddQuiz';
import UserProfile from './User/UserProfile';

function App() {
    return (
        <UserProvider>
            <div className="App">
                <Routes>
                    <Route path="/Home" element={<Landing />} />
                    <Route path='/' element={<Login />} />
                    <Route path='/Signup' element={<Signup />} />
                    <Route path='/Arts&ScienceCourses' element={<CourseCardList/>}/>
                    <Route path='/HistoryOfArts' element={<CourseDetail/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/Profession' element={<Profession/>}/>
                    <Route path='/AdminDashboard' element={<AdminPannel/>}/>
                    <Route path='/AddCourse' element={<AddCourse/>}/>
                    <Route path='/HistroyOfArtsLectures' element={<ArtsVideoPage/>}/>
                    <Route path='/ModernPhysicsLectures' element={<ModernPhysicsVideoPage/>}/>
                    <Route path='/IntroductionToLiteratureLectures' element={<IntroductionToLiteratureLectures/>}/>
                    <Route path='/PhilosophyOverviewLectures' element={<PhilosophyOverviewLectures/>}/>
                    <Route path='/EnvironmentalScienceLectures' element={<EnvironmentalScienceLectures/>}/>
                    <Route path='/PsychologyFundamentalsLectures' element={<PsychologyFundamentalsLectures/>}/>
                    <Route path='/ChemistryVideoPage' element={<ChemistryVideoPage/>}/> 
                    <Route path='/BiologyVideoPage' element={<BiologyVideoPage/>}/>
                    <Route path='/Payment' element={<PaymentPage/>}/>
                    <Route path='/ModernPhysics' element={<ModernPhysics/>}/>
                    <Route path='/IntroductionToLiterature' element={<IntroductionToLiterature/>}/>
                    <Route path='/BiologyForBeginners' element={<BiologyForBeginners/>}/>
                    <Route path='/ChemistryEssentials' element={<ChemistryEssentials/>}/>
                    <Route path='/PhilosophyOverview' element={<PhilosophyOverview/>}/>
                    <Route path='/EnvironmentalScience' element={<EnvironmentalScience/>}/>
                    <Route path='/PsychologyFundamentals' element={<PsychologyFundamentals/>}/>
                    <Route path='/quiz/:courseTitle' element={<QuizPage/>}/>
                    <Route path='/AddQuiz' element={<AddQuiz/>}/>
                    <Route path='/UserProfile' element={<UserProfile/>}/>
                </Routes>
            </div>
        </UserProvider>
    );
}

export default App;
