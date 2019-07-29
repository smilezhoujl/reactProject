import { parse } from 'url';

import mockjs from 'mockjs';

const { Random } = mockjs;

let tableListDataSource = [];

tableListDataSource.push(
  {
    key: '419',
    tagname: '419白金促',
    status: 0,
    updatedAt: new Date()
  }
)

tableListDataSource.push(
  {
    key: '616',
    tagname: '616白金促',
    status: 0,
    updatedAt: new Date()
  }
)
tableListDataSource.push(
  {
    key: '1111',
    tagname: '双11白金促',
    status: 0,
    updatedAt: new Date()
  })
tableListDataSource.push(
  {
    key: '128',
    tagname: '128周年庆白金促',
    status: 1,
    updatedAt: new Date()
  })

function getRule(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const params = parse(url, true).query;

  let dataSource = tableListDataSource;

  if (params.sorter) {
    const s = params.sorter.split('_');
    dataSource = dataSource.sort((prev, next) => {
      if (s[1] === 'descend') {
        return next[s[0]] - prev[s[0]];
      }
      return prev[s[0]] - next[s[0]];
    });
  }

  if (params.status) {
    const status = params.status.split(',');
    let filterDataSource = [];
    status.forEach(s => {
      filterDataSource = filterDataSource.concat(
        dataSource.filter(data => parseInt(data.status, 10) === parseInt(s[0], 10))
      );
    });
    dataSource = filterDataSource;
  }

  if (params.name) {
    dataSource = dataSource.filter(data => data.name.indexOf(params.name) > -1);
  }

  let pageSize = 10;
  if (params.pageSize) {
    pageSize = params.pageSize * 1;
  }

  const result = {
    list: dataSource,
    pagination: {
      total: dataSource.length,
      pageSize,
      current: parseInt(params.currentPage, 10) || 1,
    },
  };

  return res.json(result);
}

function caculateStepdatas(id) {
  const stepdatas = []
  switch (id) {
    case '419':
      stepdatas.push({ title: '预热阶段（24H）', description: '4/18 早10～4/19 早10', status: 'finish' });
      stepdatas.push({ title: '开售阶段（72H）', description: '4/19 早10～4/22 早10', status: 'finish' });
      stepdatas.push({ title: 'Done', description: '', status: 'finish' });
      return stepdatas
      break;
    case '616':
      stepdatas.push({ title: '预热阶段（24H）', description: '6/14 晚8～6/15 晚8', status: 'finish' });
      stepdatas.push({ title: '开售阶段（76H）', description: '6/15 晚8～6/18 晚0', status: 'finish' });
      stepdatas.push({ title: 'Done', description: '', status: 'finish' });
      return stepdatas
      break;
    case '1111':
      stepdatas.push({ title: '预热阶段（24H）', description: '11/9 晚8～11/10 晚8', status: 'finish' });
      stepdatas.push({ title: '开售阶段（62H）', description: '11/10 晚8～11/13 早10', status: 'finish' });
      stepdatas.push({ title: 'Done', description: '', status: 'finish' });
      return stepdatas
      break;
    default:
      stepdatas.push({ title: '预热阶段（24H）', description: '12/6 晚8～12/7 晚8', status: 'finish' });
      stepdatas.push({ title: '开售阶段（134H）', description: '12/7 晚8～12/11 晚8', status: 'finish' });
      stepdatas.push({ title: 'Done', description: '', status: 'finish' });
      return stepdatas
      break;
  }
}

function randomData(min, max, counts) {
  var nums = [];
  for (var i = 0; i < counts; i++) {
    nums.push(Math.floor(Math.random() * min) * 10)
  }
  return nums;
}

const offlineData =
  [{
    "name": "男装",
    "cvr": 0.4,
    "tag": "A"
  }, {
    "name": "女装",
    "cvr": 0.2,
    "tag": "B"
  }, {
    "name": "母婴",
    "cvr": 0.2,
    "tag": "C"
  }, {
    "name": "鞋包",
    "cvr": 0.8,
    "tag": "D"
  }, {
    "name": "内衣",
    "cvr": 0.3,
    "tag": "E"
  }, {
    "name": "体用",
    "cvr": 0.1,
    "tag": "F"
  }, {
    "name": "美妆",
    "cvr": 0.3,
    "tag": "G"
  }, {
    "name": "精品",
    "cvr": 0.4,
    "tag": "H"
  }, {
    "name": "居家",
    "cvr": 0.8,
    "tag": "I"
  }, {
    "name": "MP",
    "cvr": 0.3,
    "tag": "J"
  }]

const offlineChartData = [{ "x": 1562634802200, "y1": 20, "y2": 108 }, { "x": 1562636602200, "y1": 28, "y2": 68 }, { "x": 1562638402200, "y1": 104, "y2": 44 }, { "x": 1562640202200, "y1": 51, "y2": 34 }, { "x": 1562642002200, "y1": 108, "y2": 55 }, { "x": 1562643802200, "y1": 19, "y2": 22 }, { "x": 1562645602200, "y1": 20, "y2": 50 }, { "x": 1562647402200, "y1": 28, "y2": 55 }, { "x": 1562649202200, "y1": 38, "y2": 69 }, { "x": 1562651002200, "y1": 100, "y2": 105 }, { "x": 1562652802200, "y1": 54, "y2": 105 }, { "x": 1562654602200, "y1": 58, "y2": 43 }, { "x": 1562656402200, "y1": 106, "y2": 82 }, { "x": 1562658202200, "y1": 36, "y2": 22 }, { "x": 1562660002200, "y1": 82, "y2": 104 }, { "x": 1562661802200, "y1": 62, "y2": 29 }, { "x": 1562663602200, "y1": 69, "y2": 87 }, { "x": 1562665402200, "y1": 70, "y2": 10 }, { "x": 1562667202200, "y1": 60, "y2": 69 }, { "x": 1562669002200, "y1": 28, "y2": 30 }]

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

export default {
  'GET /api/query_priceTag_data': getRule,
  'POST /api/query_pricetagdetails_data': (req, res) => {

    const { id } = req.body;
    const userInfo = {
      name: id || "",
      tel: '18100000000',
      delivery: '菜鸟物流',
      addr: '浙江省杭州市西湖区万塘路18号',
      remark: '备注',
    };
    res.send({
      status: 'ok',
      code: 200,
      userInfo: userInfo,
      stepdatas: caculateStepdatas(id),
      catagorydatas: randomData(1000, 9999, 8),
      categorynames: ["男装", "女装", "内衣", "精品", "美妆", "居家", "鞋包", "体用"],
      offlineData: offlineData,
      offlineChartData: offlineChartData,
    });
  },
  'POST /api/fake_Offline_pricetag_data': (req, res) => {
    const { curr_tab_index } = req.body;
    console.log('mock data ### ')
    
    const resultData = getOfflineData(curr_tab_index)
    const tableResultData = getTableData(curr_tab_index)
    res.json({ resultData, tableResultData })
  },
};
