// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css'; // Optional, if you want to separate styles

function ProjectCard({ title, views, tag, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-thumbnail" />
      <div className="card-content">
        <div className="dot" />
        <h3>{title}</h3>
        <p className="views">{views}</p>
        <span className="tag">{tag}</span>
      </div>
    </div>
  );
}

export default ProjectCard;
