import { Link } from 'react-router-dom';
import { Carousel } from '@mantine/carousel';
import { GroupLayoutProps } from '@/components/layout/GroupLayout';
import ProjectCard from './ProjectCard.tsx';

export interface CarouselLayoutProps {
  projects: GroupLayoutProps[];
}

const FeaturedProjects = ({ projects }: CarouselLayoutProps) => {
  return (
    <Carousel
      loop
      withIndicators
      slidesToScroll={3}
      slideSize={{ base: '33.33%', sm: '33.33%', md: '25%' }}
      slideGap={{ base: 'xs', sm: 'md' }}
      align="start"
    >
      {projects?.map((project, index) => {
        return (
          <>
            {project.featured && (
              /* https://mantine.dev/x/carousel/#example-cards-carousel */
              <Carousel.Slide key={index}>
                <Link
                  key={index}
                  to={{
                    pathname: `/research/project/${index}/details`,
                    state: project,
                  }}
                >
                  <ProjectCard key={index} project={project} />
                </Link>
              </Carousel.Slide>
            )}
          </>
        );
      })}
    </Carousel>
  );
};

export default FeaturedProjects;
