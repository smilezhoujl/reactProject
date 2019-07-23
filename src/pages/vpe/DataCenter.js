import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import { Row, Col, Card, Tooltip } from 'antd';
import { Pie, WaterWave, Gauge, TagCloud } from '@/components/Charts';
import NumberInfo from '@/components/NumberInfo';
import CountDown from '@/components/CountDown';
import ActiveChart from '@/components/ActiveChart';
import numeral from 'numeral';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import Authorized from '@/utils/Authorized';
import styles from './DataCenter.less';

const { Secured } = Authorized;

const targetTime = new Date().getTime() + 3900000;

// use permission as a parameter
const havePermissionAsync = new Promise(resolve => {
  // Call resolve on behalf of passed
  setTimeout(() => resolve(), 300);
});

@Secured(havePermissionAsync)
@connect(({ monitor, loading }) => ({
  monitor,
  // loading: loading.models.monitor,
}))
class DataCenter extends Component {
  
  
  componentDidMount() {
    console.log('DataCenter did mount ...... ')
    const { dispatch } = this.props;
    dispatch({
      type: 'monitor/fetchTags',
    });
  }

  render() {
    const { monitor, loading } = this.props;
    const { tags } = monitor;
    return (
      <GridContent>
        <Row gutter={24}>
          <Col xl={12} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
                <FormattedMessage
                  id="app.monitor.proportion-per-category"
                  defaultMessage="Proportion Per Category"
                />
              }
              bordered={false}
              className={styles.pieCard}
            >
              <Row style={{ padding: '16px 0' }}>
                <Col span={8}>
                  <Pie
                    animate={false}
                    percent={28}
                    subTitle={
                      <FormattedMessage id="app.monitor.fast-food" defaultMessage="Fast food" />
                    }
                    total="28%"
                    height={128}
                    lineWidth={2}
                  />
                </Col>
                <Col span={8}>
                  <Pie
                    animate={false}
                    color="#5DDECF"
                    percent={22}
                    subTitle={
                      <FormattedMessage
                        id="app.monitor.western-food"
                        defaultMessage="Western food"
                      />
                    }
                    total="22%"
                    height={128}
                    lineWidth={2}
                  />
                </Col>
                <Col span={8}>
                  <Pie
                    animate={false}
                    color="#2FC25B"
                    percent={32}
                    subTitle={
                      <FormattedMessage id="app.monitor.hot-pot" defaultMessage="Hot pot" />
                    }
                    total="32%"
                    height={128}
                    lineWidth={2}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
                <FormattedMessage
                  id="app.monitor.popular-searches"
                  defaultMessage="Popular Searches"
                />
              }
              loading={loading}
              bordered={false}
              bodyStyle={{ overflow: 'hidden' }}
            >
              <TagCloud data={tags} height={161} />
            </Card>
          </Col>
          <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title={
                <FormattedMessage
                  id="app.monitor.resource-surplus"
                  defaultMessage="Resource Surplus"
                />
              }
              bodyStyle={{ textAlign: 'center', fontSize: 0 }}
              bordered={false}
            >
              <WaterWave
                height={161}
                title={
                  <FormattedMessage id="app.monitor.fund-surplus" defaultMessage="Fund Surplus" />
                }
                percent={34}
              />
            </Card>
          </Col>
        </Row>
        
      </GridContent>
    );
  }
}

export default DataCenter;
