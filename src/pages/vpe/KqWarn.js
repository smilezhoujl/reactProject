import React, { Component, Suspense } from 'react';
import { connect } from 'dva'
import GridContent from '@/components/PageHeaderWrapper/GridContent';
// custom define Dump Component ~ DumpFirstWarn.js
const DumpWarnTable = React.lazy(() => import('./compoment/DumpWarnTable.js'))

import { Menu, Dropdown, Row, Col, Table, Tooltip, Card, Icon } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Steps, Button, message } from 'antd';
import styles from './KqWarn.less';

@connect(({ kqwarn, loading }) => ({
    kqwarn
    // loading: loading.effects['pricetagdetails/fetchPriceTagDetails'],
}))
class KqWarn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false , 
            firsttitle : 'app.vpe.kqwarn.price.firstwarn',
            secondtitle : 'app.vpe.kqwarn.price.secondwarn',
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

        console.log('@@@-->', JSON.stringify(this.props.kqwarn))

        return (
            <GridContent>
                <div className={styles.twoColLayout}>
                    <Row gutter={24} type="flex">
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