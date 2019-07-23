import mockjs from 'mockjs';

const searchData = [{"index":1,"keyword":"搜索关键词-0","count":723,"range":87,"status":0},{"index":2,"keyword":"搜索关键词-1","count":176,"range":80,"status":0}]

const visitData =[{"x":"2019-07-03","y":7},{"x":"2019-07-04","y":5},{"x":"2019-07-05","y":4},{"x":"2019-07-06","y":2},{"x":"2019-07-07","y":4},{"x":"2019-07-08","y":7},{"x":"2019-07-09","y":5},{"x":"2019-07-10","y":6},{"x":"2019-07-11","y":5},{"x":"2019-07-12","y":9},{"x":"2019-07-13","y":6},{"x":"2019-07-14","y":3},{"x":"2019-07-15","y":1},{"x":"2019-07-16","y":5},{"x":"2019-07-17","y":3},{"x":"2019-07-18","y":6},{"x":"2019-07-19","y":5}]

const visitData2 =[{"x":"2019-07-03","y":1},{"x":"2019-07-04","y":6},{"x":"2019-07-05","y":4},{"x":"2019-07-06","y":8},{"x":"2019-07-07","y":3},{"x":"2019-07-08","y":7},{"x":"2019-07-09","y":2}]

const salesData = [{"x":"1月","y":408},{"x":"2月","y":782},{"x":"3月","y":398},{"x":"4月","y":538},{"x":"5月","y":480},{"x":"6月","y":411},{"x":"7月","y":1056},{"x":"8月","y":921},{"x":"9月","y":513},{"x":"10月","y":925},{"x":"11月","y":735},{"x":"12月","y":464}]

const vpeTags = mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }],
})

//const offlineData = [{"name":"Stores 0","cvr":0.4},{"name":"Stores 1","cvr":0.2},{"name":"Stores 2","cvr":0.2},{"name":"Stores 3","cvr":0.8},{"name":"Stores 4","cvr":0.3},{"name":"Stores 5","cvr":0.1},{"name":"Stores 6","cvr":0.3},{"name":"Stores 7","cvr":0.4},{"name":"Stores 8","cvr":0.8},{"name":"Stores 9","cvr":0.3}]
const offlineData = 
[{
	"name": "男装",
    "cvr": 0.4,
    "tag":"A"
}, {
	"name": "女装",
    "cvr": 0.2,
    "tag":"B"
}, {
	"name": "母婴",
	"cvr": 0.2,
    "tag":"C"
}, {
	"name": "鞋包",
	"cvr": 0.8,
    "tag":"D"
}, {
	"name": "内衣",
	"cvr": 0.3,
    "tag":"E"
}, {
	"name": "体用",
	"cvr": 0.1,
    "tag":"F"
}, {
	"name": "美妆",
	"cvr": 0.3,
    "tag":"G"
}, {
	"name": "精品",
	"cvr": 0.4,
    "tag":"H"
}, {
	"name": "居家",
	"cvr": 0.8,
    "tag":"I"
}, {
	"name": "MP",
	"cvr": 0.3,
    "tag":"J"
}]

const offlineChartData = [{"x":1562634802200,"y1":20,"y2":108},{"x":1562636602200,"y1":28,"y2":68},{"x":1562638402200,"y1":104,"y2":44},{"x":1562640202200,"y1":51,"y2":34},{"x":1562642002200,"y1":108,"y2":55},{"x":1562643802200,"y1":19,"y2":22},{"x":1562645602200,"y1":20,"y2":50},{"x":1562647402200,"y1":28,"y2":55},{"x":1562649202200,"y1":38,"y2":69},{"x":1562651002200,"y1":100,"y2":105},{"x":1562652802200,"y1":54,"y2":105},{"x":1562654602200,"y1":58,"y2":43},{"x":1562656402200,"y1":106,"y2":82},{"x":1562658202200,"y1":36,"y2":22},{"x":1562660002200,"y1":82,"y2":104},{"x":1562661802200,"y1":62,"y2":29},{"x":1562663602200,"y1":69,"y2":87},{"x":1562665402200,"y1":70,"y2":10},{"x":1562667202200,"y1":60,"y2":69},{"x":1562669002200,"y1":28,"y2":30}]

const offlineChartData2 = [{"x":1562634802200,"y1":180,"y2":108},{"x":1562636602200,"y1":28,"y2":68},{"x":1562638402200,"y1":104,"y2":44},{"x":1562640202200,"y1":51,"y2":34},{"x":1562642002200,"y1":108,"y2":55},{"x":1562643802200,"y1":19,"y2":22},{"x":1562645602200,"y1":20,"y2":50},{"x":1562647402200,"y1":28,"y2":55}]

const offlineChartData3 = [{"x":1562634802200,"y1":200,"y2":108},{"x":1562636602200,"y1":28,"y2":68},{"x":1562638402200,"y1":104,"y2":44},{"x":1562640202200,"y1":51,"y2":34},{"x":1562642002200,"y1":108,"y2":55},{"x":1562643802200,"y1":19,"y2":22}]


