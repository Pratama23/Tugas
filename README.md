Tugas menjalan kan eksekusi node js

pastikan anda instal node js dengan cara
npm init
npm install

ganti script di package.json seperti dibawah
{
  "name": "app_nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "hello" : "echo \"Hello world !!!!\"",
    "start" : "echo \"Hello world !!!\""
  },
  "keywords" : [
	"npm"
],
	
  "author": "Yulfitno Wingga Pratama",
  "license": "ISC"
}

dan buat index.js
 console.log ("Hello World")
 
 
kemudian anda bisa mengeksekusi program npm index.js dan npm start dengan output
Hello World !!!!
