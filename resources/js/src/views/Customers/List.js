import React, { useEffect, useState } from "react";
import { Table, Row, Col, Input, Button } from 'antd';
import axios from "axios";
import { Link } from "react-router-dom"


import { connect } from "react-redux"
import { setPageName } from './../../redux/actions/page';
import setAuthToken from './../../utils/setAuthToken';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        render: (name, record) => <Link to={`/customers/${record.id}/edit`} >{name}</Link>,
        width: '40%',
        defaultSortOrder: 'ascend',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        sorter: true,
    },
];

const defaultParams = {
    sortField: 'name',
    sortOrder: 'ascend',
    results: 15
};

const List = ({ loading: appLoading, setPageName, history }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        pageSize: 15,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
    });

    const [params, setParams] = useState({});


    useEffect(() => {
        setPageName("customers.list");

        if (!appLoading) {
            fetch();
        }

    }, [appLoading])

    const handleAddNewCustomerClick = () => {
        history.push('/customers/create');
    }

    const handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...pagination };
        pager.current = pagination.current;
        setPagination(pager);
        setParams()
        fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    };

    const handleSearchInput = async (searchQuery) => {
        await fetch({
            searchQuery
        });
    }

    const fetch = async (dParams = defaultParams) => {

        setLoading(true);
        setAuthToken(localStorage.getItem('token'));

        try {

            const response = await axios.get('/api/customers', { params: { ...params, ...dParams } });
            const { data, meta } = response.data;
            setLoading(false);
            setData(data);
            setPagination((state) => ({
                ...state,
                total: meta.total
            }))

            setParams(state => ({
                ...state,
                ...dParams
            }));

        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    };




    return (
        <>
            <Row type="flex">
                <Col span={12}>
                    <h1 className="text-3xl">Customers List</h1>
                </Col>
                <Col span={12}>
                    <Row type="flex" align="middle" justify="end">
                        <Col span={16}>
                            <Input.Search
                                allowClear
                                placeholder="Search by name, email"
                                onSearch={handleSearchInput}
                                style={{ lineHeight: 4 }}
                            />
                        </Col>
                        <Col span={6}>
                            <div className="flex justify-end">
                                <Button type="primary" icon="plus" onClick={handleAddNewCustomerClick}>ADD CUSTOMER</Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Table
                columns={columns}
                rowKey={record => {
                    //console.log(record);
                    return record.id;
                }}
                dataSource={data}
                pagination={pagination}
                loading={loading}
                onChange={handleTableChange}
            />
        </>
    )
}

const mapStateToProps = (state) => ({
    loading: state.loading
});

export default connect(null, {
    setPageName
})(List);
