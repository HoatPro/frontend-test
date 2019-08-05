import React from 'react';
import {message, Table} from "antd";
import axios from "axios";
class TableMP extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dataTable:[],
            nameSelected:[]

        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({nameSelected: nextProps.nameMp[0]})
    }
    async componentDidMount(){
        console.log(this.state);
        const options = {
            method: "GET",
            url: `https://netd.ast.fpt.net/netd-api/api/show-all-group-mp?groupMpName=`
        };
        const {
            status,
            data: {data}
        } = await axios(options);
        if(status){

            message.success("GET group MP topo successfully!")

            this.setState({
                dataSelect:data.listName
            })
        }else{
            message.error("GET data error!!!")
        }
    }
    render(){
        console.log(this.state);
        const columns = [
            {
                title: '#',
                dataIndex: 'index',
                key: 'index',
            },
            {
                title: 'Name',
                dataIndex:"Name",
                key: 'name',
            },
            {
                title: 'Warehouse',
                dataIndex:"warehouse",
                key: 'warehouse',
            },
            {
                title: 'Action',
                key: 'action',

            },
        ]

        return(
            <Table
                className="table-detail"
                columns={columns}
                dataSource={this.state.dataTable}
                bordered
            />
        )
    }
}
export default TableMP;