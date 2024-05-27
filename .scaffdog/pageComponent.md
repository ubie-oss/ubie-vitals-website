---
name: pageComponent
root: 'src'
output: '.'
ignore: []
questions:
  componentName: What is the component name (e.g., link-button)?
---

# `components/react/examples/{{ inputs.componentName }}/DefaultExample.tsx`

```typescript
import { {{ inputs.componentName | pascal }} } from '@ubie/ubie-ui';
import type { FC } from 'react';

export const DefaultExample: FC = () => {
  return (
    <{{ inputs.componentName | pascal }} />
  );
};

```

# `pages/components/examples/{{ inputs.componentName }}/default.astro`

```astro
---
import { DefaultExample } from '@components/react/examples/{{ inputs.componentName }}/DefaultExample';
import ExampleLayout from '@layouts/ExampleLayout.astro';
---

<ExampleLayout title="Default Example | {{ inputs.componentName | pascal }}">
  <DefaultExample client:only="react" />
</ExampleLayout>

```

# `pages/components/{{ inputs.componentName }}.mdx`

```markdown
---
title: '{{ inputs.componentName | pascal }}'
exampleKey: '{{ inputs.componentName }}'
layout: '@layouts/ComponentLayout.astro'
description: ''
thumbnail: '/assets/images/components/thumbnail-default.svg'
repositoryUrl: ''
---

## Feature

Describe the characteristics of the component. Describe the use cases to which it is applicable and how it differs from other components.

## Usage

Please describe the specific use of the product. Detailed notes on use, code example, etc.

```
