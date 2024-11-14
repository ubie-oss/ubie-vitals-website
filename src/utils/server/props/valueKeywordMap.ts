export const valueKeywordMap = new Map<string, Array<string>>();

valueKeywordMap.set('{TextColor}', [
  "'main'",
  "'sub'",
  "'link'",
  "'linkSub'",
  "'disabled'",
  "'primary'",
  "'accent'",
  "'alert'",
  "'white'",
]);

valueKeywordMap.set('{Spacing}', ["'xxs'", "'xs'", "'sm'", "'md'", "'lg'", "'xl'", "'xxl'"]);

valueKeywordMap.set('{BackgroundColor}', [
  "'primary'",
  "'primaryDarken'",
  "'accent'",
  "'accentDarken'",
  "'alert'",
  "'gray'",
  "'white'",
]);

valueKeywordMap.set('{Width}', [
  "'cap'",
  "'ch'",
  "'em'",
  "'ex'",
  "'ic'",
  "'lh'",
  "'rcap'",
  "'rem'",
  "'rex'",
  "'ric'",
  "'rlh'",
  "'vh'",
  "'vmax'",
  "'vmin'",
  "'vw'",
  "'vb'",
  "'vi'",
  "'cqw'",
  "'cqh'",
  "'cqi'",
  "'cqb'",
  "'cqmin'",
  "'cqmax'",
  "'px'",
  "'cm'",
  "'mm'",
  "'q'",
  "'in'",
  "'pc'",
  "'pt'",
  "'%'",
  "'auto'",
  "'fit-content'",
  "'fit-content()'",
  "'min-content'",
  "'max-content'",
  "'var()'",
]);

valueKeywordMap.set('{MaxWidth}', [
  "'cap'",
  "'ch'",
  "'em'",
  "'ex'",
  "'ic'",
  "'lh'",
  "'rcap'",
  "'rem'",
  "'rex'",
  "'ric'",
  "'rlh'",
  "'vh'",
  "'vmax'",
  "'vmin'",
  "'vw'",
  "'vb'",
  "'vi'",
  "'cqw'",
  "'cqh'",
  "'cqi'",
  "'cqb'",
  "'cqmin'",
  "'cqmax'",
  "'px'",
  "'cm'",
  "'mm'",
  "'q'",
  "'in'",
  "'pc'",
  "'pt'",
  "'%'",
  "'none'",
  "'fit-content'",
  "'fit-content()'",
  "'min-content'",
  "'max-content'",
  "'var()'",
]);

valueKeywordMap.set('{MinWidth}', valueKeywordMap.get('{Width}')!);

valueKeywordMap.set('{Radius}', ["'xs'", "'sm'", "'md'", "'lg'"]);

valueKeywordMap.set('{BodyFontSize}', ["'xs'", "'sm'", "'md'", "'lg'"]);

valueKeywordMap.set('{BodyLeading}', ["'default'", "'narrow'"]);
