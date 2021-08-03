Tutorial menjalankan script ini 
1. npm init
2. npm install
3. ubah script package.json
  {
  "name": "app_nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
        "start" : "echo \"Hello world !!!\""
  },
  "keywords" : [
	"npm"
],
	
  "author": "Yulfitno Wingga Pratama",
  "license": "ISC"
}

4. buat index.js di folder app_modules
  console.log("Hello World !!)

5. jalankan perintah npm index.js dan npm start
   dan outputnya adalah "Hello world"
