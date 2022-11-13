import React from 'react';
import data from '../../assets/data/projects'
import Project from './Project'

const list = data.map(element => {
  return(
    <li>
      <Project data={element}/>
    </li>

  )
})

export default function Portfolio() {
  return (
    <ul>
      {list}
    </ul>
  );
}