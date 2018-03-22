const maxChars = 6;
let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let urlMap = new Map(); // for bi-directional map
let codeMap = new Map();

var encode = function(longUrl) {
  if (urlMap.has(longUrl)) return urlMap.get(longUrl);
  
  let code = [...Array(maxChars)]
          .map(_ => Math.floor(Math.random() * charSet.length))
          .map(i => charSet[i])
          .join("");
  
  urlMap.set(longUrl, code);
  codeMap.set(code, longUrl);

  return "http://tinyurl.com/" + code;
};

var decode = function(shortUrl) {
  let code = shortUrl.substr(-maxChars);
  
  if (!codeMap.has(code)) 
     throw new Error(`The given code(${code}) is not existed!`);
  
  return codeMap.get(code);
};
