import React from 'react';
import { useParams } from 'react-router-dom';

import {projectsList} from "../../../data/projects.ts";

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const project = projectsList.find(proj => proj.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <img src={project.image1} />
        </div>
    );
};

export default ProjectDetails;
