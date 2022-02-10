
/* IMPORT */

import {describe} from 'ava-spec';
import mm from 'mime';
import Mimes from 'mime/types/standard';
import {default as ext2mime} from '../dist';
import {TESTS} from './fixtures';

/* EXT 2 MIME */

describe ( 'ext2mime', it => {

  it ( 'returns the same extensions as mime', t => {

    for ( const mime of Object.values ( TESTS ) ) {

      for ( const ext of Mimes[mime] ) {

        t.is ( ext2mime ( ext ), mm.getType ( ext ) );

      }

    }

  });

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
