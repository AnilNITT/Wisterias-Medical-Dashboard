import "./App.css";
import Preloader from './components/preloader';
import HomeStatus from './components/HomeStatus';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import TodoList from './components/AddToDo/TodoList';
import LogList from "./components/Logs/LogList"
import AddServiceUser from './components/ServiceUsers/AddServiceUser';
import UserList from './components/ServiceUsers/UserList';
import AddDocument from './components/ServiceUsers/AddDocument';
import DocumentList from './components/ServiceUsers/DocumentList';
import Login from './components/Login';
import UserChart from './components/Services/UserChart';
import UserDetails from './components/ServiceUsers/UserDetails';
import Billings from './components/Billings/Billings';
import Support from './components/Support/Support';
import KeyContacts from './components/KeyContacts/KeyContacts';
import Messages from './components/Messages/Messages';
import Reception from './components/ReceptionManagement/Reception';
import MonthReview from './components/MonthlyReview/MonthReview';
import Calendar from './components/Calendar/Calendar';
import DailyLog from './components/Services/DailyLog';
import { Medical } from './components/Services/Medical';
import Transfer from './components/Services/Transfer';
import Diary from './components/Services/Diary';
import Assessments from './components/Services/Assessments';
import BodyMap from './components/Services/BodyMap/BodyMap';
import Infection from './components/Services/Infection';
import Careplan from './components/Services/Careplan';
import CreateCarePlan from './components/Services/CreateCarePlan';
import CreateRisk from './components/Services/CreateRisk';
import Risk from './components/Services/Risk';
import AccidentIncident from './components/Services/AccidentIncident';
import Vital from './components/Services/Vital';
import Contacts from './components/Services/Contacts';
import Summary from './components/Services/Summary';
import RequestNewPassword from './components/RequestNewPassword';
import Addtodo from './components/AddToDo/Addtodo';
import AddLogs from './components/Logs/AddLogs';
import AddReceptionist from './components/ReceptionManagement/AddReceptionist';
import Zones from "./components/Setting/Zones";
import Employee from "./components/HR/Employee";
import AddStaff from "./components/HR/AddStaff";
import MessageOutbox from "./components/Messages/MessageOutbox";
import VehicleList from "./components/VehicleManagement/Vehicle-List";
import AddVehicle from "./components/VehicleManagement/Add-Vehicle";
import Grouping from "./components/ServiceUsers/Grouping";
import ServiceUserEnquiry from "./components/ServiceUsers/Service-User-Enquiry";
import ServiceUserStatus from "./components/ServiceUsers/Service-User-Status";
import CreateInfection from "./components/Services/Create-Infection";
import CreateBodymap from "./components/Services/BodyMap/Create-Bodymap";
import BodymapHistorical from "./components/Services/BodyMap/Bodymap-Historical";
import SkinInfection from "./components/Services/BodyMap/Skin-Infection";
import SelectOption from "./components/Select-Option";
import AddServiceUserEnquiry from "./components/ServiceUsers/AddServiceUserEnquiry";
import Addtodo1 from "./components/AddToDo/Addtodo1";
import Addtodo2 from "./components/AddToDo/Addtodo2";
import Addtodo3 from "./components/AddToDo/Addtodo3";
import Addtodo4 from "./components/AddToDo/Addtodo4";
import Addtodo5 from "./components/AddToDo/Addtodo5";
import AddLogs1 from "./components/Logs/AddLogs1";
import AddLogs2 from "./components/Logs/AddLogs2";
import AddLogs3 from "./components/Logs/AddLogs3";
import AddLogs4 from "./components/Logs/AddLogs4";
import Empcompliance from "./components/HR/Empcompliance";
import Workcerificate from "./components/HR/Workcerificate";
import Qualification from "./components/HR/Qualification";
import Workingavil from "./components/HR/Workingavil";
import EmpAccidentincident from "./components/HR/EmpAccidentincident";
import EmpMedicalvaccination from "./components/HR/EmpMedicalvaccination";
import EmpReview from "./components/HR/EmpReview";
import EmpTraining from "./components/HR/EmpTraining";
import Skills from "./components/HR/Skills";
import EmpDocument from "./components/HR/EmpDocument";
import Cpd from "./components/HR/Cpd";
import Employment from "./components/HR/Employment";


