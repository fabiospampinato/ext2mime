
/* IMPORT */

import Database from './database';

/* MAIN */

const ext2mime = ( ext: string ): string => {

  ext = ext.trim ().toLowerCase ().replace ( /^\.+/, '' );

  if ( !Database.hasOwnProperty ( ext ) ) return '';

  return Database[ext];

};

/* EXPORT */

export default ext2mime;
