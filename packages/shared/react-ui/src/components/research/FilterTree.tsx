// import { IconChevronDown } from '@tabler/icons-react';
import {
  Button,
  Checkbox,
  getTreeExpandedState,
  Group,
  RenderTreeNodePayload,
  Tree,
  useTree,
} from '@mantine/core';
import { TreeNodeData } from '@mantine/core';

const data: TreeNodeData[] = [
  {
    label: 'src',
    value: 'src',
    children: [
      {
        label: 'components',
        value: 'src/components',
        children: [
          { label: 'Accordion.tsx', value: 'src/components/Accordion.tsx' },
          { label: 'Tree.tsx', value: 'src/components/Tree.tsx' },
          { label: 'Button.tsx', value: 'src/components/Button.tsx' },
        ],
      },
    ],
  },
  {
    label: 'node_modules',
    value: 'node_modules',
    children: [
      {
        label: 'react',
        value: 'node_modules/react',
        children: [
          { label: 'index.d.ts', value: 'node_modules/react/index.d.ts' },
          { label: 'package.json', value: 'node_modules/react/package.json' },
        ],
      },
      {
        label: '@mantine',
        value: 'node_modules/@mantine',
        children: [
          {
            label: 'core',
            value: 'node_modules/@mantine/core',
            children: [
              {
                label: 'index.d.ts',
                value: 'node_modules/@mantine/core/index.d.ts',
              },
              {
                label: 'package.json',
                value: 'node_modules/@mantine/core/package.json',
              },
            ],
          },
          {
            label: 'hooks',
            value: 'node_modules/@mantine/hooks',
            children: [
              {
                label: 'index.d.ts',
                value: 'node_modules/@mantine/hooks/index.d.ts',
              },
              {
                label: 'package.json',
                value: 'node_modules/@mantine/hooks/package.json',
              },
            ],
          },
          {
            label: 'form',
            value: 'node_modules/@mantine/form',
            children: [
              {
                label: 'index.d.ts',
                value: 'node_modules/@mantine/form/index.d.ts',
              },
              {
                label: 'package.json',
                value: 'node_modules/@mantine/form/package.json',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'package.json',
    value: 'package.json',
  },
  {
    label: 'tsconfig.json',
    value: 'tsconfig.json',
  },
];

const renderTreeNode = ({
  node,
  expanded,
  hasChildren,
  elementProps,
  tree,
}: RenderTreeNodePayload) => {
  const checked = tree.isNodeChecked(node.value);
  const indeterminate = tree.isNodeIndeterminate(node.value);

  return (
    <Group gap="xs" {...elementProps}>
      <Checkbox.Indicator
        checked={checked}
        indeterminate={indeterminate}
        onClick={() =>
          !checked ? tree.checkNode(node.value) : tree.uncheckNode(node.value)
        }
      />

      <Group gap={5} onClick={() => tree.toggleExpanded(node.value)}>
        <span>{node.label}</span>

        {hasChildren && (
          <i className="fas fa-circle-chevron-down text-blue-500" />
        )}
      </Group>
    </Group>
  );
};

const FilterTree = () => {
  const tree = useTree({
    initialExpandedState: getTreeExpandedState(data, '*'),
    initialCheckedState: [
      'node_modules',
      'node_modules/@mantine/core/index.d.ts',
      'node_modules/@mantine/form/package.json',
    ],
  });

  return (
    <>
      <Group mb="md">
        <Button onClick={() => tree.checkAllNodes()}>Check all</Button>
        <Button onClick={() => tree.uncheckAllNodes()}>Uncheck all</Button>
      </Group>

      <Tree
        tree={tree}
        data={data}
        levelOffset={23}
        expandOnClick={false}
        renderNode={renderTreeNode}
      />
    </>
  );
};

export default FilterTree;
