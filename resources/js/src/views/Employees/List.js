import React, { useEffect, useState } from "react";
import { Table, Row, Col, Input, Button } from 'antd';
import axios from "axios";
import { Link } from "react-router-dom"


import { connect } from "react-redux"
import { setPageName } from './../../redux/actions/page';
import setAuthToken from './../../utils/setAuthToken';

const columns = [
    {
        title: 'Full name',
        dataIndex: 'full_name',
        sorter: true,
        render: (full_name, record) => {

            console.log(record);
            return <Link to={`/employees/${record.id}/edit`} >{full_name}</Link>;
        },
        width: '40%',
        defaultSortOrder: 'ascend',
    },
    {
        title: 'Date hired',
        dataIndex: 'date_hired',
        sorter: true,
    },
    {
        title: 'Customer',
        dataIndex: 'customer',
        render: (customer, record) => {
            return <span>{customer.name}</span>
        },
        sorter: true,
    },
];

const defaultParams = {
    sortField: 'first_name',
    sortOrder: 'ascend',
    results: 15
};

const List = ({ loading: appLoading, setPageName }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({
        pageSize: 15,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
    });

    const [params, setParams] = useState({});


    useEffect(() => {
        setPageName("employees.list");

        if (!appLoading) {
            fetch();
        }

    }, [appLoading])

    const handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...pagination };

        console.log("Pager:", pager);

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

            const response = await axios.get('/api/employees', { params: { ...params, ...dParams } });
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
                    <h1 className="text-3xl">Employees List</h1>
                </Col>
                <Row type="flex" align="middle" justify="end">
                    <Col span={16}>
                        <Input.Search
                            allowClear
                            placeholder="Search by name, customer"
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
