import React , { Component } from 'react';
import { connect } from 'dva'
import { Menu, Dropdown , Row, Col, Table, Tooltip, Card, Icon  } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

import { Steps, Button, message } from 'antd';
import styles from './StepsLine.less';


const Step = Steps.Step;

const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];

@connect(({ vpedata , loading }) => ({
  vpedata
}))
class StepsLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  handleMenuClick = e => {
    //message.info('Click on menu item, value is -->' + e.key);
    const seldata = e.key
    console.log('###### click is -->', seldata);

    const { dispatch } = this.props
    dispatch({
      type : 'vpedata/fetchStepsLineData',
      payload : {
        data : {'1':'1'}
      }
    })
  }

  componentDidMount(){
      console.log('did mount load data @@@')
      this.props.dispatch({
        type : 'vpedata/fetchStepsLineData',
        payload : 'Learn Redux'
      })
  }

    componentWillReceiveProps(nextProps) {
      //console.log('will receive ###->' + JSON.stringify(nextProps))
      var myChart = echarts.init(document.getElementById('main'));
      var myColor = ['#d9f7be','#b5f5ec','#91d5ff','#d6e4ff','#efdbff','#ffe58f','#ffd8bf','#ffe7ba','#ffccc7','#ffd6e7'];
      myChart.setOption({
        backgroundColor: '#fff',
        color: ['#77aff9'],
        grid: {
            top: '6%',
            left: '1%',  
            right: '1%',
            bottom : '6%',   
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            "top": 2,
            "left": "center",
            "textStyle": {
                "color": "#000"
            },
            // text: '价格带销量趋势'
        },
        legend: {
          data:['销售额','货值']
        },
        xAxis: [{
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
            data: nextProps.vpedata.x_data_1      
        }, {
            position: 'bottom',
            offset: 80,
            axisLine: {
                onZero: false,
                show: false
            },
            axisTick: {
                length: 80,
                inside: true,
                interval: 0,
                lineStyle: {
                    // color: '#3e89t7',
                    fontSize: '14px'
                }
            },
            axisLabel: {
                inside: true
            },
            data: nextProps.vpedata.x_data_2
        }],
        yAxis: [{
            type: 'value',
            //title: '9999'
        }],
        series: [
          {
                name:'销售额',
                type: 'bar',
                barWidth: '60%',
                //data: [108, 107, 82, 18, 17, 13, 44, 20, 19, 20, 19, 15, 46, 28, 22, 85, 48, 42, 96, 71, 35, 12, 6, 3, 83, 69, 57, 46, 43, 35, 20, 8, 6, 107, 100],
                data: nextProps.vpedata.series_1,
                itemStyle: {
                  normal: {
                      color: function(params) {
                          // if(params.dataIndex % 6 ==0)  {
                          //     var num = myColor.length;
                          //     return myColor[params.dataIndex %num] 
                          // }
                          if(params.dataIndex <=5){
                              return myColor[0] 
                          }
                          if(params.dataIndex >5 && params.dataIndex <=11){
                            return myColor[1] 
                          }
                          if(params.dataIndex >11 && params.dataIndex <=17 ){
                            return myColor[2] 
                          }
                          if(params.dataIndex >17 && params.dataIndex <=23 ){
                            return myColor[3] 
                          }
                          if(params.dataIndex >23 && params.dataIndex <=29 ){
                            return myColor[4] 
                          }
                          if(params.dataIndex >29 && params.dataIndex <=35 ){
                            return myColor[5] 
                          }
                          if(params.dataIndex >35 && params.dataIndex <=41 ){
                            return myColor[6] 
                          }
                          if(params.dataIndex >41 && params.dataIndex <=47 ){
                            return myColor[7] 
                          }
                          if(params.dataIndex >47 && params.dataIndex <=53 ){
                            return myColor[8] 
                          }
                          if(params.dataIndex >53 && params.dataIndex <=59 ){
                            return myColor[9] 
                          }
                      },
                  }
              },
            },
            {
                name:'货值',
                type: 'line',
                barWidth: '60%',
                symbol: 'circle',
    
                itemStyle: {
                    color: '#eb2f96'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            // color: "#3e89t7",
                            fontSize: 15
                        }
                    }
                },
                // data: [108, 107, 82, 18, 17, 13, 44, 20, 19, 20, 19, 15, 46, 28, 22, 85, 48, 42, 96, 71, 35, 12, 6, 3, 83, 69, 57, 46, 43, 35, 20, 8, 6, 107, 100],
                data: nextProps.vpedata.series_2
            }
        ]
      })

      window.onresize = function(){
        myChart.resize();
        //myChart1.resize();    //若有多个图表变动，可多写
      }
    }

    
  render() {
    const { current } = this.state;

    const menu = (
      <Menu onClick={this.handleMenuClick.bind(this)}>
        <Menu.Item key="MAN">男装</Menu.Item>
        <Menu.Item key="WOMEN">女装</Menu.Item>
        <Menu.Item key="BABY">母婴</Menu.Item>
      </Menu>
    );

    const dropdownGroup = (
      <Dropdown overlay={menu}>
        <Button style={{ marginLeft: 8 }}>
          一级分类 <Icon type="down" />
        </Button>
      </Dropdown>

      // <span className={styles.iconGroup}>
      //   <Dropdown overlay={menu} placement="bottomRight">
      //     <Icon type="ellipsis" />
      //   </Dropdown>
      // </span>
    );
    
    return (
      <Card
          title={
            <FormattedMessage
              id="app.vpe.sales.price.relationship"
              defaultMessage="价格带销量趋势分析"
            />
          }
          extra={dropdownGroup}
          bordered={false}
          className={styles.pieCard}
        >
        <div id="main" style={{width: '100%', height: 500}}></div>
      </Card>
      
      // <div>
      //   <Steps current={current}>
      //     {steps.map(item => <Step key={item.title} title={item.title} />)}
      //   </Steps>
      //   <div className={styles.stepsContent}>
      //     {steps[this.state.current].content}
      //   </div>
      //   <div className={styles.stepsAction}>
      //     {
      //       this.state.current < steps.length - 1
      //       &&
      //       <Button type="primary" onClick={() => this.next()}>Next</Button>
      //     }
      //     {
      //       this.state.current === steps.length - 1
      //       &&
      //       <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
      //     }
      //     {
      //       this.state.current > 0
      //       &&
      //       <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
      //         Previous
      //       </Button>
      //     }
      //   </div>
      // </div>
    );
  }
}

export default StepsLine;