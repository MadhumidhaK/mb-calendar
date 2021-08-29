import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar';
import { useEffect, useState } from 'react';
import CalendarEventForm from './components/CalendarEventForm';
import fetchData from './utils/fetchData';

function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isAllPlan, setIsAllPlan] = useState(false);
  const [data, setData] = useState([])
  const [allData, setAllData] = useState([])
  const [todaysData, setTodaysData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const fetchAndSetData = async () => {
    console.log("-----")
      const allData = await fetchData("http://mbcalender-env.eba-m6mm5ms7.ap-south-1.elasticbeanstalk.com:8080/api/calender/list/all");
      setAllData(allData);
      const todaysData = await fetchData("http://mbcalender-env.eba-m6mm5ms7.ap-south-1.elasticbeanstalk.com:8080/api/calender/list/today");
      setTodaysData(todaysData);
      console.log(allData)
      console.log(todaysData)
  }
  useEffect(() => {
      fetchAndSetData()
      console.log(isAllPlan)
  },[])
  useEffect(() => {
    if(refresh){
      fetchAndSetData();
      setIsCreateModalOpen(false)
setRefresh(false)
    }
},[refresh])
  return (
    <div className="App">
      <div className="header">
        {!isAllPlan ? <div className="selected-button">Today's Plan</div> : 
        <div className="button" onClick={() => {setIsAllPlan(false)}}>Today's Plan</div>}


        {isAllPlan ?
        <div className="selected-button">All Plan</div> :  <div className="button"  onClick={() => {setIsAllPlan(true)}}>All Plan</div>}
      </div>
      {isAllPlan ? <Calendar setRefresh={setRefresh} data={allData} isAllPlan={isAllPlan} />: <Calendar  setRefresh={setRefresh} data={todaysData} isAllPlan={isAllPlan} />}
      <div className="button add" onClick={() => setIsCreateModalOpen(true)}>Add</div>
      {isCreateModalOpen ? <CalendarEventForm setIsModalOpen={setIsCreateModalOpen} setRefresh={setRefresh}/> : <></>}
    </div>
  );
}

export default App;
