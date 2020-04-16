
/* FIXTURES */

const TESTS = {
  'ez': 'application/andrew-inset',
  'aw': 'application/applixware',
  'atom': 'application/atom+xml',
  'atomcat': 'application/atomcat+xml',
  'atomsvc': 'application/atomsvc+xml',
  'bdoc': 'application/bdoc',
  'ccxml': 'application/ccxml+xml',
  'cdmia': 'application/cdmi-capability',
  'cdmic': 'application/cdmi-container',
  'cdmid': 'application/cdmi-domain',
  'cdmio': 'application/cdmi-object',
  'cdmiq': 'application/cdmi-queue',
  'cu': 'application/cu-seeme',
  'mpd': 'application/dash+xml',
  'davmount': 'application/davmount+xml',
  'dbk': 'application/docbook+xml',
  'dssc': 'application/dssc+der',
  'xdssc': 'application/dssc+xml',
  'ecma': 'application/ecmascript',
  'emma': 'application/emma+xml',
  'epub': 'application/epub+zip',
  'exi': 'application/exi',
  'pfr': 'application/font-tdpfr',
  'geojson': 'application/geo+json',
  'gml': 'application/gml+xml',
  'gpx': 'application/gpx+xml',
  'gxf': 'application/gxf',
  'gz': 'application/gzip',
  'hjson': 'application/hjson',
  'stk': 'application/hyperstudio',
  'ink': 'application/inkml+xml',
  'ipfix': 'application/ipfix',
  'jar': 'application/java-archive',
  'ser': 'application/java-serialized-object',
  'class': 'application/java-vm',
  'js': 'application/javascript',
  'json': 'application/json',
  'json5': 'application/json5',
  'jsonml': 'application/jsonml+json',
  'jsonld': 'application/ld+json',
  'lostxml': 'application/lost+xml',
  'hqx': 'application/mac-binhex40',
  'cpt': 'application/mac-compactpro',
  'mads': 'application/mads+xml',
  'webmanifest': 'application/manifest+json',
  'mrc': 'application/marc',
  'mrcx': 'application/marcxml+xml',
  'ma': 'application/mathematica',
  'mathml': 'application/mathml+xml',
  'mbox': 'application/mbox',
  'mscml': 'application/mediaservercontrol+xml',
  'metalink': 'application/metalink+xml',
  'meta4': 'application/metalink4+xml',
  'mets': 'application/mets+xml',
  'mods': 'application/mods+xml',
  'm21': 'application/mp21',
  'mp4s': 'application/mp4',
  'doc': 'application/msword',
  'mxf': 'application/mxf',
  'nq': 'application/n-quads',
  'nt': 'application/n-triples',
  'bin': 'application/octet-stream',
  'oda': 'application/oda',
  'opf': 'application/oebps-package+xml',
  'ogx': 'application/ogg',
  'omdoc': 'application/omdoc+xml',
  'onetoc': 'application/onenote',
  'oxps': 'application/oxps',
  'xer': 'application/patch-ops-error+xml',
  'pdf': 'application/pdf',
  'pgp': 'application/pgp-encrypted',
  'asc': 'application/pgp-signature',
  'prf': 'application/pics-rules',
  'p10': 'application/pkcs10',
  'p7m': 'application/pkcs7-mime',
  'p7s': 'application/pkcs7-signature',
  'p8': 'application/pkcs8',
  'ac': 'application/pkix-attr-cert',
  'cer': 'application/pkix-cert',
  'crl': 'application/pkix-crl',
  'pkipath': 'application/pkix-pkipath',
  'pki': 'application/pkixcmp',
  'pls': 'application/pls+xml',
  'ai': 'application/postscript',
  'pskcxml': 'application/pskc+xml',
  'raml': 'application/raml+yaml',
  'rdf': 'application/rdf+xml',
  'rif': 'application/reginfo+xml',
  'rnc': 'application/relax-ng-compact-syntax',
  'rl': 'application/resource-lists+xml',
  'rld': 'application/resource-lists-diff+xml',
  'rs': 'application/rls-services+xml',
  'gbr': 'application/rpki-ghostbusters',
  'mft': 'application/rpki-manifest',
  'roa': 'application/rpki-roa',
  'rsd': 'application/rsd+xml',
  'rss': 'application/rss+xml',
  'rtf': 'application/rtf',
  'sbml': 'application/sbml+xml',
  'scq': 'application/scvp-cv-request',
  'scs': 'application/scvp-cv-response',
  'spq': 'application/scvp-vp-request',
  'spp': 'application/scvp-vp-response',
  'sdp': 'application/sdp',
  'setpay': 'application/set-payment-initiation',
  'setreg': 'application/set-registration-initiation',
  'shf': 'application/shf+xml',
  'siv': 'application/sieve',
  'smi': 'application/smil+xml',
  'rq': 'application/sparql-query',
  'srx': 'application/sparql-results+xml',
  'gram': 'application/srgs',
  'grxml': 'application/srgs+xml',
  'sru': 'application/sru+xml',
  'ssdl': 'application/ssdl+xml',
  'ssml': 'application/ssml+xml',
  'tei': 'application/tei+xml',
  'tfi': 'application/thraud+xml',
  'tsd': 'application/timestamped-data',
  'vxml': 'application/voicexml+xml',
  'wasm': 'application/wasm',
  'wgt': 'application/widget',
  'hlp': 'application/winhlp',
  'wsdl': 'application/wsdl+xml',
  'wspolicy': 'application/wspolicy+xml',
  'xaml': 'application/xaml+xml',
  'xdf': 'application/xcap-diff+xml',
  'xenc': 'application/xenc+xml',
  'xhtml': 'application/xhtml+xml',
  'xml': 'application/xml',
  'dtd': 'application/xml-dtd',
  'xop': 'application/xop+xml',
  'xpl': 'application/xproc+xml',
  'xslt': 'application/xslt+xml',
  'xspf': 'application/xspf+xml',
  'mxml': 'application/xv+xml',
  'yang': 'application/yang',
  'yin': 'application/yin+xml',
  'zip': 'application/zip',
  '3gpp': 'video/3gpp',
  'adp': 'audio/adpcm',
  'au': 'audio/basic',
  'mid': 'audio/midi',
  'mp3': 'audio/mpeg',
  'm4a': 'audio/mp4',
  'mpga': 'audio/mpeg',
  'oga': 'audio/ogg',
  's3m': 'audio/s3m',
  'sil': 'audio/silk',
  'wav': 'audio/wav',
  'weba': 'audio/webm',
  'xm': 'audio/xm',
  'ttc': 'font/collection',
  'otf': 'font/otf',
  'ttf': 'font/ttf',
  'woff': 'font/woff',
  'woff2': 'font/woff2',
  'exr': 'image/aces',
  'apng': 'image/apng',
  'bmp': 'image/bmp',
  'cgm': 'image/cgm',
  'drle': 'image/dicom-rle',
  'emf': 'image/emf',
  'fits': 'image/fits',
  'g3': 'image/g3fax',
  'gif': 'image/gif',
  'heic': 'image/heic',
  'heics': 'image/heic-sequence',
  'heif': 'image/heif',
  'heifs': 'image/heif-sequence',
  'ief': 'image/ief',
  'jls': 'image/jls',
  'jp2': 'image/jp2',
  'jpeg': 'image/jpeg',
  'jpm': 'image/jpm',
  'jpx': 'image/jpx',
  'jxr': 'image/jxr',
  'ktx': 'image/ktx',
  'png': 'image/png',
  'sgi': 'image/sgi',
  'svg': 'image/svg+xml',
  't38': 'image/t38',
  'tif': 'image/tiff',
  'tfx': 'image/tiff-fx',
  'webp': 'image/webp',
  'wmf': 'image/wmf',
  'disposition-notification': 'message/disposition-notification',
  'u8msg': 'message/global',
  'u8dsn': 'message/global-delivery-status',
  'u8mdn': 'message/global-disposition-notification',
  'u8hdr': 'message/global-headers',
  'eml': 'message/rfc822',
  '3mf': 'model/3mf',
  'gltf': 'model/gltf+json',
  'glb': 'model/gltf-binary',
  'igs': 'model/iges',
  'msh': 'model/mesh',
  'stl': 'model/stl',
  'wrl': 'model/vrml',
  'x3db': 'model/x3d+fastinfoset',
  'x3dv': 'model/x3d-vrml',
  'x3d': 'model/x3d+xml',
  'appcache': 'text/cache-manifest',
  'ics': 'text/calendar',
  'coffee': 'text/coffeescript',
  'css': 'text/css',
  'csv': 'text/csv',
  'html': 'text/html',
  'jade': 'text/jade',
  'jsx': 'text/jsx',
  'less': 'text/less',
  'markdown': 'text/markdown',
  'mml': 'text/mathml',
  'mdx': 'text/mdx',
  'n3': 'text/n3',
  'txt': 'text/plain',
  'rtx': 'text/richtext',
  'sgml': 'text/sgml',
  'shex': 'text/shex',
  'slim': 'text/slim',
  'stylus': 'text/stylus',
  'tsv': 'text/tab-separated-values',
  't': 'text/troff',
  'ttl': 'text/turtle',
  'uri': 'text/uri-list',
  'vcard': 'text/vcard',
  'vtt': 'text/vtt',
  'yaml': 'text/yaml',
  '3gp': 'video/3gpp',
  '3g2': 'video/3gpp2',
  'h261': 'video/h261',
  'h263': 'video/h263',
  'h264': 'video/h264',
  'jpgv': 'video/jpeg',
  'mj2': 'video/mj2',
  'ts': 'video/mp2t',
  'mp4': 'video/mp4',
  'mpeg': 'video/mpeg',
  'ogv': 'video/ogg',
  'qt': 'video/quicktime',
  'webm': 'video/webm'
};

/* EXPORT */

module.exports = {TESTS};
