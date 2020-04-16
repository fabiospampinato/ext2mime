
/* IMPORT */

import {EXT_SHORT, EXT_FULL} from './consts';

/* EXT 2 MIME */

function ext2mime ( ext: string ): string {

  ext = ext.trim ().toLowerCase ().replace ( /^\.+/, '' );

  for ( let i = 0, l = EXT_SHORT.length; i < l; i++ ) {

    if ( EXT_SHORT[i][1].has ( ext ) ) return `${EXT_SHORT[i][0]}/${ext}`;

  }

  for ( let i = 0, l = EXT_FULL.length; i < l; i++ ) {

    if ( EXT_FULL[i][1][ext] ) return `${EXT_FULL[i][0]}/${EXT_FULL[i][1][ext]}`;

  }

  return '';

}

/* EXPORT */

export default ext2mime;
