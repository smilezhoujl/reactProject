import React, { Component, Fragment } from 'react'
import { connect } from 'dva';
import {
    Form,
    Input,
    Select,
    Icon,
    Button,
    Dropdown, Row, Col, Table, Tooltip, Card, Badge, Divider
} from 'antd';
import StandardTable from '@/components/StandardTable';

import moment from 'moment';
import Link from 'umi/link';

import { FormattedMessage } from 'umi-plugin-react/locale';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import NumberInfo from '@/components/NumberInfo';
import PropTypes from 'prop-types'

import { routerRedux } from 'dva/router';

import styles from './PriceTagList.less';

const FormItem = Form.Item;
const { Option } = Select;

const statusMap = ['processing', 'success'];
const status = ['运行中', '已完成'];


@connect(({ pricetag, loading }) => ({
    pricetag,
    //loading: loading.models.pricetag,
}))
@Form.create()
class PriceTagList extends Component {

    constructor() {
        super()
        this.state = {
            expandForm: false,
        }
        this.formLayout = {
            labelCol: { span: 7 },
            wrapperCol: { span: 13 },
        };
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
            query: { 'id': record.key }
        }));
    };

    handleSearch = e => {
        e.preventDefault();

        const { dispatch, form } = this.props;
        form.validateFields((err, fieldsValue) => {
            if (err) return;

            const values = {
                ...fieldsValue,    
            };

            this.setState({
                formValues: values,
            });

            dispatch({
                type: 'pricetag/fetchPriceList',
                payload: values,
            });
            
        });
    };

    handleFormReset = () => {
        const { form, dispatch } = this.props;
        form.resetFields();
        this.setState({
            formValues: {},
        });
        dispatch({
            type: 'pricetag/fetchPriceList',
            payload: {},
        });
    };

    toggleForm = () => {
        console.log('toggleForm')
        // const { expandForm } = this.state;
        // this.setState({
        //     expandForm: !expandForm,
        // });
    };

    renderSimpleForm() {
        const {
            form: { getFieldDecorator },
        } = this.props;
        return (
            <Form onSubmit={this.handleSearch} layout="inline">
                <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                    <Col md={8} sm={24}>
                        <FormItem label="标签名称">
                            {getFieldDecorator('name')(<Input placeholder="请输入标签名称" />)}
                        </FormItem>
                    </Col>
                    <Col md={8} sm={24}>
                        <FormItem label="标签状态">
                            {getFieldDecorator('status')(
                                <Select placeholder="请选择" style={{ width: '160px' }}>
                                    <Option value="0">运行中</Option>
                                    <Option value="1">已完成</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                    <Col md={8} sm={24}>
                        <span className={styles.submitButtons}>
                            <Button type="primary" htmlType="submit">
                                查询
                  </Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                                重置
                  </Button>
                            <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                                展开 <Icon type="down" />
                            </a>
                        </span>
                    </Col>
                </Row>
            </Form>
        );
    }

    renderForm() {
        const { expandForm } = this.state;
        return expandForm ? this.renderSimpleForm() : this.renderSimpleForm();
    }

    render() {

        const { pricetag } = this.props;
        const { data } = pricetag;
        
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
                <div className={styles.tableList}>
                    <div className={styles.tableListForm}>{this.renderForm()}</div>
                </div>
                <Card style={{ marginTop: 12, marginBottom: 12 }} bordered={false}>
                    <Table
                        rowKey={record => record.index}
                        size="small"
                        columns={this.columns}
                        dataSource={data.list || []}
                        pagination={data.pagination}
                        rowKey="key"
                    />
                </Card>
            </Card>

        )
    }
}

export default PriceTagList