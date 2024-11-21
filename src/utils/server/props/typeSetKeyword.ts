export const typeSetKeyword = new Map<string, Array<string>>();

typeSetKeyword.set('{TextColor}', [
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

typeSetKeyword.set('{Spacing}', ["'xxs'", "'xs'", "'sm'", "'md'", "'lg'", "'xl'", "'xxl'"]);

typeSetKeyword.set('{BackgroundColor}', [
  "'primary'",
  "'primaryDarken'",
  "'accent'",
  "'accentDarken'",
  "'alert'",
  "'gray'",
  "'white'",
]);

typeSetKeyword.set('{Width}', [
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

typeSetKeyword.set('{MaxWidth}', [
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

typeSetKeyword.set('{MinWidth}', typeSetKeyword.get('{Width}')!);

typeSetKeyword.set('{Radius}', ["'xs'", "'sm'", "'md'", "'lg'"]);

typeSetKeyword.set('{BodyFontSize}', ["'xs'", "'sm'", "'md'", "'lg'"]);

typeSetKeyword.set('{BodyLeading}', ["'default'", "'narrow'"]);
