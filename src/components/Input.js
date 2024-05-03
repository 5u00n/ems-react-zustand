import React from 'react';
import { useRef } from 'react';
import {usePeopleStore} from '../store/store';



function Input() {
    const inputRef = useRef();
    const addPerson = usePeopleStore((state) => state.addPerson);
    const deletePerson = usePeopleStore((state) => state.deletePerson);
    const editPerson = usePeopleStore((state) => state.editPerson);
    const clearPeople = usePeopleStore((state) => state.clearPeople);
    const add = () => {
        const name = inputRef.current.value;
        if (!name) return alert('Please enter a name');
        addPerson(name);
        inputRef.current.value = '';
    }
    const remove = () => {
        const name = inputRef.current.value;
        if (!name) return alert('Please enter a name');
        deletePerson(name);
        inputRef.current.value = '';
    }
    const edit = () => {
        const name = inputRef.current.value;
        if (!name) return alert('Please enter a name');
        const newName = prompt('Enter new name');
        if (!newName) return alert('Please enter a new name');
        editPerson(name, newName);
        inputRef.current.value = '';
    }

    const clear = () => {
        clearPeople();
        inputRef.current.value = '';
    }
    return (
        <div className='flex justify-between space-x-1'>
            <input type="text" placeholder="Enter name" className="input input-bordered" ref={inputRef} required />
            <button className="btn btn-primary" onClick={add}  >Add</button>
            <button className="btn btn-primary" onClick={remove}  >Remove</button>
            <button className="btn btn-primary" onClick={edit}  >Edit</button>
            <button className="btn btn-primary" onClick={clear}  >Clear</button>
        </div>
    )
}

export default Input