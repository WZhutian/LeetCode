let https = require("https");
let cheerio = require('cheerio');
let fs = require('fs');

let API_URL = "https://leetcode.com/api/problems/algorithms/"
let PROBLEMS_URL = 'https://leetcode.com/problems/';
let PROBLEMS_FILE = "./problems.json";
let option = process.argv[2]
let questionNum = process.argv[3]

const getProblem = () => {
    let callback = (name)=>{
        let callback_2 = (chunk)=>{
            filterSlideList(chunk)
        }
        httpsGet(PROBLEMS_URL+name+"/description/",callback_2)
    }
    getProblemTitleFromLocal(callback)
}
const getProblemTitleFromLocal = (callback)=>{
    fs.readFile(PROBLEMS_FILE,(err,data)=>{
        if(err)throw err
        let api = JSON.parse(data)
        callback(api[questionNum])
    })
}

const httpsGet = (url, callback) => {
    // console.log(url);
    https.get(url, function (res) {
        var chunk = '';
        res.on('data', function (data) {
            chunk += data;
        });
        res.on('end', function () {
            callback(chunk)
        });
    }).on('error', function () {
        console.log('获取数据出错！');
    });
}

const update = () => {
    let endFunc = (chunk) => {
        let api = JSON.parse(chunk);
        let map = {}
        for (let obj of api.stat_status_pairs) {
            let question_id = obj.stat.question_id
            let question__title_slug = obj.stat.question__title_slug
            map[question_id] = question__title_slug
        }
        fs.writeFile(PROBLEMS_FILE, JSON.stringify(map), 'utf8', () => {
            console.log("ok")
        })
    }
    httpsGet(API_URL, endFunc)
}



/* 过滤页面信息 */
function filterSlideList(html) {
    
    if (html) {
        // 沿用JQuery风格，定义$
        var $ = cheerio.load(html);
        console.log(html);
        
        var textarea = $('.ReactCodeMirror');
        console.log(textarea);
        
      
    } else {
        console.log('无数据传入！');
    }
}
if (option === "update") {
    update()
} else if (option === "new") {
    getProblem()
}
