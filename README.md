# ubie-vitals-website

Ubie Vitals's website

## Installation

```
npm ci
```

## Development

```
npm run dev
```

### Add Component Page

```
npm run generate:page:component
```

**src/components/react/examples/{component-name}/Default.tsx**:

Implement the most basic example.

**src/pages/components/tes-test.mdx**:

- Replace thumbnail
- Describe the documentation

### Add Component Example

```
npm run generate:page:example
```
### Component page props

The props are automatically extracted using `react-docgen`. However, complex props cannot be extracted.
In that case, they can be displayed by describing them in the mdx file frontmatter.prop. By using keywords such as `{TextColor}` and `{Spacing}`, you can omit the description of frequently used values (see src/utils/server/props/typeSetKeyword.ts for details).