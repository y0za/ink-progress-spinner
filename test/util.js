import test from 'ava';
import { omitProperties } from '../src/util';

test('omitProperties empty object', (t) => {
  const obj = {};
  const properties = ['a', 'b', 'c'];
  t.deepEqual(omitProperties(obj, properties), {});
});

test('omitProperties empty properties', (t) => {
  const obj = { a: 1, b: 2, c: 3 };
  const properties = [];
  t.deepEqual(omitProperties(obj, properties), { a: 1, b: 2, c: 3 });
});

test('omitProperties properties is partially same with object keys', (t) => {
  const obj = { a: 1, b: 2, c: 3 };
  const properties = ['z', 'b', 'c'];
  t.deepEqual(omitProperties(obj, properties), { a: 1 });
});

test('omitProperties properties is completely different from object keys', (t) => {
  const obj = { a: 1, b: 2, c: 3 };
  const properties = ['d', 'e', 'f'];
  t.deepEqual(omitProperties(obj, properties), { a: 1, b: 2, c: 3 });
});

test('omitProperties properties is subset of object keys', (t) => {
  const obj = { a: 1, b: 2, c: 3 };
  const properties = ['a', 'b'];
  t.deepEqual(omitProperties(obj, properties), { c: 3 });
});

test('omitProperties object keys is subset of properties', (t) => {
  const obj = { a: 1, b: 2 };
  const properties = ['a', 'b', 'c'];
  t.deepEqual(omitProperties(obj, properties), {});
});
