import React from 'react';
import Card from './Card.jsx';

const Projects = () => {
  const projects = [
    {
      title: 'Astelle',
      description: 'E-Commerce Application with product information and image gallery',
      img:'./image/astelle.gif',
      gitURL: 'https://github.com/RFE2207-FEC5-QQ/front-end-capstone',
      technologies: 'React, Material UI, Jest, React Testing Library, Axios, Express'
    },
    {
      title: 'Tripify',
      description: 'Trip Planner Application with Itinerary and Google Maps',
      img: './image/Tripify.png',
      gitURL: 'https://github.com/dshinny/Tripify',
      technologies: 'React, Google Maps API, Material UI, Styled-Components, Bcrypt'
    },
    {
      title: 'CloudCraft',
      description: 'Real-time chat and task managing application for team organizations',
      img:'./image/cloud.png',
      gitURL: 'https://github.com/hobbiton-hobbits/cloudcraft',
      technologies: 'React, Recoil, Socket.io, Node.js, PostgreSQL, Bcrypt, JWT'
    },
    {
      title: 'Astelle API',
      description: 'Back-End System for an E-Commerce Application',
      img:'./image/ratings.png',
      gitURL: 'https://github.com/SDC4-Shaak-Ti/ReviewsAPI',
      technologies: 'Node.js, PostgreSQL, Docker, Nginx, K6, Loader.io'
    },
  ]
  return (
    <div className="projects" id="projects">
      <div className="container">

        <div className="common">
          <h1 className="about-title">Projects</h1>
          <div className="underline-border"></div>
        </div>

        <div className="card-container">
          {projects.map((project) => (
            <Card project={project}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;