import React , { Component } from 'react';
import { connect } from 'dva'
import { Menu, Dropdown , Row, Col, Table, Tooltip, Card, Icon  } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/dataZoom'

import { Steps, Button, message } from 'antd';
import styles from './StepsLine.less';

@connect(({ pricetrends , loading }) => ({
    pricetrends
}))
class PriceTrends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  handleMenuClick = e => {
    //message.info('Click on menu item, value is -->' + e.key);
    // const seldata = e.key
    // console.log('###### click is -->', seldata);

    // const { dispatch } = this.props
    // dispatch({
    //   type : 'vpedata/fetchStepsLineData',
    //   payload : {
    //     data : {'1':'1'}
    //   }
    // })
  }

  componentDidMount(){
      //console.log('did mount load data @@@')
      this.props.dispatch({
        type : 'pricetrends/fetchPriceTrendsData',
        payload : 'payload'
      })
  }

    componentWillReceiveProps(nextProps) {
      var myChart = echarts.init(document.getElementById('main'));
      var myColor = ['#d9f7be','#b5f5ec','#91d5ff','#d6e4ff','#efdbff','#ffe58f','#ffd8bf','#ffe7ba','#ffccc7','#ffd6e7'];
      var category = ['0701','0702','0703','0704','0705','0706','0707','0708','0709','0710','0711','0712','0713','0714','0715','0716','0717',
      '0718','0719','0720','0721','0722','0723','0724','0725','0726','0727','0728','0729','0730','0731','0801','0802','0803','0804','0805','0806','0808','0808','0809','0810','0811','0812','0813','0814','0815','0816','0817',
      '0818','0819','0820','0821','0822','0823','0824','0825','0826','0827','0828','0829','0830','0831','0901','0902','0903','0904','0905','0906','0909','0909','0909','0910','0911','0912','0913','0914','0915','0916','0917',
      '0918','0919','0920','0921','0922','0923','0924','0925','0926','0927','0928','0929','0930','0931'];

      myChart.setOption({
        title: {
            //text: '',
            x: 'center',
            y: 0,
            // textStyle:{
            //     color:'#B4B4B4',
            //     fontSize:16,
            //     fontWeight:'normal',
            // },
            
        },
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true,
                    backgroundColor: '#7B7DDC'
                }
            },
            formatter: function (params, ticket, callback) {
                console.log(params);
                var showHtm="";
                for(var i=0;i<params.length;i++){
                    //x轴名称
                    var name = params[i].seriesName;
                    //值
                    var value = params[i].value;
                    showHtm+= '<br>' + name + ' : ' + value+'<br>'
                }
                return showHtm;
            }
        },
        legend: {
            data: ['商品销量','商品到手价(¥)','品牌等级三级分类到手价(¥)'],
            // textStyle: {
            //     color: '#B4B4B4'
            // },
            bottom:'bottom',
        },
        grid:{
            x:'5%',
            width:'90%',
            y:'2%',
        },
        xAxis: {
            type: 'category',
            axisTick: {
                alignWithLabel: false
            },
            "axisLabel": {
                "interval": 0,
                "rotate": -90,
                "show": true,
                "splitNumber": 15,
                "textStyle": {
                    "fontFamily": "微软雅黑",
                    "fontSize": 12
                }
            },
            data: category,
        },
        dataZoom : {
            show : true,
            realtime : true,
            //orient: 'vertical',   // 'horizontal'
            //x: 0,
            y: 10,
            //width: 400,
            height: 20,
            //backgroundColor: 'rgba(221,160,221,0.5)',
            //dataBackgroundColor: 'rgba(138,43,226,0.5)',
            //fillerColor: 'rgba(38,143,26,0.6)',
            //handleColor: 'rgba(128,43,16,0.8)',
            //xAxisIndex:[],
            //yAxisIndex:[],
            start : 0,
            end : 31
        },
        yAxis: [{
            splitLine: {show: false},
            // axisLine: {
            //     lineStyle: {
            //         color: '#B4B4B4',
            //     }
            // },
            
            axisLabel:{
                formatter:'{value}',
            }
        },
            {
            splitLine: {show: false},
            // axisLine: {
            //     lineStyle: {
            //         color: '#B4B4B4',
            //     }
            // },
            axisLabel:{
                formatter:'{value}'
            }
        }],
        
        series: [{
            name: '商品到手价(¥)',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
                    normal: {
                    color:'#F02FC2'
                },
            },
            data: nextProps.pricetrends.productPrices
        },
        {
            name: '品牌等级三级分类到手价(¥)',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
                    normal: {
                    color:'#F02FC2'
                        
                    },
            },
            data: nextProps.pricetrends.threeAvgPrices
        },
        
        {
            name: '商品销量',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#956FD4'},
                            {offset: 1, color: '#3EACE5'}
                        ]
                    )
                }
            },
            data: nextProps.pricetrends.salesDatas
        }, 
       ]
      });
      window.onresize = function(){
        myChart.resize();
        //myChart1.resize();    //若有多个图表变动，可多写
      }
    }

    
  render() {
    return (
      <Card
          title={
            <FormattedMessage
              id="app.vpe.sales.price.relationship"
              defaultMessage="价格带销量趋势分析"
            />
          }
          bordered={false}
          className={styles.pieCard}
        >
        <div id="main" style={{width: '100%', height: 500}}></div>
      </Card>
    );
  }
}

export default PriceTrends;