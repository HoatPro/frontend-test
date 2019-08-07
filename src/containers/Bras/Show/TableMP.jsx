import React from 'react';
import {message, Table} from "antd";
import axios from "axios";

class TableMP extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dataTable:[],
            dataName:[]

        }
    }
  componentWillReceiveProps(nextProps) {
        const nameMp=nextProps.nameMp[0];
      axios({
          method: "GET",
          url: `https://netd.ast.fpt.net/netd-api/api/get-detail-group-mp?groupMpName=${nameMp}`
      }).then(res=>{

         if(res.status){
             message.success('GET detail Group MP successfully!')
             this.setState({
                 dataTable:res.data
             })
         }
      })
  }
   render(){

        const columns = [
            {
                title: 'Name',
                key: 'name',
                render:record=>{
                   return record._source.name
                }
            },
            {
                title: 'Ip',
                key: 'ip',
                render: record => {
                    return record._source.ip
                }
            },
            {
                title: 'Check at',
                key: 'checkat',
                render: record => {
                    return record._source.time
                }

            },
            {
                title: 'Uplink',
                key: 'uplink',
                render: record => {
                    const uplinkNum=record._source.uplink/1024
                    return <div>{Math.round(uplinkNum * 100)/100 } Gbps</div>

                }
            },
            {
                title: 'Downlink',
                key: 'downlink',
                render: record => {
                    const downlinkNum=record._source.downlink/1024
                    return <div>{Math.round(downlinkNum * 100)/100 } Gbps</div>
                }

            },
            {
                title: 'Equal',
                key: 'equal',
                render: record => {
                    const equalNum=record._source.equal/1024
                    return <div>{Math.round(equalNum * 100)/100 } Gbps</div>
                }
            },
            {
                title: 'B2B',
                key: 'b2b',
                render: record => {
                    const bbNum=record._source.bb/1024
                    return <div>{Math.round(bbNum * 100)/100 } Gbps</div>
                }
            },
        ]

        return(
            <div>

                <Table

                    className="table-detail"
                    columns={columns}
                    dataSource={this.state.dataTable}
                    bordered
                />
            </div>
        )
    }
}
export default TableMP;