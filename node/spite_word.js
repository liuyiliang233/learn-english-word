// 请求 url - > html（信息）  -> 解析html
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
// 请求 top250
// 浏览器输入一个 url, get
const T1 = Date.now();
https.get('https://www.eol.cn/html/en/cetwords/cet4.shtml',function(res){
    // console.log(res);
    // 分段返回的 自己拼接
    let html = '';
    // 有数据产生的时候 拼接
    res.on('data',function(chunk){
        html += chunk;
    })
    // 拼接完成
    res.on('end',function(){
        const $ = cheerio.load(html);
        let allFilms = [];
        $('.wordL p').each(function(){
            const text = $(this).text().trim();
            // 单词
            let word = text.match(/^[a-zA-Z]+/)?.[0];
            // // 词性
            let parts = text.match(/(?=\S)[a-z]+\./)?.[0];
            // // 词义
            let meaning = text.match(/(?<=\.).+$/)?.[0];

            // 存 数据库
            // 没有数据库存成一个json文件 fs
            allFilms.push({
              word, parts, meaning
            })
        })
        // 把数组写入json里面
        fs.writeFile('./word.json', JSON.stringify(allFilms),function(err){
            if(!err){
                console.log(`文件写入完毕 耗时：${(Date.now() - T1)}ms`);
            }
        })
    })
})
