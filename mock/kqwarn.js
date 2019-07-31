import { parse } from 'url';
import mockjs from 'mockjs';

//生成从[min,max]的随机数
//Math.floor(Math.random()*minNum+1); 可以用替换为
//parseInt(Math.random()*(max-min+1)+min,10);
function randomNum(min,max){ 
    switch(arguments.length){ 
        case 1: 
            return Math.floor(Math.random()*minNum+1); 
        break; 
        case 2: 
            return Math.floor(Math.random()*(max-min+1)+min * Math.random() +10 ); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 

const firstDatasource = [
    { "sn": 1, "dept": "女装", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 2, "dept": "男装", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 3, "dept": "亲子", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 4, "dept": "内衣", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 5, "dept": "体用", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 6, "dept": "鞋包", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 7, "dept": "美妆", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 8, "dept": "精品", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 9, "dept": "居家I", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 10, "dept": "居家II", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 11, "dept": "唯品生活", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 12, "dept": "开放平台", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
]

const secondDatasource = [
    { "sn": 1, "dept": "女装", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : randomNum(0,1) },
    { "sn": 2, "dept": "男装", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 3, "dept": "亲子", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 4, "dept": "内衣", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 5, "dept": "体用", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 6, "dept": "鞋包", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 7, "dept": "美妆", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 8, "dept": "精品", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 9, "dept": "居家I", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 10, "dept": "居家II", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 11, "dept": "唯品生活", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
    { "sn": 12, "dept": "开放平台", "lastweek_nums": randomNum(1000,9999), "thisweek_nums": randomNum(1000,9999), buffer: randomNum(10,60) , status : 0 },
]

const getKqWarnData = {
    firstDatasource,
    secondDatasource,
};

export default {
    'GET /api/fake_kqwarn_data': getKqWarnData,
};

