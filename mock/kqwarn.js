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
    { "sn": 1, "dept": "女装", "lastweek_nums": 10862, "thisweek_nums": 16108, buffer: 1 , status : 0 },
    { "sn": 2, "dept": "男装", "lastweek_nums": 10841, "thisweek_nums": 21472, buffer: randomNum(10,60) , status : 0 },
    { "sn": 3, "dept": "亲子", "lastweek_nums": 6066, "thisweek_nums": 10066, buffer: randomNum(10,60) , status : 0 },
    { "sn": 4, "dept": "内衣", "lastweek_nums": 25051, "thisweek_nums": 27374, buffer: randomNum(10,60) , status : 0 },
    { "sn": 5, "dept": "体用", "lastweek_nums": 6741, "thisweek_nums": 7034, buffer: randomNum(10,60) , status : 0 },
    { "sn": 6, "dept": "鞋包", "lastweek_nums": 3730, "thisweek_nums": 5982, buffer: randomNum(10,60) , status : 0 },
    { "sn": 7, "dept": "美妆", "lastweek_nums": 807, "thisweek_nums": 863, buffer: randomNum(10,60) , status : 0 },
    { "sn": 8, "dept": "精品", "lastweek_nums": 7936, "thisweek_nums": 6716, buffer: randomNum(10,60) , status : 0 },
    { "sn": 9, "dept": "居家I", "lastweek_nums": 2719, "thisweek_nums": 4347, buffer: randomNum(10,60) , status : 0 },
    { "sn": 10, "dept": "居家II", "lastweek_nums": 945, "thisweek_nums": 1972, buffer: randomNum(10,60) , status : 0 },
    { "sn": 11, "dept": "唯品生活", "lastweek_nums": 202, "thisweek_nums": 695, buffer: randomNum(10,60) , status : 0 },
    { "sn": 12, "dept": "开放平台", "lastweek_nums": 2992, "thisweek_nums": 28594, buffer: randomNum(10,60) , status : 0 },
]

const secondDatasource = [
    { "sn": 1, "dept": "女装", "lastweek_nums": 39, "thisweek_nums": 530, buffer: randomNum(10,60) , status : 0 },
    { "sn": 2, "dept": "男装", "lastweek_nums": 969, "thisweek_nums": 2604, buffer: randomNum(10,60) , status : 0 },
    { "sn": 3, "dept": "亲子", "lastweek_nums": 56, "thisweek_nums": 542, buffer: randomNum(10,60) , status : 0 },
    { "sn": 4, "dept": "内衣", "lastweek_nums": 715, "thisweek_nums": 2554, buffer: randomNum(10,60) , status : 0 },
    { "sn": 5, "dept": "体用", "lastweek_nums": 340, "thisweek_nums": 1191, buffer: randomNum(10,60) , status : 0 },
    { "sn": 6, "dept": "鞋包", "lastweek_nums": 839, "thisweek_nums": 736, buffer: randomNum(10,60) , status : 0 },
    { "sn": 7, "dept": "美妆", "lastweek_nums": 255, "thisweek_nums": 187, buffer: randomNum(10,60) , status : 0 },
    { "sn": 8, "dept": "精品", "lastweek_nums": 2, "thisweek_nums": 203, buffer: randomNum(10,60) , status : 0 },
    { "sn": 9, "dept": "居家I", "lastweek_nums": 735, "thisweek_nums": 994, buffer: randomNum(10,60) , status : 0 },
    { "sn": 10, "dept": "居家II", "lastweek_nums": 13, "thisweek_nums": 0, buffer: randomNum(10,60) , status : 0 },
    { "sn": 11, "dept": "唯品生活", "lastweek_nums": 3, "thisweek_nums": 0, buffer: randomNum(10,60) , status : 0 },
    { "sn": 12, "dept": "开放平台", "lastweek_nums": 0, "thisweek_nums": 58, buffer: randomNum(10,60) , status : 0 },
]

const getKqWarnData = {
    firstDatasource,
    secondDatasource,
};

export default {
    'GET /api/fake_kqwarn_data': getKqWarnData,
};

