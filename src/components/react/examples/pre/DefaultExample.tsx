import { Stack, Pre, Text, Box } from '@ubie/ubie-ui';
import type { FC } from 'react';

const text = `Lorem                                                                      Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

export const DefaultExample: FC = () => {
  return (
    <Box maxWidth="400px" p="lg">
      <Stack spacing="lg">
        <Stack spacing="sm">
          <Text bold>Default(pre-line)</Text>
          <Pre>{text}</Pre>
        </Stack>

        <Stack spacing="sm">
          <Text bold>whiteSpace: pre</Text>
          <Pre whiteSpace="pre">{text}</Pre>
        </Stack>

        <Stack spacing="sm">
          <Text bold>whiteSpace: pre-wrap</Text>
          <Pre whiteSpace="pre-wrap">{text}</Pre>
        </Stack>

        <Stack spacing="sm">
          <Text bold>whiteSpace: pre-line</Text>
          <Pre whiteSpace="pre-line">{text}</Pre>
        </Stack>

        <Stack spacing="sm">
          <Text bold>whiteSpace: break-spaces</Text>
          <Pre whiteSpace="break-spaces">{text}</Pre>
        </Stack>
      </Stack>
    </Box>
  );
};
