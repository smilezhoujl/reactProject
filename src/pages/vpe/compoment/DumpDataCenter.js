import React, { memo } from 'react';
import { connect } from 'dva';
import { Row, Col, Table, Tooltip, Card, Icon } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Pie, WaterWave, Gauge, TagCloud } from '@/components/Charts';
import NumberInfo from '@/components/NumberInfo';
import CountDown from '@/components/CountDown';
import ActiveChart from '@/components/ActiveChart';
import numeral from 'numeral';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import Authorized from '@/utils/Authorized';
import styles from './DumpDataCenter.less';


const DumpDataCenter = memo(({ loading, tags }) => (
  
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
            <Col span={4}>
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
            <Col span={4}>
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
            <Col span={4}>
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
            <Col span={4}>
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
            <Col span={4}>
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
            <Col span={4}>
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
          <Row style={{ padding: '16px 0' }}>
            <Col span={24}>
                {/* <TagCloud data={tags} height={161} /> */}
            </Col>
          </Row>
          
        </Card>
      // <Card
      //     title={
      //       <FormattedMessage
      //         id="app.monitor.popular-searches"
      //         defaultMessage="Popular Searches"
      //       />
      //     }
      //     loading={loading}
      //     bordered={false}
      //     bodyStyle={{ overflow: 'hidden' }}
      //   >
      //     {/* <TagCloud data={tags} height={161} /> */}
      //   </Card>
      // <Card
      //     title={
      //       <FormattedMessage
      //         id="app.monitor.resource-surplus"
      //         defaultMessage="Resource Surplus"
      //       />
      //     }
      //     bodyStyle={{ textAlign: 'center', fontSize: 0 }}
      //     bordered={false}
      //   >
      //     <WaterWave
      //       height={161}
      //       title={
      //         <FormattedMessage id="app.monitor.fund-surplus" defaultMessage="Fund Surplus" />
      //       }
      //       percent={34}
      //     />
      //   </Card>
      
));

export default DumpDataCenter;
