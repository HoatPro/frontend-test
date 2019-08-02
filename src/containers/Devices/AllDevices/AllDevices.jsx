import React from "react";
import { Table, message, Tag } from 'antd';
import axios from "axios";

class AllDevice extends React.Component {
    constructor(props){
        super(props);
        this.state={
            dataTable:[]
        }
    }
    async componentDidMount(){
        const options = {
            method: "GET",
            url: "https://netd.ast.fpt.net/netd-api/api/net-devices"
        };
        const {
            status,
            data: {data}
        } = await axios(options);
     if(status){
         message.success("GET NET devices successfull!");
         console.log(data);

         data.forEach(row => {
                 if (!Array.isArray(row.ports)) {
                     return;
                 }

                 const normalPortCnt = row.ports.reduce((sum, port) => (sum + (port.description ? 1 : 0)), 0); //port has description
                 let standardPortCnt = 0; // port has L1#,L2#,... and bypass ##
                 let portToAddCnt = 0; // port had L1#,L2#,...
                 let monitoredPortCnt = 0; // port has existInOps

                 for (const port of row.ports) {
                     if (port.description && (port.description.startsWith('L1#') || port.description.startsWith('L2#') || port.description.startsWith('L2.5#') || port.description.startsWith('L3#'))) {
                         portToAddCnt++;
                         standardPortCnt++;
                         if (port.existInOps) {
                             monitoredPortCnt++;
                         }
                     } else if (port.description && port.description.startsWith('##')) {
                         standardPortCnt++;
                     }
                 }

                 const standardPortPercent = (normalPortCnt == 0 ? 100 : Math.round(standardPortCnt / normalPortCnt * 100 * 100) / 100);
                 const monitoredPortPercent = (portToAddCnt == 0 ? 100 : Math.round(monitoredPortCnt / portToAddCnt * 100 * 100) / 100);

                 row.normalPortCnt = normalPortCnt;
                 row.standardPortCnt = standardPortCnt;
                 row.monitoredPortCnt = monitoredPortCnt;
                 row.portToAddCnt = portToAddCnt;
                 row.standardPortPercent = standardPortPercent;
                 row.monitoredPortPercent = monitoredPortPercent;
                  console.log(monitoredPortPercent);
             }
         );


         let dataGetIndex=data.map((dt,index)=>{
            return{
                index:index,
                dt
            }
         })
         this.setState({
             dataTable:dataGetIndex
         })

     }
    }
    render() {
        const columns = [
            {
                title: 'Index',
                dataIndex: 'index',
                key: 'index',
            },
            {
                title: 'Checking Time',
                key: 'check',
                render:record=>{
                   return record.dt.time_check
                }
            },
            {
                title: 'Name',
                key: 'name',
                render:record=>{
                    return record.dt.name
                }
            },
            {
                title: 'Ip',
                key: 'ip',
                render:record=>{
                    return record.dt.ip
                }
            },
            {
                title: 'Function',
                key: 'function',
                render:record=>{
                    return record.dt.function
                }
            },
            {
                title: 'Description',
                key: 'description',
                render:record=>{
                    return record.dt.description
                }
            },
            {
                title: 'Type',
                key: 'manufacturer',
                render:record=>{
                    return record.dt.manufacturer
                }
            },
            {
                title: 'Area',
                key: 'area',
                render:record=>{
                    return record.dt.area
                }
            },
            {
                title: 'Room',
                key: 'room',
                render:record=>{
                    return record.dt.room
                }
            },
            {
                title: 'Rack',
                key: 'rack',
                render:record=>{
                    return record.dt.rack
                }
            },
            {
                title: 'Standard Stat',
                dataIndex: 'standar-stat',
                key: 'standar-stat',

            },
            {
                title: 'Monitored Stat',
                dataIndex: 'monitored-stat',
                key: 'monitored-stat',

            },
            {
                title: 'Action',
                key: 'choice',

            },
        ];

        return (

            <Table
                className="table-detail"
                columns={columns}
                dataSource={this.state.dataTable}
                bordered
                // pagination={this.state.pagination}
                // loading={this.state.loading}
                // onChange={this.handleTableChange}
                rowKey={record => record.index}
            />
        )
    }
}

export default AllDevice;