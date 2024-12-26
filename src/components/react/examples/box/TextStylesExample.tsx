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
        backgroundColor="black"
        textColor="blue"
        textBold
        textType="body"
        textSize="lg"
        textLeading="narrow"
      >
        <p>Text Bold</p>

        <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="black">
          <p>nested</p>
        </Box>
      </Box>

      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="black" mt="xl" textColor="main">
        <p>Color Main</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="black" mt="md" textColor="sub">
        <p>Color Sub</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="black" mt="md" textColor="link">
        <p>Color Main</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="black" mt="md" textColor="linkSub">
        <p>Color Link Sub</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="black" mt="md" textColor="disabled">
        <p>Color Disabled</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="black" mt="md" textColor="blue">
        <p>Color Primary</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="black" mt="md" textColor="pink">
        <p>Color Accent</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="black" mt="md" textColor="red">
        <p>Color Alert</p>
      </Box>

      <Box backgroundColor="black" pt="md" pr="md" pb="md" pl="md" radius="md" mt="xl" textType="body">
        <p>Body size & leading default value</p>
      </Box>

      <Box
        backgroundColor="black"
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
        backgroundColor="black"
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
        backgroundColor="black"
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
        backgroundColor="black"
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
        backgroundColor="black"
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
        backgroundColor="black"
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

      <Box backgroundColor="black" pt="md" pr="md" pb="md" pl="md" radius="md" mt="xl" textAlign="left">
        <p>Text Left</p>
      </Box>
      <Box backgroundColor="black" pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textAlign="center">
        <p>Text Center</p>
      </Box>
      <Box backgroundColor="black" pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textAlign="right">
        <p>Text Right</p>
      </Box>
      <div style={{ textAlign: 'center' }}>
        <Box backgroundColor="black" pt="md" pr="md" pb="md" pl="md" radius="md" mt="md">
          <p>Inherit</p>
        </Box>
      </div>
    </div>
  );
};
