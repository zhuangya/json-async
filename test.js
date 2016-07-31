'use strict';

import test from 'ava';
import jsonAsync from '.';

test('parse', async t => {
  t.plan(3);
  const validJson = await jsonAsync.parse('{"name": "foo"}');
  t.deepEqual({name: 'foo'}, validJson);

  t.throws(jsonAsync.parse('foo foo'));

  const aliased = await jsonAsync.p('{"name": "foo"}');
  t.deepEqual({name: 'foo'}, aliased);
});

test('stringify', async t => {
  t.plan(3);
  const validString = await jsonAsync.stringify({name: 'foo'});
  t.is('{"name":"foo"}', validString);

  const circular = {};
  circular.self = circular;

  t.throws(jsonAsync.stringify(circular));

  const aliased = await jsonAsync.s({name: 'foo'});
  t.is('{"name":"foo"}', aliased);
});
