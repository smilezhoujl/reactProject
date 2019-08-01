import React, { Component, Suspense } from 'react';
import { connect } from 'dva'
import GridContent from '@/components/PageHeaderWrapper/GridContent';
// custom define Dump Component ~ DumpFirstWarn.js
const DumpWarnTable = React.lazy(() => import('./compoment/DumpWarnTable.js'))

import { Menu, Dropdown, Row, Col, Table, Tooltip, Card, Steps, Icon } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import styles from './KqWarn.less';

const Step = Steps.Step;

@connect(({ kqwarn, loading }) => ({
    kqwarn
    // loading: loading.effects['pricetagdetails/fetchPriceTagDetails'],
}))
class KqWarn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            firsttitle: 'app.vpe.kqwarn.price.firstwarn',
            secondtitle: 'app.vpe.kqwarn.price.secondwarn',
        };
    }

    componentDidMount() {
        console.log('did mount load data @@@')
        this.props.dispatch({
            type: 'kqwarn/fetchKqWarnData',
            payload: 'payload'
        })
    }

    render() {
        const { data = {} } = this.props.kqwarn;

        const {
            firstDatasource = [],
            secondDatasource = [],
        } = data;

        return (
            <GridContent>
                <div className={styles.twoColLayout}>
                    <Row gutter={24} type="flex">
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <Suspense fallback={null}>
                                <Card
                                    loading={this.props.loading}
                                    bordered={false}
                                    style={{ marginTop: 6 }}
                                >
                                    <Steps current={1}>
                                        <Step title="Start" description="808价格管控服务开启(07/23)" />
                                        <Step title="In Progress（Daily update）" description="快抢差价管控预警" />
                                        <Step status="wait" title="覆盖活动提报、售卖阶段" description="全链路价格管控预警" icon={<Icon type="check-circle-o" />} />
                                    </Steps>
                                    
                                </Card>
                            </Suspense>
                        </Col>
                    </Row>
                </div>
                <div className={styles.twoColLayout}>
                    <Row gutter={6} type="flex">
                        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                            <Suspense fallback={null}>
                                <DumpWarnTable
                                    loading={this.state.loading}
                                    dataSource={firstDatasource || []}
                                    title={this.state.firsttitle}
                                />
                            </Suspense>
                        </Col>
                        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                            <Suspense fallback={null}>
                                <DumpWarnTable
                                    loading={this.state.loading}
                                    dataSource={secondDatasource || []}
                                    title={this.state.secondtitle}
                                />
                            </Suspense>
                        </Col>
                    </Row>
                </div>
            </GridContent>
        );
    }
}

export default KqWarn;