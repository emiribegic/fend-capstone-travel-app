if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let d=Promise.resolve();return i[e]||(d=new Promise(async d=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=d}else importScripts(e),d()})),d.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},d=(d,i)=>{Promise.all(d.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(d)};self.define=(d,a,r)=>{i[d]||(i[d]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+d.slice(1)};return Promise.all(a.map(d=>{switch(d){case"exports":return i;case"module":return n;default:return e(d)}})).then(e=>{const d=r(...e);return i.default||(i.default=d),i})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"./index.html",revision:"21ba6fa32ce442a63d799b169b227bc6"},{url:"main.css",revision:"8ed6148b35bd5bcab942efe18ea08b64"},{url:"main.js",revision:"0ffa92d9b9797e2e363f78baf255e793"},{url:"media/.DS_Store",revision:"7766256de7a5438f3ef201301df8cfb5"},{url:"media/a01d.png",revision:"6205132425aae9531ca782ada677b4dc"},{url:"media/a01n.png",revision:"a8b7dd1bd9f316a8b662e4fecdbc79e8"},{url:"media/a02d.png",revision:"6205132425aae9531ca782ada677b4dc"},{url:"media/a02n.png",revision:"a8b7dd1bd9f316a8b662e4fecdbc79e8"},{url:"media/a03d.png",revision:"6205132425aae9531ca782ada677b4dc"},{url:"media/a03n.png",revision:"a8b7dd1bd9f316a8b662e4fecdbc79e8"},{url:"media/a04d.png",revision:"6205132425aae9531ca782ada677b4dc"},{url:"media/a04n.png",revision:"a8b7dd1bd9f316a8b662e4fecdbc79e8"},{url:"media/a05d.png",revision:"6205132425aae9531ca782ada677b4dc"},{url:"media/a05n.png",revision:"a8b7dd1bd9f316a8b662e4fecdbc79e8"},{url:"media/a06d.png",revision:"6205132425aae9531ca782ada677b4dc"},{url:"media/a06n.png",revision:"a8b7dd1bd9f316a8b662e4fecdbc79e8"},{url:"media/bgimg.jpg",revision:"bf72a20a3de80bccb491694c5d51ccf5"},{url:"media/c01d.png",revision:"5bd79e6650e3e2767f61a4934d4e0c45"},{url:"media/c01n.png",revision:"15d2a8bf9346af031d632374e27d9aa0"},{url:"media/c02d.png",revision:"e036c5b2eebc6c9adfa84f5dac34d725"},{url:"media/c02n.png",revision:"3494f86bb355776828f4e471c76c56d5"},{url:"media/c03d.png",revision:"e93d272802d6631fd16be26e7b72657f"},{url:"media/c03n.png",revision:"c284f4296f3f14086f805adefe46d00d"},{url:"media/c04d.png",revision:"2c5994f7d9426ea4bbae0f33ba417bd9"},{url:"media/c04n.png",revision:"2c5994f7d9426ea4bbae0f33ba417bd9"},{url:"media/d01d.png",revision:"1ed8d5a81bde04b96ec44124085f0973"},{url:"media/d01n.png",revision:"1ed8d5a81bde04b96ec44124085f0973"},{url:"media/d02d.png",revision:"1ed8d5a81bde04b96ec44124085f0973"},{url:"media/d02n.png",revision:"1ed8d5a81bde04b96ec44124085f0973"},{url:"media/d03d.png",revision:"1ed8d5a81bde04b96ec44124085f0973"},{url:"media/d03n.png",revision:"1ed8d5a81bde04b96ec44124085f0973"},{url:"media/f01d.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"media/f01n.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"media/r01d.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"media/r01n.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"media/r02d.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"media/r02n.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"media/r03d.png",revision:"c96f1cb1d19fd3453cf74f4dbb7059a5"},{url:"media/r03n.png",revision:"c96f1cb1d19fd3453cf74f4dbb7059a5"},{url:"media/r04d.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"media/r04n.png",revision:"8d760b0907ed8e597cd9eb9185e58a6c"},{url:"media/r05d.png",revision:"87ccf2d87bfbfb6013b90744986d7781"},{url:"media/r05n.png",revision:"8d760b0907ed8e597cd9eb9185e58a6c"},{url:"media/r06d.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"media/r06n.png",revision:"8d760b0907ed8e597cd9eb9185e58a6c"},{url:"media/s01d.png",revision:"adf57aee773961e0093750518f0573a9"},{url:"media/s01n.png",revision:"7c5e9375d99b54defcb17ec56e246703"},{url:"media/s02d.png",revision:"4445c1dee782450c83183091ece545e4"},{url:"media/s02n.png",revision:"4445c1dee782450c83183091ece545e4"},{url:"media/s03d.png",revision:"4445c1dee782450c83183091ece545e4"},{url:"media/s03n.png",revision:"4445c1dee782450c83183091ece545e4"},{url:"media/s04d.png",revision:"adf57aee773961e0093750518f0573a9"},{url:"media/s04n.png",revision:"7c5e9375d99b54defcb17ec56e246703"},{url:"media/s05d.png",revision:"d1a4a3475009e7c2b7a8ee8ee4dfa8c2"},{url:"media/s05n.png",revision:"d1a4a3475009e7c2b7a8ee8ee4dfa8c2"},{url:"media/s06d.png",revision:"9c82e68544657b2c2bbed1918a654747"},{url:"media/s06n.png",revision:"9c82e68544657b2c2bbed1918a654747"},{url:"media/t01d.png",revision:"32547a79e8469342782cb03652fe80f1"},{url:"media/t01n.png",revision:"3344fb6919bc40c030f8c2eb32bb1abc"},{url:"media/t02d.png",revision:"32547a79e8469342782cb03652fe80f1"},{url:"media/t02n.png",revision:"3344fb6919bc40c030f8c2eb32bb1abc"},{url:"media/t03d.png",revision:"32547a79e8469342782cb03652fe80f1"},{url:"media/t03n.png",revision:"3344fb6919bc40c030f8c2eb32bb1abc"},{url:"media/t04d.png",revision:"3a792b96d369a96b9baed3b12945f849"},{url:"media/t04n.png",revision:"4547d79eaf485245262e87203fee77bb"},{url:"media/t05d.png",revision:"3a792b96d369a96b9baed3b12945f849"},{url:"media/t05n.png",revision:"4547d79eaf485245262e87203fee77bb"},{url:"media/u00d.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"media/u00n.png",revision:"fe27c344277901aa5be6e95337439959"},{url:"src/client/media/bgimg.jpg",revision:"bf72a20a3de80bccb491694c5d51ccf5"}],{})}));
