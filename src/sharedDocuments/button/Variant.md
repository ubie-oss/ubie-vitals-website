`variant` propは機能や、画面内での情報のヒエラルキーを表現するために使用します。情報の優先度を踏まえ、強弱がつくように設計してください。すべてを強調すると、すべてが同じに見えます

- `primary` - 画面内でもっとも重要なアクションに使用します。可能な限り1画面につき1つの使用にとどめてください
- `secondary` - Primaryボタンに対して副次的なアクションを促すボタンとして扱います。背景が透過のため、背景色とテキストが同化しないよう注意してください
- `accent` - `primary`ほど重要ではなく、`secondary`よりも強調したい場合に使用します。利用の際は、まずは`primary`を使用できないかを検討します。`alert` と混同しないよう注意してください
- `alert` - 不可逆の操作やリスクのあるアクションに使用します。例えば「削除」や「退会」に使うと良いでしょう
- `text` - 控えめな強調度合いを持つボタンです。ボタン同士の差をつける場合、または重要ではないアクションに使用します。「閉じる」や「キャンセル」などに適用できます
- `textAlert` - alertの意味合いを持つ `text` です。背景が透過のため、背景色とテキストが同化しないよう注意してください
- `AuthXXX` - Socialログインに使用します