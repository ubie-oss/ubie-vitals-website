- どちらも似たような見た目を提供しますが、何を機能として提供するか（=アフォードするか）は異なります
- ページ遷移するかどうかが大きな判断軸になります。ページ遷移するのであれば`<LinkButton />`が候補となります
- ただし、「リンクをボタンとしてデザインすべきかどうか」をまずは検討してください
  - リンクであることを示す手段はいくつか存在します。バナーのような一定のサイズを持つ矩形や、画面上部（ロゴ、ヘッダーナビゲーション等）に存在するものはユーザーにとってリンクであると認識しやすいです
- 逆に、ページ遷移を`<Button>`で表現してはいけません。スクリーンリーダーのユーザーなどが見落とす可能性があります