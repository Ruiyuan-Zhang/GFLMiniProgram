
```js
//##################以下笔记##################//
//###########################################//
 //在'fetch-blob'提供了这个方案
 //Buffer转ArrayBuffer
 function toArrayBuffer(buf) {
 	var ab = new ArrayBuffer(buf.length);
 	var view = new Uint8Array(ab);
 	for (var i = 0; i < buf.length; ++i) {
 		view[i] = buf[i];
 	}	
 	return ab;		
 }
 //ArrayBuffer转Buffer
 function toBuffer(ab) {
 	var buf = new Buffer(ab.byteLength);
 	var view = new Uint8Array(ab);
 	for (var i = 0; i < buf.length; ++i) {
 		buf[i] = view[i];
 	}
 	return buf;
 }
 ```