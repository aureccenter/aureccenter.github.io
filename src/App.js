import { useState } from 'react';
import './App.css';
import Agenda from './components/Agenda';
import Buttons from './components/Buttons';
import Form from './components/ReservationForm';
import Monthly from './components/Monthly';
import NavBar from './components/NavigationBar';
import Weekly from './components/Weekly';

function App() {
  const [calendarView, setCalendarView] = useState('Month');

  const changeView = (viewName) => {
    setCalendarView(viewName);
  };

  return (
    <>
      <NavBar />
      <h1 style={{ textAlign: 'center' }} id='Calendar'>
        {' '}
        Calendar{' '}
      </h1>
      <Buttons changeView={changeView} currentView={calendarView} />
      {calendarView == 'Month' && <Monthly />}
      {calendarView == 'Week' && <Weekly />}
      {calendarView == 'Agenda' && <Agenda />}
      <h1 style={{ textAlign: 'center' }} id='Reservation'>
        {' '}
        Reservation{' '}
      </h1>
      <Form />
    </>
  );
}

export default App;
