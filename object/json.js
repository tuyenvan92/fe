// login form
// JSON stringify
const object = {
  username: 'truong',
  email: 'truong@gmail.com'
}
console.log('json strinify: ', JSON.stringify(object))

// JSON parse
var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);
console.log('json parse: ', myObj)