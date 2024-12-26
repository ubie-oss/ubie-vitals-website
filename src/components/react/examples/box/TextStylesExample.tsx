import { Box, Stack } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const TextStylesExample: FC = () => {
  return (
    <Stack gap="xl">
      <Box
        pt="md"
        pr="md"
        pb="md"
        pl="md"
        radius="md"
        backgroundColor="blue"
        textColor="blue"
        textBold
        textType="body"
        textSize="lg"
        textLeading="narrow"
      >
        <Stack gap="md">
          <p>Text Bold</p>

          <Box pt="md" pr="md" pb="md" pl="md" radius="md" backgroundColor="pink">
            <p>nested</p>
          </Box>
        </Stack>
      </Box>

      <Stack gap="xs">
        <Box px="md" py="sm" radius="sm" border="black" textColor="main">
          <p>Color Main</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="sub">
          <p>Color Sub</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="link">
          <p>Color Link</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="linkSub">
          <p>Color Link Sub</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="disabled">
          <p>Color Disabled</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="black">
          <p>Color Black</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="blackDarken">
          <p>Color Black Darken</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="blue">
          <p>Color Blue</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="blueDarken">
          <p>Color Blue Darken</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="pink">
          <p>Color Pink</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="pinkDarken">
          <p>Color Pink Darken</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="orange">
          <p>Color Orange</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="orangeDarken">
          <p>Color Orange Darken</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="purple">
          <p>Color Purple</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="purpleDarken">
          <p>Color Purple Darken</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="green">
          <p>Color Green</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="greenDarken">
          <p>Color Green Darken</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="red">
          <p>Color Red</p>
        </Box>
        <Box px="md" py="sm" radius="sm" border="black" textColor="redDarken">
          <p>Color Red Darken</p>
        </Box>
      </Stack>

      <Stack gap="sm">
        <Box backgroundColor="blackDarken" pt="md" pr="md" pb="md" pl="md" radius="md" textType="body">
          <p>Body size & leading default value</p>
        </Box>
        <Box
          backgroundColor="blackDarken"
          pt="md"
          pr="md"
          pb="md"
          pl="md"
          radius="md"
          textType="body"
          textSize="sm"
          textLeading="default"
        >
          <p>Body Small Default</p>
        </Box>
        <Box
          backgroundColor="blackDarken"
          pt="md"
          pr="md"
          pb="md"
          pl="md"
          radius="md"
          textType="body"
          textSize="sm"
          textLeading="narrow"
        >
          <p>Body Small Narrow</p>
        </Box>
        <Box
          backgroundColor="blackDarken"
          pt="md"
          pr="md"
          pb="md"
          pl="md"
          radius="md"
          textType="body"
          textSize="md"
          textLeading="default"
        >
          <p>Body Medium Default</p>
        </Box>
        <Box
          backgroundColor="blackDarken"
          pt="md"
          pr="md"
          pb="md"
          pl="md"
          radius="md"
          textType="body"
          textSize="md"
          textLeading="narrow"
        >
          <p>Body Medium Narrow</p>
        </Box>
        <Box
          backgroundColor="blackDarken"
          pt="md"
          pr="md"
          pb="md"
          pl="md"
          radius="md"
          textType="body"
          textSize="lg"
          textLeading="default"
        >
          <p>Body Large Default</p>
        </Box>
        <Box
          backgroundColor="blackDarken"
          pt="md"
          pr="md"
          pb="md"
          pl="md"
          radius="md"
          textType="body"
          textSize="lg"
          textLeading="narrow"
        >
          <p>Body Large Narrow</p>
        </Box>
      </Stack>

      <Stack gap="sm">
        <Box backgroundColor="blackDarken" pt="md" pr="md" pb="md" pl="md" radius="md" textAlign="left">
          <p>Text Left</p>
        </Box>
        <Box backgroundColor="blackDarken" pt="md" pr="md" pb="md" pl="md" radius="md" textAlign="center">
          <p>Text Center</p>
        </Box>
        <Box backgroundColor="blackDarken" pt="md" pr="md" pb="md" pl="md" radius="md" textAlign="right">
          <p>Text Right</p>
        </Box>
        <div style={{ textAlign: 'center' }}>
          <Box backgroundColor="blackDarken" pt="md" pr="md" pb="md" pl="md" radius="md">
            <p>Inherit</p>
          </Box>
        </div>
      </Stack>
    </Stack>
  );
};