const getFakeChartData2 = {
  visitData,
  visitData2,
  salesData,
  searchData,
  vpeTags,
  offlineData,
  offlineChartData
};

const getOfflineData = tag => {
    switch (tag) {
        case 'A':
            return [{"x":1562634802200,"y1":20,"y2":108},{"x":1562636602200,"y1":28,"y2":68},{"x":1562638402200,"y1":104,"y2":44},{"x":1562640202200,"y1":51,"y2":34},{"x":1562642002200,"y1":108,"y2":55},{"x":1562643802200,"y1":19,"y2":22},{"x":1562645602200,"y1":20,"y2":50},{"x":1562647402200,"y1":28,"y2":55},{"x":1562649202200,"y1":38,"y2":69},{"x":1562651002200,"y1":100,"y2":105},{"x":1562652802200,"y1":54,"y2":105},{"x":1562654602200,"y1":58,"y2":43},{"x":1562656402200,"y1":106,"y2":82},{"x":1562658202200,"y1":36,"y2":22},{"x":1562660002200,"y1":82,"y2":104},{"x":1562661802200,"y1":62,"y2":29},{"x":1562663602200,"y1":69,"y2":87},{"x":1562665402200,"y1":70,"y2":10},{"x":1562667202200,"y1":60,"y2":69},{"x":1562669002200,"y1":28,"y2":30}]
            break;
        case 'B':
            return [{"x":1562634802200,"y1":300,"y2":108},{"x":1562636602200,"y1":28,"y2":68},{"x":1562638402200,"y1":104,"y2":44},{"x":1562640202200,"y1":51,"y2":34},{"x":1562642002200,"y1":108,"y2":55},{"x":1562643802200,"y1":19,"y2":22},{"x":1562645602200,"y1":20,"y2":50},{"x":1562647402200,"y1":28,"y2":55},{"x":1562649202200,"y1":38,"y2":69},{"x":1562651002200,"y1":100,"y2":105},{"x":1562652802200,"y1":54,"y2":105},{"x":1562654602200,"y1":58,"y2":43},{"x":1562656402200,"y1":106,"y2":82},{"x":1562658202200,"y1":36,"y2":22},{"x":1562660002200,"y1":82,"y2":104},{"x":1562661802200,"y1":62,"y2":29},{"x":1562663602200,"y1":69,"y2":87},{"x":1562665402200,"y1":70,"y2":10},{"x":1562667202200,"y1":60,"y2":69},{"x":1562669002200,"y1":28,"y2":30}]
            break;
        case 'C':
            return [{"x":1562634802200,"y1":20,"y2":208},{"x":1562636602200,"y1":28,"y2":68},{"x":1562638402200,"y1":104,"y2":44},{"x":1562640202200,"y1":51,"y2":34},{"x":1562642002200,"y1":108,"y2":55},{"x":1562643802200,"y1":19,"y2":22},{"x":1562645602200,"y1":20,"y2":50},{"x":1562647402200,"y1":28,"y2":55},{"x":1562649202200,"y1":38,"y2":69},{"x":1562651002200,"y1":100,"y2":105},{"x":1562652802200,"y1":54,"y2":105},{"x":1562654602200,"y1":58,"y2":43},{"x":1562656402200,"y1":106,"y2":82},{"x":1562658202200,"y1":36,"y2":22},{"x":1562660002200,"y1":82,"y2":104},{"x":1562661802200,"y1":62,"y2":29},{"x":1562663602200,"y1":69,"y2":87},{"x":1562665402200,"y1":70,"y2":10},{"x":1562667202200,"y1":60,"y2":69},{"x":1562669002200,"y1":28,"y2":30}]
            break;
        default:
            return [{"x":1562634802200,"y1":20,"y2":108},{"x":1562636602200,"y1":28,"y2":68},{"x":1562638402200,"y1":104,"y2":44},{"x":1562640202200,"y1":51,"y2":34},{"x":1562642002200,"y1":108,"y2":55},{"x":1562643802200,"y1":19,"y2":22},{"x":1562645602200,"y1":20,"y2":50},{"x":1562647402200,"y1":28,"y2":55},{"x":1562649202200,"y1":38,"y2":69},{"x":1562651002200,"y1":100,"y2":105},{"x":1562652802200,"y1":54,"y2":105},{"x":1562654602200,"y1":58,"y2":43},{"x":1562656402200,"y1":106,"y2":82},{"x":1562658202200,"y1":36,"y2":22},{"x":1562660002200,"y1":82,"y2":104},{"x":1562661802200,"y1":62,"y2":29},{"x":1562663602200,"y1":69,"y2":87},{"x":1562665402200,"y1":70,"y2":10},{"x":1562667202200,"y1":60,"y2":69},{"x":1562669002200,"y1":28,"y2":30}]
            break;
    }
}

