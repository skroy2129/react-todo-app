import React from 'react';
import { useState } from 'react';

export default function Popup({actionType, selectedTodo, closePopup}) {

    const [title, setTitle] = useState(selectedTodo.title);
    const [description, setDescription] = useState(selectedTodo.description);
    const [status, setStatus] = useState(selectedTodo.status);

    const handleChange = (event) => {
        const elemName = event.target.elemName;
        const val = event.target.value;
        console.log(val);
        if(elemName === "title"){
            setTitle(val);
        }else if(elemName === "description"){
            setDescription(val);
        }else if(elemName === "status"){
            setStatus(val);
        }
    }

    return (
    <div className='popup-block'>
        <div className='popup-card'>
          <div className='delete-symbol--large' onClick={closePopup}>X</div>
          <form>
            <div className='popup-details'>
                <label>Title</label> <br/>
                <input type='text' name='title'value={title} onChange={handleChange}/> <br/>
                <label>Description</label> <br/>
                <textarea name="description" cols="30" rows="10" value={description} onChange={handleChange}></textarea> <br/>
                <label>Status</label> <br/>
                <select name="status" id="" value={status} onChange={handleChange}> <br/>
                <option value="ongoing">Ongoing</option> <br/>
                <option value="completed">Completed</option> <br/>
                </select><br/>
                {actionType === "create" ? (<button className='popup-button'>Create</button>)
                : (<button className='popup-button'>Save</button>)}
            </div>
          </form>
        </div>
      </div>
    )
}

