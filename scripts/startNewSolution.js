const { writeFileSync, mkdirSync, existsSync } = require('fs');
const { get } = require('request');
const { load } = require('cheerio');
//TODO list:
//复制文件夹到目标
//重命名文件夹
//爬取相关代码
//填入solution.js