import React from 'react';
import {Menu, Icon, Button} from 'antd';
import { SiderWrapper } from './Layout.style';
const {SubMenu} = Menu;
import {Link} from "react-router-dom"

class Sider extends React.Component {
    render() {

        return (
            <SiderWrapper>
                <Menu
                    mode="inline"
                    theme="light"
                    multiple={false}

                    inlineCollapsed={this.props.collapse}
                >
                    <Menu.Item key="1">
                       <Link to="/">
                           <Icon type="home" theme="twoTone" />
                           <span>DashBoard</span>
                       </Link>
                    </Menu.Item>
                    <SubMenu title= {<span><Icon type="appstore" theme="filled"/> <span>BARS</span></span>}>

                        <Link to="/bars-show">  <Menu.Item key="bars-show">Show</Menu.Item></Link>
                        <Link to="group-mp-list"> <Menu.Item key="group-mp-list"> Group MP List</Menu.Item></Link>
                           <Menu.Item key="4">Summary</Menu.Item>
                           <Menu.Item key="5">Parts of device</Menu.Item>

                    </SubMenu>
                    <SubMenu title= {<span><Icon type="codepen-circle"/> <span>CGNAT</span></span>}>
                        <Link to="/cgnat">
                            <Menu.Item key="6">CGNAT Prefer</Menu.Item>
                            <Menu.Item key="7">Summary</Menu.Item>
                        </Link>

                    </SubMenu>
                    <SubMenu title= {<span><Icon type="global"/> <span>IPLC</span></span>}>
                        <Menu.Item key="8">Traffic statistics</Menu.Item>
                        <Menu.Item key="9">Traffic Chart</Menu.Item>
                    </SubMenu>
                    <SubMenu title= {<span><Icon type="dashboard" theme="filled"/> <span>DEVICES</span></span>}>
                        <Menu.Item key="10">Add new device</Menu.Item>
                        <Menu.Item key="11">Remove ports logs</Menu.Item>
                        <Menu.Item key="12">All devices</Menu.Item>
                        <Menu.Item key="13">Function List</Menu.Item>
                        <Menu.Item key="14">Areas and Rooms</Menu.Item>
                        <Menu.Item key="15">Warehouse</Menu.Item>

                    </SubMenu>
                    <SubMenu title= {<span><Icon type="bug" theme="filled"/> <span>Transit/Peering</span></span>}>
                        <Menu.Item key="16">IBR detail</Menu.Item>
                        <Menu.Item key="17">Grap flow history</Menu.Item>

                    </SubMenu>
                    <SubMenu title= {<span><Icon type="star" theme="filled"/> <span>Balancing IPLC</span></span>}>
                        <Menu.Item key="18">IpV6 to MPOP</Menu.Item>
                        <Menu.Item key="19">IPLC report</Menu.Item>
                        <Menu.Item key="20">Equal report</Menu.Item>
                        <Menu.Item key="21">IPLC - MP by GW's(ipv6)</Menu.Item>
                        <Menu.Item key="22">Equal- MP by GW's(ipv6)</Menu.Item>
                        <Menu.Item key="23">IPLC- MP by GW's(ipv4)</Menu.Item>
                        <Menu.Item key="24">Equal- MP by GW's(ipv4)</Menu.Item>
                    </SubMenu>
                    <SubMenu title= {<span><Icon type="setting"/> <span>TOOL CGNAT</span></span>}>
                        <Menu.Item key="25">Devices config</Menu.Item>
                        <Menu.Item key="26">Error</Menu.Item>
                        <Menu.Item key="27">Recommend action</Menu.Item>
                        <Menu.Item key="28">History</Menu.Item>
                        <Menu.Item key="29">Log Config</Menu.Item>
                        <Menu.Item key="30">Variables Config</Menu.Item>

                    </SubMenu>
                </Menu>
            </SiderWrapper>
        );
    }
}

export default Sider;