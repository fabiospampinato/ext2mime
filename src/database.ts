
/* IMPORT */

import db from 'mime-standard';

/* MAIN */

const Database = {
  '3gpp': 'video/3gpp',
  'mp3': 'audio/mpeg',
  'x3db': 'model/x3d+fastinfoset',
  'x3dv': 'model/x3d-vrml'
};

for ( const mime in db ) {
  const extensions = db[mime];
  for ( let i = 0, l = extensions.length; i < l; i++ ) {
    const extension = extensions[i];
    if ( extension in Database ) continue;
    Database[extension] = mime;
  }
}

/* EXPORT */

export default Database;
