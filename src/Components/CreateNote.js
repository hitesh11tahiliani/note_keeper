import React from 'react';
import './CreateNote.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function CreateNote(props) {

  const [expand, setExpand] = useState(false);


  const [note, setNote] = useState({
    title: '',
    sub_title: '' ,
    content: '' , 
  });

  const InputEvent = (event) => {

    const {name, value} = event.target;

    setNote((prevData)=>{
      return {
        ...prevData,
        [name]: value,
      };
    });
    // console.log(note);
  }

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: '',
      sub_title: '' ,
      content: '' , 
    });
  };

  const expandIt = () => {
    setExpand(true);
  }

  const backToNormal = () => {
    setExpand(false);
  }

  return (
    // <div className='background'>
      <div className='main_note'  onDoubleClick={backToNormal}>
        <form>

        
          <input 
            className="title" 
            name='title'
            value= {note.title} 
            onChange= {InputEvent} 
            type="text" 
            placeholder="Title" 
            autoComplete='off'
            onClick={expandIt}/> 

        {expand?
          <input 
            className="sub-title" 
            name='sub_title'
            value= {note.sub_title} 
            onChange={InputEvent} 
            type="text" 
            placeholder="Subtitle.."/>:null}

        {expand?
          <textarea 
            className="textArea" 
            value= {note.content} 
            onChange= {InputEvent} 
            name='content'
            rows="2" 
            column="" 
            placeholder="Write your text here...">
          </textarea>:null}

          <Button onClick={addEvent} className="button">
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    // </div>
      
     
  )
}

export default CreateNote
