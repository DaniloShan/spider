'use strict';

const spider = new (require('../lib/spider'))({
    tableCaption: 10000,

});

spider.on('ensureHash', (hash, addr)=> console.log(`magnet:?xt=urn:btih:${hash}`));

spider.on('unensureHash', (hash)=> console.log(hash));

// spider.on('nodes', (nodes)=>console.log('foundNodes'))

spider.listen(6881);