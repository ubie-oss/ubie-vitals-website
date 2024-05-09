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

        <Box
          pt="md"
          pr="md"
          pb="md"
          pl="md"
          radius="md"
          mt="md"
          backgroundColor="gray"
          textType="note"
          textSize="lg"
          textLeading="tight"
          textBold={false}
        >
          <p>nested. reset styles</p>
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
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="xl" textType="body">
        <p>Body size & leading default value</p>
      </Box>

      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="xl" textType="body" textSize="sm" textLeading="default">
        <p>Body Small Default</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textType="body" textSize="sm" textLeading="narrow">
        <p>Body Small Narrow</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textType="body" textSize="sm" textLeading="tight">
        <p>Body Small Tight</p>
      </Box>

      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="xl" textType="body" textSize="md" textLeading="default">
        <p>Body Medium Default</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textType="body" textSize="md" textLeading="narrow">
        <p>Body Medium Narrow</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textType="body" textSize="md" textLeading="tight">
        <p>Body Medium Tight</p>
      </Box>

      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="xl" textType="body" textSize="lg" textLeading="default">
        <p>Body Large Default</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textType="body" textSize="lg" textLeading="narrow">
        <p>Body Large Narrow</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textType="body" textSize="lg" textLeading="tight">
        <p>Body Large Tight</p>
      </Box>

      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="xl" textType="note">
        <p>Note size & leading default value</p>
      </Box>

      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="xl" textType="note" textSize="sm" textLeading="default">
        <p>Note Small Default</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textType="note" textSize="sm" textLeading="narrow">
        <p>Note Small Narrow</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textType="note" textSize="sm" textLeading="tight">
        <p>Note Small Tight</p>
      </Box>

      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="xl" textType="note" textSize="md" textLeading="default">
        <p>Note Medium Default</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textType="note" textSize="md" textLeading="narrow">
        <p>Note Medium Narrow</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textType="note" textSize="md" textLeading="tight">
        <p>Note Medium Tight</p>
      </Box>

      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="xl" textType="note" textSize="lg" textLeading="default">
        <p>Note Large Default</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textType="note" textSize="lg" textLeading="narrow">
        <p>Note Large Narrow</p>
      </Box>
      <Box pt="md" pr="md" pb="md" pl="md" radius="md" mt="md" textType="note" textSize="lg" textLeading="tight">
        <p>Note Large Tight</p>
      </Box>
    </div>
  );
};