function App() {
  return (
    <>
    <Router>

        {/* <Preloader /> */}

        
        <Routes>
          
            {/* <Route exact path={process.env.PUBLIC_URL + '/'} element={<HomeStatus/>}/> */}
            <Route exact path='/select-option' element={<SelectOption/>}/>
            <Route exact path='/' element={<HomeStatus/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/requestnewpassword" element={<RequestNewPassword/>}/>
            <Route exact path="/todolist" element={<TodoList/>}/>

            <Route exact path="/addtodo" element={<Addtodo1/>}/>
            <Route exact path="/addtodostep1" element={<Addtodo2/>}/>
            <Route exact path="/addtodostep2" element={<Addtodo3/>}/>
            <Route exact path="/addtodostep3" element={<Addtodo4/>}/>
            <Route exact path="/addtodostep4" element={<Addtodo5/>}/>

            <Route exact path="/logs" element={<LogList/>}/>

            <Route exact path="/addlogs" element={<AddLogs1/>}/>
            <Route exact path="/addlogsstep1" element={<AddLogs2/>}/>
            <Route exact path="/addlogsstep2" element={<AddLogs3/>}/>
            <Route exact path="/addlogsstep3" element={<AddLogs4/>}/>

            <Route exact path="/dailylog" element={<DailyLog/>}/>
            
            <Route exact path="/add-service-user" element={<AddServiceUser/>}/>
            <Route exact path="/serviceuser-list" element={<UserList/>}/>
            <Route exact path="/service-user-chart" element={<UserChart/>}/>
            <Route exact path="/service-user-detail" element={<UserDetails/>}/>
            <Route exact path="/adddocument" element={<AddDocument/>}/>
            <Route exact path="/service-user-document" element={<DocumentList/>}/>
            <Route exact path="/grouping" element={<Grouping/>}/>
            <Route exact path="/service-user-enquiry" element={<ServiceUserEnquiry/>}/>
            <Route exact path="/add-service-user-enquiry" element={<AddServiceUserEnquiry/>}/>
            <Route exact path="/service-user-status" element={<ServiceUserStatus/>}/>

            <Route exact path="/billings" element={<Billings/>}/>
            <Route exact path="/support" element={<Support/>}/>
            <Route exact path="/keycontacts" element={<KeyContacts/>}/>

            <Route exact path="/messages" element={<Messages/>}/>
            <Route exact path="/message-outbox" element={<MessageOutbox/>}/>
            
            <Route exact path="/vehicle-list" element={<VehicleList/>}/>
            <Route exact path="/add-vehicle" element={<AddVehicle/>}/>

            <Route exact path="/reception" element={<Reception/>}/>
            <Route exact path="/addreception" element={<AddReceptionist/>}/>
            <Route exact path="/monthlyreview" element={<MonthReview/>}/>
            <Route exact path="/calendar" element={<Calendar/>}/>
            <Route exact path="/medical" element={<Medical/>}/>
            <Route exact path="/transfer" element={<Transfer/>}/>
            <Route exact path="/diary" element={<Diary />}/>
            <Route exact path="/assessment" element={<Assessments />}/>

            <Route exact path="/bodymap" element={<BodyMap/>}/>
            <Route exact path="/create_bodymap" element={<CreateBodymap />}/>
            <Route exact path="/bodymap-historical" element={<BodymapHistorical/>}/>
            <Route exact path="/skin-infection" element={<SkinInfection/>}/>


            <Route exact path="/infection" element={<Infection />}/>
            <Route exact path="/create_infection" element={<CreateInfection />}/>

            <Route exact path="/careplan" element={<Careplan />}/>
            <Route exact path="/createcareplan" element={<CreateCarePlan />}/>
            <Route exact path="/risk" element={<Risk />}/>
            <Route exact path="/createrisk" element={<CreateRisk />}/>
            <Route exact path="/accident-incident" element={<AccidentIncident />}/>
            <Route exact path="/vital" element={<Vital />}/>
            <Route exact path="/contacts" element={<Contacts />}/>
            <Route exact path="/summary" element={<Summary />}/>
            <Route exact path="/zones" element={<Zones />}/>
            
            <Route exact path="/employee" element={<Employee/>}/>
            <Route exact path="/add-staff" element={<AddStaff/>}/>
            <Route exact path="/empcompliance" element={<Empcompliance/>}/>
            <Route exact path="/workcerificate" element={<Workcerificate/>}/>
            <Route exact path="/qualification" element={<Qualification/>}/>
            <Route exact path="/workingavil" element={<Workingavil/>}/>
            <Route exact path="/emp_accidentincident" element={<EmpAccidentincident/>}/>
            <Route exact path="/emp_medicalvaccination" element={<EmpMedicalvaccination/>}/>
            <Route exact path="/emp_review" element={<EmpReview/>}/>
            <Route exact path="/emp_training" element={<EmpTraining/>}/>
            <Route exact path="/skills" element={<Skills/>}/>
            <Route exact path="/emp_document" element={<EmpDocument/>}/>
            <Route exact path="/cpd" element={<Cpd/>}/>
            <Route exact path="/employment" element={<Employment/>}/>

        </Routes>
    </Router>
    </>
  );
}
export default App;