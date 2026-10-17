import test from 'node:test';
import assert from 'node:assert/strict';
import { interpolateCount, formatScrollPercent } from './motion.ts';

test('interpolateCount starts at start value and ends at end value', () => {
  assert.equal(interpolateCount(0, 0, 80), 0);
  assert.equal(interpolateCount(1, 0, 80), 80);
  assert.equal(interpolateCount(1, 10, 100), 100);
});

test('interpolateCount smoothly increases monotonically', () => {
  const v1 = interpolateCount(0.2, 0, 100);
  const v2 = interpolateCount(0.5, 0, 100);
  const v3 = interpolateCount(0.8, 0, 100);
  assert.ok(v1 < v2);
  assert.ok(v2 < v3);
  assert.ok(v3 <= 100);
});

test('formatScrollPercent formats 0.0 to 1.0 cleanly with percentage symbol', () => {
  assert.equal(formatScrollPercent(0), '0%');
  assert.equal(formatScrollPercent(0.42), '42%');
  assert.equal(formatScrollPercent(1), '100%');
  assert.equal(formatScrollPercent(1.5), '100%');
  assert.equal(formatScrollPercent(-0.2), '0%');
});
