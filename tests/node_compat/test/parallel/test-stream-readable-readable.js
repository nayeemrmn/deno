// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 23.9.0
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';
const common = require('../common');
const assert = require('assert');

const { Readable } = require('stream');

{
  const r = new Readable({
    read() {}
  });
  assert.strictEqual(r.readable, true);
  r.destroy();
  assert.strictEqual(r.readable, false);
}

{
  const mustNotCall = common.mustNotCall();
  const r = new Readable({
    read() {}
  });
  assert.strictEqual(r.readable, true);
  r.on('end', mustNotCall);
  r.resume();
  r.push(null);
  assert.strictEqual(r.readable, true);
  r.off('end', mustNotCall);
  r.on('end', common.mustCall(() => {
    assert.strictEqual(r.readable, false);
  }));
}

{
  const r = new Readable({
    read: common.mustCall(() => {
      process.nextTick(() => {
        r.destroy(new Error());
        assert.strictEqual(r.readable, false);
      });
    })
  });
  r.resume();
  r.on('error', common.mustCall(() => {
    assert.strictEqual(r.readable, false);
  }));
}
