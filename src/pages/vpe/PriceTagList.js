import React , { Component, Fragment } from 'react'
import { connect } from 'dva';
import { Row, Col, Table, Tooltip, Card, Icon, Badge, Divider } from 'antd';
import StandardTable from '@/components/StandardTable';

import moment from 'moment';
import Link from 'umi/link';

import { FormattedMessage } from 'umi-plugin-react/locale';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import NumberInfo from '@/components/NumberInfo';
import PropTypes from 'prop-types'

import { routerRedux } from 'dva/router';

const statusMap = ['processing', 'success'];
const status = ['运行中', '已生成'];


@connect(({ pricetag, loading }) => ({
    pricetag,
    loading: loading.models.pricetag,
}))
class PriceTagList extends Component {
    
    constructor(){
        super()
        // this.state = {
        //     marginBottom : 0 ,
        //     pageSize : 5
        // }
    }

    columns = [
        {
          title: <FormattedMessage id="app.vpe.pricetaglist.tagname" defaultMessage="标签名称" />,
          dataIndex: 'tagname',
        },
        {
          title: (
            <FormattedMessage id="app.vpe.pricetaglist.tagtype" defaultMessage="标签状态" />
          ),
          dataIndex: 'status',
          key: 'status',
          render: text => <a href="/">{text}</a>,
          dataIndex: 'status',
          render(val) {
            return <Badge status={statusMap[val]} text={status[val]} />;
          },
        },
        {
            title: <FormattedMessage id="app.vpe.pricetaglist.lastjobtime" defaultMessage="上次调度时间" />,
            dataIndex: 'updatedAt',
            sorter: true,
            render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm')}</span>,
        },
        {
            title: '操作',
            render: (text, record) => (
              <Fragment>
                <a onClick={() => this.handleUpdateModalVisible(true, record)}>查看明细</a>
                <Divider type="vertical" />
                <a href="">导出</a>
              </Fragment>
            ),
        },
      ];

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
          type: 'pricetag/fetchPricTageData',
        });
    }

    handleUpdateModalVisible = (flag, record) => {
        this.props.dispatch(routerRedux.push({
            pathname: '/vpe/priceTagDetails',
            query: {'id': record.key}
        }));
    };
    
    render(){

        const { pricetag } = this.props;
        const { data } = pricetag;
        //console.log('@@@ pricetag data is -->' + JSON.stringify(data))

        return (
            <Card
                title={
                    <FormattedMessage
                    id="app.vpe.sales.price.pricetag"
                    defaultMessage="价格标签"
                    />
                }
                loading={this.props.loading}
                bordered={false}
                style={{ marginTop: 6 }}
            >
                <Table
                    rowKey={record => record.index}
                    size="small"
                    columns={this.columns}
                    dataSource={data.list || []}
                    pagination={data.pagination}
                    rowKey="key"
                />

                {/* <StandardTable
                    //selectedRows={selectedRows}
                    loading={this.props.loading}
                    data={data}
                    columns={this.columns}
                    //onSelectRow={this.handleSelectRows}
                    //onChange={this.handleStandardTableChange}
                /> */}
            </Card>
        )
    }
}

export default PriceTagList