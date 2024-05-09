---
name: example
root: 'src'
output: '.'
ignore: []
questions:
  exampleKey: What is the component name (e.g., link-button)?
  exampleName: What is the example name (e.g., with-icon)?
---

# `components/react/examples/{{ inputs.exampleKey }}/{{ inputs.exampleName | pascal }}Example.tsx`

```typescript

import { {{ inputs.exampleKey | pascal }} } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const {{ inputs.exampleName | pascal }}Example: FC = () => {
  return (
    <{{ inputs.exampleKey | pascal }} />
  );
};

```

# `pages/components/examples/{{ inputs.exampleKey }}/{{ inputs.exampleName }}.astro`

```astro
---
import { {{ inputs.exampleName | pascal }}Example } from '@components/react/examples/{{ inputs.exampleKey }}/{{ inputs.exampleName | pascal }}Example';
import ExampleLayout from '@layouts/ExampleLayout.astro';
---

<ExampleLayout title="{{ inputs.exampleName | pascal }} Example | {{ inputs.exampleKey | pascal }}">
  <{{ inputs.exampleName | pascal }}Example client:only="react" />
</ExampleLayout>
```

