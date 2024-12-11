import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { projectId } = useParams(); // Get the project ID from the URL

  // Example: Mock Data or Fetch project details by ID
  const projectData = {
    1: { title: "Cyber Security Project", description: "Detailed description about project 1" },
    2: { title: "Softeng Project", description: "Detailed description about project 2" },
    3: { title: "Cyber Security Project 2", description: "Detailed description about project 3" },
  };

  const project = projectData[projectId];

  return (
    <section className= "project-details-container" id = "projectDescription">
      <div className = "project-title-description">
        <h1>{project?.title}</h1>
        <p>{project?.description}</p>
      </div>
    </section>
  );
};

export default ProjectDetails;
