
/* IMPORT */

import {describe} from 'fava';
import ext2mime from '../dist/index.js';
import {TESTS} from './fixtures.js';

/* MAIN */

describe ( 'ext2mime', it => {

  it ( 'supports popular extensions', t => {

    const results = {};

    Object.keys ( TESTS ).forEach ( ext => {

      results[ext] = ext2mime ( ext );

    });

    t.deepEqual ( results, TESTS );

  });

  it ( 'supports weird casing', t => {

    t.is ( ext2mime ( '  .mP3  ' ), 'audio/mpeg' );

  });

  it ( 'falls back to an empty string for unknown extensions', t => {

    t.is ( ext2mime ( 'unknown' ), '' );

  });

});