const getTableData = tag => {
    switch (tag) {
        case 'A':
            return [{"index":1,"keyword":"搜索关键词-0","count":723,"range":87,"status":0},{"index":2,"keyword":"搜索关键词-1","count":176,"range":80,"status":0}]
            break;
        case 'B':
            return [{"index":1,"keyword":"搜索关键词-0","count":723,"range":87,"status":0},{"index":2,"keyword":"搜索关键词-1","count":176,"range":80,"status":0},{"index":3,"keyword":"搜索关键词-2","count":517,"range":7,"status":0}]
            break;
        case 'C':
            return [{"index":1,"keyword":"搜索关键词-0","count":723,"range":87,"status":0},{"index":2,"keyword":"搜索关键词-1","count":176,"range":80,"status":0},{"index":3,"keyword":"搜索关键词-2","count":517,"range":7,"status":0},{"index":4,"keyword":"搜索关键词-3","count":126,"range":35,"status":0}]
            break;
        default:
            return [{"index":1,"keyword":"搜索关键词-0","count":723,"range":87,"status":0},{"index":2,"keyword":"搜索关键词-1","count":176,"range":80,"status":0}]
            break;
    }
}

function getDiffGroup(num, min, max) {
    var res = [];
    for (var i = min; i <= max; i++) res.push(i);
    res.sort(function () { return 0.5 - Math.random(); });
    var rst = [];
    for (var i = 0; i < res.length; i += num) rst.push(res.slice(i, i + num));
    console.log('--->' + rst.json)
    return rst;
}

function getRandomNums(min , max , counts ){
    var nums = [] ;
    for (var i = 0; i < counts ; i++){
        nums.push(Math.floor(Math.random()*min))
    }
    return nums;
}



  //console.log('--->' + rst.join('\n'))

export default {
    'GET /api/fake_chart_data2': getFakeChartData2,
    //'GET /api/fake_Offline_data' : getOfflineData
    'POST /api/fake_Offline_data' : (req , res) => {
        console.log('mock data ### ')
        const { curr_tab_index } = req.body;
        //console.log('@@@ curr Tab body is @@@ -> ' + curr_tab_index)
        //const currOfflineChartData = getOfflineData(curr_tab_index)
        const resultData = getOfflineData(curr_tab_index)
        const tableResultData = getTableData(curr_tab_index)
        res.json({ resultData , tableResultData })
    },
    'POST /api/query_stepline_data' : (req , res) => {
        console.log('mock echarts data ### ')
        const { type_index } = req.body;
        console.log('@@@ curr Tab body is @@@ -> ' + type_index)

        res.send({ 
            status: 'ok', 
            code: 200, 
            x_data_1 : [
                "国际B", "国际C", "国内A", "国内B", "国内C", "国内D", 
                "国际B", "国际C", "国内A", "国内B", "国内C", "国内D",
                "国际B", "国际C", "国内A", "国内B", "国内C", "国内D",
                "国际B", "国际C", "国内A", "国内B", "国内C", "国内D",
                "国际B", "国际C", "国内A", "国内B", "国内C", "国内D",
                "国际B", "国际C", "国内A", "国内B", "国内C", "国内D",
                "国际B", "国际C", "国内A", "国内B", "国内C", "国内D",
                "国际B", "国际C", "国内A", "国内B", "国内C", "国内D",
                "国际B", "国际C", "国内A", "国内B", "国内C", "国内D",
                "国际B", "国际C", "国内A", "国内B", "国内C", "国内D"
                ],
                x_data_2 : ["¥0~100", "¥100~200", "¥200～300", "¥300～400", "¥400～500", "¥500～600", "¥600～700", "¥700～800", "¥800～900", "¥900～1000"],
                series_1 : getRandomNums(100,30,60),
                series_2 : getRandomNums(66,20,60),
            // x_data_1 : ["0~100", "100~200", "200~300", "300~400", "400~500", "0~100", "100~200", "200~300", "300~400", "400~500", "0~100", "100~200", "200~300", "300~400", "400~500", "0~100", "100~200", "200~300", "300~400", "400~500", "0~100", "100~200", "200~300", "300~400", "400~500", "0~100", "100~200", "200~300", "300~400", "400~500", "0~100", "100~200", "200~300", "300~400", "400~500"],
            // x_data_2 : ["国际A", "国际B", "国际C", "国内A", "国内B", "国内C", "国内D"],
            // series_1 : [108, 107, 82, 18, 17, 13, 44, 20, 19, 20, 19, 15, 46, 28, 82, 85, 48, 92, 96, 71, 35, 12, 6, 83, 83, 69, 57, 46, 43, 35, 20, 8, 106, 107, 100],
            // series_2 : [66, 23, 42, 12, 16, 10, 20, 16, 12, 18, 8, 8, 33, 28, 22, 25, 48, 42, 36, 41, 35, 12, 6, 3, 63, 69, 57, 46, 43, 35, 20, 8, 6, 17, 30] 
        });        
    } 
};
  
