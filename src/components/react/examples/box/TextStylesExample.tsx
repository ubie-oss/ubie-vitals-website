import { Box } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const TextStylesExample: FC = () => {
  return (
    <div>
      <Box
        pt="md"
        pr="md"
        pb="md"
        pl="md"
        radius="md"
        backgroundColor="gray"
        textColor="primary"
        textBold
        textType="body"
        textSize="lg"
        textLeading="narrow"
      >
        <p>Text Bold</p>

        <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="gray">
          <p>nested</p>
        </Box>
      </Box>

      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="gray" mt="xl" textColor="main">
        <p>Color Main</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="gray" mt="md" textColor="sub">
        <p>Color Sub</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="gray" mt="md" textColor="link">
        <p>Color Main</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="gray" mt="md" textColor="linkSub">
        <p>Color Link Sub</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="gray" mt="md" textColor="disabled">
        <p>Color Disabled</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="gray" mt="md" textColor="primary">
        <p>Color Primary</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="gray" mt="md" textColor="accent">
        <p>Color Accent</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="gray" mt="md" textColor="alert">
        <p>Color Alert</p>
      </Box>

      <Box backgroundColor="gray" pt="md" pr="md" pb="md" pl="md" radius="md" mt="xl" textType="body">
        <p>Body size & leading default value</p>
      </Box>

      <Box
        backgroundColor="gray"
        pt="md"
        pr="md"
        pb="md"
        pl="md"
        radius="md"
        mt="xl"
        textType="body"
        textSize="sm"
        textLeading="default"
      >
        <p>Body Small Default</p>
      </Box>
      <Box
        backgroundColor="gray"
        pt="md"
        pr="md"
        pb="md"
        pl="md"
        radius="md"
        mt="md"
        textType="body"
        textSize="sm"
        textLeading="narrow"
      >
        <p>Body Small Narrow</p>
      </Box>

      <Box
        backgroundColor="gray"
        pt="md"
        pr="md"
        pb="md"
        pl="md"
        radius="md"
        mt="xl"
        textType="body"
        textSize="md"
        textLeading="default"
      >
        <p>Body Medium Default</p>
      </Box>
      <Box
        backgroundColor="gray"
        pt="md"
        pr="md"
        pb="md"
        pl="md"
        radius="md"
        mt="md"
        textType="body"
        textSize="md"
        textLeading="narrow"
      >
        <p>Body Medium Narrow</p>
      </Box>

      <Box
        backgroundColor="gray"
        pt="md"
        pr="md"
        pb="md"
        pl="md"
        radius="md"
        mt="xl"
        textType="body"
        textSize="lg"
        textLeading="default"
      >
        <p>Body Large Default</p>
      </Box>
      <Box
        backgroundColor="gray"
        pt="md"
        pr="md"
        pb="md"
        pl="md"
        radius="md"
        mt="md"
        textType="body"
        textSize="lg"
        textLeading="narrow"
      >
        <p>Body Large Narrow</p>
      </Box>

      <Box backgroundColor="gray" pt="md" pr="md" pb="md" pl="md" radius="md" mt="xl" textAlign="left">
        <p>Text Left</p>
      </Box>
      <Box backgroundColor="gray" pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textAlign="center">
        <p>Text Center</p>
      </Box>
      <Box backgroundColor="gray" pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textAlign="right">
        <p>Text Right</p>
      </Box>
      <div style={{ textAlign: 'center' }}>
        <Box backgroundColor="gray" pt="md" pr="md" pb="md" pl="md" radius="md" mt="md">
          <p>Inherit</p>
        </Box>
      </div>
    </div>
  );
};
