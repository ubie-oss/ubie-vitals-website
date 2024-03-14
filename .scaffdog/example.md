---
name: example
root: 'src'
output: '.'
ignore: []
questions:
  exampleKey: What is the component name (e.g., link-button)?
  exampleName: What is the example name (e.g., with-icon)?
---

# `components/react/examples/{{ inputs.exampleKey }}/{{ inputs.exampleName | pascal }}.tsx`

```typescript

import { {{ inputs.exampleKey | pascal }} } from '@ubie/ubie-ui';
import type { FC } from 'react';

const {{ inputs.exampleName | pascal }}: FC = () => {
  return (
    <{{ inputs.exampleKey | pascal }} />
  );
};

export default {{ inputs.exampleName | pascal }};

```

# `pages/components/examples/{{ inputs.exampleKey }}/{{ inputs.exampleName }}.astro`

```astro
---
import ExampleLayout from '@layouts/ExampleLayout.astro';
import {{ inputs.exampleName | pascal }} from '@components/react/examples/{{ inputs.exampleKey }}/{{ inputs.exampleName | pascal }}';
---

<ExampleLayout title="{{ inputs.exampleName | pascal }} Example | {{ inputs.exampleKey | pascal }}">
  <{{ inputs.exampleName | pascal }} client:only="react" />
</ExampleLayout>
```

