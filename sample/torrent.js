const parseTorrent = require('parse-torrent');
const fs = require('fs');
// const magnetToTorrent = require('magnet-to-torrent');
// const magnetUri = 'magnet:?xt=urn:btih:6F867172B645EFDFBA46E19B043DC69EA593BDC8';
console.log(parseTorrent(fs.readFileSync(__dirname + '/../torrent/test.torrent')));