import { Button, Stack } from '@ubie/ubie-ui';
import { useState, useMemo } from 'react';
import Example from './Example';
import type { exampleUrlAndFilePath } from '@utils/server';
import type { FC } from 'react';

interface Props {
  exampleUrlAndFilePaths: exampleUrlAndFilePath[];
}

const ExampleSwitcher: FC<Props> = ({ exampleUrlAndFilePaths }) => {
  const defaultExampleUrl = useMemo(() => {
    return exampleUrlAndFilePaths[0].url || '';
  }, [exampleUrlAndFilePaths]);

  const [current, setCurrent] = useState<string>(defaultExampleUrl);

  const currentExample: exampleUrlAndFilePath | null = useMemo(() => {
    return exampleUrlAndFilePaths.find(({ url }) => url === current) ?? null;
  }, [current]);

  return (
    <>
      <Stack spacing="md" alignItems="normal">
        <Stack direction="row" spacing="xs">
          {exampleUrlAndFilePaths.map(({ name, url }) => (
            <Button
              size="small"
              variant={current === url ? 'primary' : 'secondary'}
              key={url}
              onClick={() => {
                setCurrent(url);
              }}
            >
              {name}
            </Button>
          ))}
        </Stack>

        {currentExample && <Example exampleUrlAndFilePath={currentExample} />}
      </Stack>
    </>
  );
};

export default ExampleSwitcher;
