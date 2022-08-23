import React, {useState} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Note from './Components/Note';
import { valueToPercent } from '@mui/base';
import './App.css';

function App() {

  const [addItem, setAddItem] = useState([]);

const addNote = (note) => {
  setAddItem((prevDate)=>{
    return[...prevDate, note];
  });
  
};

  return (
      <div  className='background'>
        <Header/>
        <CreateNote passNote={addNote} />
          {addItem.map((val, index) => {
            return (
            <Note
              key={index}
              if={index}
              title={val.title}
              sub_title={val.sub_title}
              content={val.content}
            />
            );
          })}
        <Footer/>
      </div>
  )
}

export default App;
