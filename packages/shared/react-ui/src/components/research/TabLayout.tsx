import { Tabs } from '@mantine/core';
import ProjectList from '@/components/research/ProjectList';
import ColumnLayout from '@/components/layout/ColumnLayout';
import RowLayout from '@/components/layout/RowLayout';

const TabLayout = ({ projects }) => {
  return (
    <div className="mt-4 md:mt-8">
      <Tabs variant="outline" color="cyan" defaultValue="SDO">
        <Tabs.List grow>
          {projects?.map((project, index) => (
            <Tabs.Tab
              value={project.title}
              key={index}
              leftSection={<div className={project.icon} aria-hidden="true" />}
            >
              {project.title}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {projects?.map((project, index) => (
          <Tabs.Panel value={project.title} key={index}>
            <div className="mt-1 p-4 bg-dull-secondary/10 rounded-md">
              <ColumnLayout
                leftContent={
                  <RowLayout
                    subTitleLeft={`${project.title} Analysis Ready Data`}
                    content={<ProjectList />}
                  />
                }
                rightContent={
                  <RowLayout
                    subTitleLeft={`${project.title} Models`}
                    content={<ProjectList />}
                  />
                }
              />
            </div>
          </Tabs.Panel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabLayout;
