import React, { memo } from 'react';
import { Card, Tabs, Row, Col } from 'antd';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import styles from './DumpOfflineData.less';
import { TimelineChart, Pie } from '@/components/Charts';
import NumberInfo from '@/components/NumberInfo';

const CustomTab = ({ data, currentTabKey: currentKey }) => (
  <Row gutter={8} style={{ width: 138, margin: '8px 0' }}>
    <Col span={12}>
      <NumberInfo
        title={data.name}
        subTitle={
          <FormattedMessage id="app.analysis.conversion-rate" defaultMessage="Conversion Rate" />
        }
        gap={2}
        total={`${data.cvr * 100}%`}
        theme={currentKey !== data.tag && 'light'}
      />
    </Col>
    <Col span={12} style={{ paddingTop: 36 }}>
      <Pie
        animate={false}
        color={currentKey !== data.tag && '#BDE4FF'}
        inner={0.55}
        tooltip={false}
        margin={[0, 0, 0, 0]}
        percent={data.cvr * 100}
        height={64}
      />
    </Col>
  </Row>
);

const { TabPane } = Tabs;

const DumpOfflineData = memo(
  ({ activeKey, loading, offlineData, offlineChartData, handleTabChange }) => (

    <Card
      loading={loading}
      style={{ marginTop: 12, marginBottom: 12 }}
      bordered={false}
      title={
        <FormattedMessage id="app.vpe.fast-buy-search" defaultMessage="Online Top Search" />
      }
    >
      <Tabs activeKey={activeKey} onChange={handleTabChange}>
        {offlineData.map(shop => (
          <TabPane tab={<CustomTab data={shop} currentTabKey={activeKey} />} key={shop.tag}>
            <div style={{ padding: '0 24px' }}>
              <TimelineChart
                height={400}
                data={offlineChartData}
                titleMap={{
                  y1: formatMessage({ id: 'app.analysis.traffic' }),
                  y2: formatMessage({ id: 'app.analysis.payments' }),
                }}
              />
            </div>
          </TabPane>
        ))}
      </Tabs>
    </Card>
  )
);
export default DumpOfflineData;
