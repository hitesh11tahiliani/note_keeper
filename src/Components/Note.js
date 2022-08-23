import React from 'react';
import './Note.css';

function Note(props) {
  return (
    <div className="note" >
      <h2>{props.title}</h2>
      <h3>{props.sub_title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

export default Note;