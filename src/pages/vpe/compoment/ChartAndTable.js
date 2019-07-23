import React, { memo } from 'react';
import { Row, Col, Table, Tooltip, Card, Icon } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import styles from '../ChartsTable.less';
import NumberInfo from '@/components/NumberInfo';
import { MiniArea } from '@/components/Charts';

const TopSearch = memo(({ loading, visitData2 }) => (
  
  <Card
    loading={loading}
    bordered={false}
    style={{ marginTop: 6 }}
  >
    <Row gutter={10}>
      <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
        <NumberInfo
          subTitle={
            <span>
              <FormattedMessage id="app.analysis.search-users" defaultMessage="search users" />
              <Tooltip
                title={<FormattedMessage id="app.analysis.introduce" defaultMessage="introduce" />}
              >
                <Icon style={{ marginLeft: 8 }} type="info-circle-o" />
              </Tooltip>
            </span>
          }
          gap={8}
          total={numeral(12321).format('0,0')}
          status="up"
          subTotal={17.1}
        />
        <MiniArea line height={45} data={visitData2} />
      </Col>
      <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
        <NumberInfo
          subTitle={
            <span>
              <FormattedMessage
                id="app.analysis.per-capita-search"
                defaultMessage="Per Capita Search"
              />
              <Tooltip
                title={<FormattedMessage id="app.analysis.introduce" defaultMessage="introduce" />}
              >
                <Icon style={{ marginLeft: 8 }} type="info-circle-o" />
              </Tooltip>
            </span>
          }
          total={2.7}
          status="down"
          subTotal={26.2}
          gap={8}
        />
        <MiniArea line height={45} data={visitData2} />
      </Col>
    </Row>
  </Card>
));

export default TopSearch;
