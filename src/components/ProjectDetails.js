import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import Project2 from '../assets/img/Project2.jpg'; // Import image

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate(); // Hook for navigation

  const projectData = {
    1: { title: "Cyber Security Project", description: "Detailed description about project 1" },
    2: { title: "F1 Front End Project", description: "Detailed description about project 2" },
    3: { title: "Cyber Security Project 2", description: "Detailed description about project 3" },
  };

  const project = projectData[projectId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <section className="project-details-container" id="projectDescription">
      <div className="project-title-description">
        <h1>{project?.title}</h1>
        <p>{project?.description}</p>
      </div>
      <div className="project-media">
        {projectId === '1' && (
          <iframe
            src="https://www.youtube.com/embed/bhWVaX1MF2U?rel=0"
            title="Cyber Security Project Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '1000px', height: '500px' }}
          ></iframe>
        )}
        {projectId === '2' && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <a href="https://master.db73dyf192xrf.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={Project2}
                alt="Softeng Project Image"
                style={{ width: "100%", maxWidth: "1000px", height: "auto", borderRadius: '8px' }}
              />
            </a>
          </div>
        )}
      </div>

      <div style={{ marginTop: '700px', textAlign: 'center' }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: '10px 20px',
            border: 'none',
            backgroundColor: '#007bff', // Blue background
            color: 'white', // Text color
            cursor: 'pointer',
            fontSize: '24px',
            borderRadius: '5px', // Rounded corners
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'center',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
            transition: 'background-color 0.3s ease', // Smooth transition for background color change
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')} // Darker blue on hover
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')} // Return to original blue
        >
          <span style={{ transform: 'rotate(180deg)' }}>➜</span> {/* Back Arrow */}
          <span style={{ fontSize: '16px' }}>Go Back</span>
        </button>
      </div>
    </section>
  );
};

export default ProjectDetails;
