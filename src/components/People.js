import React from 'react'
import {usePeopleStore} from '../store/store';

function People() {
    const people = usePeopleStore((state) => state.people);
  return (
    <div>
        <p> We have {people.length} people in our DB</p>
        <ul className='list-decimal'>
            {people.map((person) => (
                <li className="list-item" key={person}>{person}</li>
            ))}
        </ul>
    </div>
  )
}

export default People