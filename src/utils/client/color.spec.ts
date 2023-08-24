import { expect, test } from 'vitest';
import { checkContrast } from './color';

test('test1', () => {
  expect(checkContrast('#333333', '#f2f6fd')).toBe(11.657650074486702);
});
