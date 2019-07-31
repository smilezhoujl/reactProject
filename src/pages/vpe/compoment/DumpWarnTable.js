import React, { Component } from 'react'
import { Row, Col, Table, Tooltip, Card, Icon } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import styles from '../ChartsTable.less';
import NumberInfo from '@/components/NumberInfo';
import PropTypes from 'prop-types'


const columns = [
    {
        title: <FormattedMessage id="app.vpe.kqwarn.sn" defaultMessage="#" />,
        dataIndex: 'sn',
        key: 'sn',
    },
    {
        title: (
            <FormattedMessage id="app.vpe.kqwarn.dept" defaultMessage="部类" />
        ),
        dataIndex: 'dept',
        key: 'dept',
        render: text => <a href="/">{text}</a>,
    },
    {
        title: <FormattedMessage id="app.vpe.kqwarn.lastweek_nums" defaultMessage="上周差价商品数" />,
        dataIndex: 'lastweek_nums',
        key: 'lastweek_nums',
        sorter: (a, b) => a.count - b.count,
        align: 'center',
    },
    {
        title: <FormattedMessage id="app.vpe.kqwarn.thisweek_nums" defaultMessage="本周差价商品数" />,
        dataIndex: 'thisweek_nums',
        key: 'thisweek_nums',
        sorter: (a, b) => a.count - b.count,
        align: 'center',
    },
    {
        title: <FormattedMessage id="app.vpe.kqwarn.buffer" defaultMessage="周同比" />,
        dataIndex: 'buffer',
        key: 'buffer',
        sorter: (a, b) => a.buffer - b.buffer,
        render: (text, record) => (
            <Trend flag={record.thisweek_nums - record.lastweek_nums < 0 ? 'down' : 'up'}>
                <span style={{ marginRight: 4 }}>{text}%</span>
            </Trend>
        ),
        align: 'right',
    },
];

class DumpWarnTable extends Component {

    static propTypes = {
        datasource: PropTypes.object,
        loading: PropTypes.bool,
        title : PropTypes.string,
    }

    constructor() {
        super()
        this.state = {
            marginBottom: 0,
            pageSize: 10
        }
    }

    render() {
        return (
            <Card
                title={
                    <FormattedMessage
                        id={this.props.title}
                        defaultMessage="口径：快抢价高于活动前60天到手价"
                    />
                }
                loading={this.props.loading}
                bordered={false}
                style={{ marginTop: 6 }}
            >
                <Table
                    rowKey={record => record.index}
                    size="small"
                    columns={columns}
                    dataSource={this.props.dataSource}
                    pagination={false}
                    // pagination={{
                    //     style: { marginBottom: this.state.marginBottom },
                    //     pageSize: this.state.pageSize,
                    // }}
                />
            </Card>
        )
    }
}

export default DumpWarnTable