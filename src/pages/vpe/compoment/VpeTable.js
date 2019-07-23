import React , { Component } from 'react'
import { Row, Col, Table, Tooltip, Card, Icon } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import styles from '../ChartsTable.less';
import NumberInfo from '@/components/NumberInfo';
import PropTypes from 'prop-types'


const columns = [
    {
      title: <FormattedMessage id="app.analysis.table.rank" defaultMessage="Rank" />,
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: (
        <FormattedMessage id="app.analysis.table.search-keyword" defaultMessage="Search keyword" />
      ),
      dataIndex: 'keyword',
      key: 'keyword',
      render: text => <a href="/">{text}</a>,
    },
    {
      title: <FormattedMessage id="app.analysis.table.users" defaultMessage="Users" />,
      dataIndex: 'count',
      key: 'count',
      sorter: (a, b) => a.count - b.count,
      className: styles.alignRight,
    },
    {
      title: <FormattedMessage id="app.analysis.table.weekly-range" defaultMessage="Weekly Range" />,
      dataIndex: 'range',
      key: 'range',
      sorter: (a, b) => a.range - b.range,
      render: (text, record) => (
        <Trend flag={record.status === 1 ? 'down' : 'up'}>
          <span style={{ marginRight: 4 }}>{text}%</span>
        </Trend>
      ),
      align: 'right',
    },
  ];

class VpeTable extends Component {
    
    static propTypes = {
        datasource : PropTypes.object,
        loading : PropTypes.bool

    }

    constructor(){
        super()
        this.state = {
            marginBottom : 0 ,
            pageSize : 5
        }
    }
    
    render(){
        return (
            <Card
                loading={this.props.loading}
                bordered={false}
                style={{ marginTop: 6 }}
            >
                <Table
                    rowKey={record => record.index}
                    size="small"
                    columns={columns}
                    dataSource={this.props.dataSource}
                    pagination={{
                        style: { marginBottom: this.state.marginBottom },
                        pageSize: this.state.pageSize,
                    }}
                />
            </Card>
        )
    }
}

export default VpeTable