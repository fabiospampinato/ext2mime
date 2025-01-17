# Ext2Mime

Convert a file extension to a mime type. It works only with popular file extensions and it's super lightweight.

This is basically the inverse of [`mime2ext`](https://github.com/fabiospampinato/mime2ext).

## Install

```sh
npm install ext2mime
```

## Usage

```ts
import ext2mime from 'ext2mime';

// Let's convert some file extensions to mime types

ext2mime ( 'mp3' ); // => 'audio/mpeg'
ext2mime ( '.mp3' ); // => 'audio/mpeg'
```

## License

MIT © Fabio Spampinato
