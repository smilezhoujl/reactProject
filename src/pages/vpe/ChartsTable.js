import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Menu, Dropdown } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import { getTimeDistance } from '@/utils/utils';
import styles from './ChartsTable.less';
import PageLoading from '@/components/PageLoading';

const ChartAndTable = React.lazy(() => import('./compoment/ChartAndTable'));
// custom define Dump Component ~ VpeTable.js
const VpeTable = React.lazy(() => import('./compoment/VpeTable.js'))
// custom define Dump Component ~ DumpDataCenter.js
const DumpDataCenter = React.lazy(() => import('./compoment/DumpDataCenter.js'))
// custom define Dump Component ~ DumpOffLineData.js
const DumpOfflineData = React.lazy(() => import('./compoment/DumpOfflineData.js'))

@connect(({ vpedata, loading }) => ({
  vpedata
  // loading: loading.effects['vpedata/fetch'],
}))
class ChartsTable extends Component {
  
  constructor(){
    super()
    this.state = {
      salesType: 'all',
      rangePickerValue: getTimeDistance('year'),
      currentTabKey: 'A',
      loading : false
    };
  } 

  componentWillMount(){
    // console.log('ChartsTable.js will mount ......')
    const { dispatch } = this.props;
    // load data init state 
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'vpedata/fetch',
      });
    });
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.reqRef);
  }

  handleTabChange = key => {
    this.setState({
      currentTabKey: key,
    });
    console.log('@@@ dispatch load offline data ...... = ' + key)
    const { dispatch } = this.props
    dispatch({
      type : 'vpedata/fetchOfflineData',
      payload : {
        data : key
      }
    })
  };

  render() {
    const { rangePickerValue, salesType, currentTabKey , loading } = this.state;
    const { vpedata } = this.props;
    const {
      visitData,
      visitData2,
      salesData,
      searchData,
      vpeTags ,
      offlineData,
      offlineChartData
    } = vpedata;

    console.log('currentTabKey-->'+currentTabKey)
    // console.log('offlineData value is -> '+ offlineData)
    // const currofflineData = offlineData ? offlineData : []
    // const currofflineChartData = offlineChartData ? offlineChartData : []
    console.log('render -> offlineChartData-> '+offlineChartData)
    // console.log('vpeTags->'+vpeTags)
    // const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name);
    // console.log('activeKey->'+activeKey)
    const activeKey = currentTabKey || (offlineData[0] && offlineData[0].tag) ;

    console.log('curr activeKey->'+activeKey)

    const menu = (
      <Menu>
        <Menu.Item>操作一</Menu.Item>
        <Menu.Item>操作二</Menu.Item>
      </Menu>
    );

    const dropdownGroup = (
      <span className={styles.iconGroup}>
        <Dropdown overlay={menu} placement="bottomRight">
          <Icon type="ellipsis" />
        </Dropdown>
      </span>
    );
    return (
      <GridContent>
        <div className={styles.twoColLayout}>
          <Row gutter={24} type="flex">
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <Suspense fallback={null}>
                {/* <DumpDataCenter 
                    loading={loading}
                    tags={vpeTags}
                /> */}
                <DumpOfflineData
                  activeKey={activeKey}
                  loading={loading}
                  offlineData={offlineData || []}
                  offlineChartData={offlineChartData || []}
                  handleTabChange={this.handleTabChange}
                />
                <VpeTable
                  loading={loading}
                  dataSource={searchData}
                />
                {/* <ChartAndTable
                  loading={loading}
                  visitData2={visitData2}
                /> */}
              </Suspense>
            </Col>
          </Row>
        </div>
      </GridContent>
    );
  }
}

export default ChartsTable;
