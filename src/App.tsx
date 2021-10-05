import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Events from "./components/Events";
import AllEvent from "./components/AllEvent";
import 'react-calendar/dist/Calendar.css';
import './App.css';

const App = () => {
  const [value, setValue] = useState(new Date());
  const [eventProp, setEventProp] = useState({value});

  const onChange = (nextValue: Date) => {
    console.log(nextValue)
    setValue(nextValue);
    setEventProp({value})
  }

  

  return (
    <div className="App">
      <div className="calendar">
      <Calendar
        onChange={onChange}
        value={value}
      />
      </div>
      <Events {...eventProp} />
      <AllEvent />
    </div>
  );
}

export default App;
