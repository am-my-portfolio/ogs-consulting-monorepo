import { GroupLayoutProps } from '../layout/GroupLayout.tsx';

const ProjectCard = ({ project }: { project: GroupLayoutProps }) => {
  return (
    <div className="relative">
      <img
        src={project?.image}
        alt="project-img"
        className="object-cover rounded-md"
      />

      <div className="absolute p-2 top-0 left-0 text-white text-xl font-bold">
        {project?.title}
      </div>
    </div>
  );
};

export default ProjectCard;
