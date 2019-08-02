import React from "react";
import { Table, Divider, Tag } from 'antd';
import axios from "axios";

class FunctionList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            dataTable:[]
        }
    }
    async componentDidMount(){
        const options = {
            method: "GET",
            url: "https://netd.ast.fpt.net/netd-api/api/net-device-functions"
        };
        const {
            status,
            data: {data}
        } = await axios(options);
        if(status){
            console.log(data);

            this.setState({
                dataTable:data
            })
        }
    }
    render() {
        const columns = [
            {
                title: '#',
                dataIndex: '',
                key: 'index',
            },
            {
                title: 'Name',
                dataIndex:'netDeviceFunctionName',
                key: 'name',

            },

            {
                title: 'Note',
                dataIndex:'note',
                key: 'note',

            },
            {
                title: 'Actions',
                key: 'choice',

            },
        ];

        return (

            <Table
                className="table-detail"
                columns={columns}
                dataSource={this.state.dataTable}
                bordered
                rowKey={record => record.netDeviceFunctionId}
            />
        )
    }
}

export default FunctionList;