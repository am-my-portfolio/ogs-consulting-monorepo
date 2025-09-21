import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GroupLayoutProps } from '@/components/layout/GroupLayout';

const ProjectDetails = ({ project }: { project: GroupLayoutProps }) => {
  const [projectDetails, setProjectDetails] = useState(null);
  const params = useParams();

  console.log(project);
  useEffect(() => {
    // TODO: get projects data from database
    console.log('Getting details for project id ', params.id);

    setProjectDetails({});
  }, []);

  return (
    <div className="relative">
      <img
        src={project?.image}
        alt="project-img"
        className="w-full object-cover rounded-md"
      />

      <div className="absolute p-2 top-0 left-0 text-white text-xl font-bold">
        {project?.title}
      </div>
    </div>
  );
};

export default ProjectDetails;
