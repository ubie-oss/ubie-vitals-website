### Label

`<Label>` コンポーネントとセットでマークアップしてください。`<Label>` コンポーネントの実体は `<label>` です。

次の点でメリットがあります:

- クリック/タップエリアが拡張されます。`<label>`をクリック/タップすることで、フィールドにフォーカスが移動します。
- スクリーンリーダーのユーザーが、そのフィールドが何を表しているのかを理解できます
  - [スクリーンリーダーの場合](https://www.youtube.com/watch?v=etXSj1TnJuE)、入力欄がフォーカスされた場合に、`<label>` の内容が読み上げられます[^read-label]
- `<label>` の代わりに `aria-labelledby` で他要素のテキストを参照することもできます（できるだけ`<label>`を使用してください）

ID属性を経由して`<label>`とフィールドを紐付けます（例では`<Input>`を使用しています）。

```jsx
<Label htmlFor="some-filed" showRequiredLabel>ラベル</Label>
<Input id="some-field" />
```

ID属性は、ページで固有の値を指定する必要があります。
