import React, { Component, Fragment } from 'react';
import { connect } from 'dva'
import { Menu, Dropdown, Row, Col, Table, Tooltip, Card, Icon, Steps, Button, message } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/dataZoom'

class DumpProductCategory extends Component {
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

    componentDidMount() {
        console.log('did mount load data @@@')
        // this.props.dispatch({
        //     type: 'pricetrends/fetchPriceTrendsData',
        //     payload: 'payload'
        // })
    }

    componentWillReceiveProps(nextProps) {
        var myChart = echarts.init(document.getElementById('main'));

        var data = [3237, 2164, 7561, 7778, 7355, 2405, 1842, 2090, 1762, 1593, 2060, 1537, 1908, 2107, 1692, 1568]
        var color = ['#fa8c16', '#13c2c2', '#2f54eb', '#1890ff', '#722ed1', '#faad14', '#eb2f96', '#52c41a', '#ffccc7', '#ffd6e7', '#d9f7be', '#b5f5ec', '#91d5ff', '#d6e4ff', '#efdbff', '#ffe58f', '#ffd8bf', '#ffe7ba', '#ffccc7', '#ffd6e7']

        myChart.setOption({
            backgroundColor: '#fff',
            // tooltip: {
            //     trigger: 'axis',
            //     axisPointer: {
            //         type: 'shadow'
            //     },
            //     formatter: function (objs, index) {
            //         let obj = objs[0];
            //         return `${obj.name}<br/>${obj.marker}${obj.seriesName} : ${obj.value}`;
            //     },
            // },
            grid: {
                top: '3%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: {
                type: 'value',
                splitLine: {
                    show: false,
                    lineStyle: {
                        // 去掉与y轴重叠的网格线----第一种颜色跟背景色一样
                        color: ['#fff', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd', '#ddd'],
                        type: 'dashed'
                    }
                },
                axisLine: {
                    show: false, //隐藏y轴坐标轴线
                    lineStyle: {
                        color: '#909396',

                    }
                },
                axisTick: {
                    show: false,
                }
            },
            yAxis: {
                type: 'category',
                boundaryGap: true,
                axisTick: { //y轴刻度线
                    show: false
                },
                axisLabel: {   //y轴文本旋转角度
                    rotate: 0
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#909396',

                    }
                },
                data: this.props.categorys,
            },
            series: [{
                name: 'Scoring Attributes',
                barMaxWidth: 20, //柱状宽度
                type: 'bar',
                data: this.props.data.map(function (item, i) {
                    return {
                        value: item,
                        itemStyle: {
                            color: color[i],
                        },
                        label: {
                            show: true,
                            position: 'right',
                            //formatter: '{b}\t{c}',
                            formatter: '{c}'
                        }
                    }
                })
            }]
        });
        window.onresize = function () {
            myChart.resize();
        }
    }


    render() {
        return (
            <Card
                title={
                    <FormattedMessage
                        id="app.vpe.sales.price.categorytype"
                        defaultMessage="商品三级品类分布"
                    />
                }
                bordered={false}
                // className={styles.pieCard}
            >
                <div id="main" style={{ width: '100%', height: 500 }}></div>
            </Card>
        );
    }
}

export default DumpProductCategory;