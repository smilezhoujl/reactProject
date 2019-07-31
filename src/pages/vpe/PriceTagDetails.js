import React, { Component, Fragment, Suspense } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';

import { Row, Col, Card, Badge, Table, Divider, Button, Icon, Steps } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { FormattedMessage } from 'umi-plugin-react/locale';
import DumpProductCategory from './compoment/DumpProductCategory';
// custom define Dump Component ~ DumpOffLineData.js
const DumpOfflineData = React.lazy(() => import('./compoment/DumpOfflineData.js'))


import styles from './PriceTagDetails.less';

const { Step } = Steps;
const { Description } = DescriptionList;

const operationTabList = [
  {
    key: 'tab1',
    tab: '商品三级品类',
  },
  {
    key: 'tab2',
    tab: '操作日志二',
  },
  {
    key: 'tab3',
    tab: '操作日志三',
  },
];



@connect(({ pricetagdetails, loading }) => ({
  pricetagdetails
  // loading: loading.effects['pricetagdetails/fetchPriceTagDetails'],
}))
class PriceTagDetails extends Component {
  constructor() {
    super()
    this.state = {
      operationkey: 'tab1',
      stepDirection: 'horizontal',
    };
  }

  componentDidMount() {
    const { dispatch, match, location } = this.props;
    const { query } = location;
    //console.log('@@@curr priceTag query.id is -->' + query.id)
    dispatch({
      type: 'pricetagdetails/fetchPriceTagDetails',
      payload: query.id || '1000000000',
    });
  }

  onOperationTabChange = key => {
    this.setState({ operationkey: key });
  };

  extraOperation = (
    <Fragment>
      <Button type="primary" onClick={this.backToListPage.bind(this)}><Icon type="left" />Go back</Button>
    </Fragment>
  );

  backToListPage() {
    this.props.dispatch(routerRedux.push({
      pathname: '/vpe/PriceTagList'
    }));
  }

  handleTabChange = key => {
    // this.setState({
    //   currentTabKey: key,
    // });
    //console.log('@@@ dispatch load offline data ...... = ' + key)
    const { dispatch } = this.props
    dispatch({
      type: 'pricetagdetails/fetchOfflinePriceTagData',
      payload: {
        data: key
      }
    })
  };

  render() {
    const { pricetagdetails } = this.props;
    
    const {
      userInfo = {},
      loading = false,
      stepdatas = [],
      catagorydatas = [],
      categorynames = [],
      currentTabKey = "A",
      offlineData = [],
      offlineChartData = [],
      searchData = [],
    } = pricetagdetails;

    const activeKey = currentTabKey || (offlineData[0] && offlineData[0].tag);
    const titlename = userInfo.name + '活动节奏';
    const titletag = userInfo.name + ' 价格标签明细';
    //console.log('@@@offlineData -->' + JSON.stringify(offlineData))

    return (
      <PageHeaderWrapper
        title={titletag}
        extra={this.extraOperation}
      >
        <Card title={titlename} style={{ marginTop: 12, marginBottom: 12 }} bordered={false}>
          <Steps current={2}>
            {
              stepdatas.map(stepdata => (
                <Step title={stepdata.title} description={stepdata.description} key={stepdata.title} />
              ))
            }
          </Steps>
        </Card>
        <DumpProductCategory data={catagorydatas} categorys={categorynames} />
        
        <GridContent>
        <div className={styles.twoColLayout}>
          <Row gutter={24} type="flex">
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <Suspense fallback={null}>
                <DumpOfflineData
                  activeKey={activeKey}
                  loading={loading}
                  offlineData={offlineData || []}
                  offlineChartData={offlineChartData || []}
                  handleTabChange={this.handleTabChange}
                />
              </Suspense>
            </Col>
          </Row>
        </div>
      </GridContent>

      </PageHeaderWrapper>
    );
  }
}

export default PriceTagDetails;
