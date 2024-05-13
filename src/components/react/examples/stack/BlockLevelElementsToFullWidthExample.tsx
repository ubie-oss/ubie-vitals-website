import { Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

const BlockLevelElementsToFullWidth: FC = () => {
  return (
    <Stack spacing="lg" alignItems="normal">
      <Stack spacing="md" alignItems="normal">
        <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
        <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
        <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
        <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
      </Stack>

      <Stack spacing="xs">
        <p style={{ margin: 0 }}>
          If you do not use <code>alignItems=&quot;normal&quot;</code>:
        </p>
        <Stack spacing="md">
          <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
          <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
          <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
          <p style={{ margin: 0, backgroundColor: '#ccc' }}>Block Level Element</p>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BlockLevelElementsToFullWidth;
