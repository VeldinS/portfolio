// src/pages/projects/ProjectDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();

    // Fetch project details using projectId
    // For this example, we'll use a static array of projects
    const projects = [
        { id: '1', name: 'Project One', description: 'Description of Project One' },
        { id: '2', name: 'Project Two', description: 'Description of Project Two' },
        // Add more projects here
    ];

    const project = projects.find(proj => proj.id === projectId);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            {/* Add more project details here */}
        </div>
    );
};

export default ProjectDetails;
