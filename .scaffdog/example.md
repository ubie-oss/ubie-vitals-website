---
name: example
root: '.'
output: '**/*'
ignore: []
questions:
  exampleKey: What is the exampleKey (e.g., link-button)?
  exampleName: What is the exampleName (e.g., with-icon)?
---

# `src/components/react/examples/{{ inputs.exampleKey }}/{{ inputs.exampleName | pascal }}.tsx`

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

# `src/pages/components/examples/{{ inputs.exampleKey }}/{{ inputs.exampleName }}.astro`

```typescript
---
import ExampleLayout from '@layouts/ExampleLayout.astro';
import {{ inputs.exampleName | pascal }} from '@components/react/examples/{{ inputs.exampleKey }}/{{ inputs.exampleName | pascal }}';
---

<ExampleLayout title="{{ inputs.exampleName | pascal }} Example | {{ inputs.exampleKey | pascal }}">
  <{{ inputs.exampleName | pascal }} client:only="react" />
</ExampleLayout>
```

