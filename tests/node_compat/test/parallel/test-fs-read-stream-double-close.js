// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 18.12.1
// This file is automatically generated by `tools/node_compat/setup.ts`. Do not modify this file manually.

'use strict';

const common = require('../common');
const fs = require('fs');

{
  const s = fs.createReadStream(__filename);

  s.close(common.mustCall());
  s.close(common.mustCall());
}

{
  const s = fs.createReadStream(__filename);

  // This is a private API, but it is worth testing. close calls this
  s.destroy(null, common.mustCall());
  s.destroy(null, common.mustCall());
}