import React from 'react';
import { Space, Table, Tag } from 'antd';

import "./styles.css";



const columns = [
    {
        title: 'Timestamp',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'AlertId',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Alertdescription',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'AlertStatus',
        key: 'tags',
        dataIndex: 'tags',
        // render: (_, { tags }) => (
        //     <>
        //         {tags.map((tag) => {
        //             let color = tag.length > 5 ? 'geekblue' : 'green';
        //             if (tag === 'loser') {
        //                 color = 'volcano';
        //             }
        //             return (
        //                 <Tag color={color} key={tag}>
        //                     {tag.toUpperCase()}
        //                 </Tag>
        //             );
        //         })}
        //     </>
        // ),
    },
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
];

const data = [
    {
        key: '1',
        name: '1/12/2023 4:40:25 AM',
        age: 321091,
        address: 'Motor Performance',
        tags: 'Work in Progress',
    },
    {
        key: '2',
        name: '1/12/2023 4:40:25 AM',
        age: 321091,
        address: 'Motor Performance',
        tags: 'Overdue',
    },
    {
        key: '3',
        name: '1/12/2023 4:40:25 AM',
        age: 321091,
        address: 'Motor Performance',
        tags: 'Overdue',
    },
];


const AssetTable = () => {
    return <Table columns={columns} dataSource={data} pagination={false} />;
}




export default AssetTable;

