import React from 'react';
import { FaWrench } from 'react-icons/fa';

const Card = ({project}) => {
  return (
    <div className="card">
      <img src={project.img} alt={project.title}/>
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-text">{project.description}</p>
        <p className="card-tech"><FaWrench />{project.technologies}</p>
        <a href={project.gitURL} className="btn btn-dark" target="_blank" rel="noreferrer">Github Repo</a>
      </div>
    </div>
  )
}

export default Card;