import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import en_US from 'antd/lib/locale-provider/en_US';
import { LocaleProvider } from 'antd';
import routes from './routes';
import Layout from '../Layout/Layout';
import DashBoard from '../DashBoard/DashBoard';
import Bras from '../Bras/Bras';
import Cgnat from '../Cgnat/Cgnat';
import Iplc from '../Iplc/Iplc';
import Devices from '../Devices/Devices';
import TransitPeering from '../TransitPeering/TransitPeering';
import BlancingIplc from '../BlancingIplc/BlancingIplc';
import ToolCgnat from "../ToolCgnat/ToolCgnat";

function App() {
  return (
    <LocaleProvider locale={en_US}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path={routes.dashboard} component={DashBoard} />
            <Route  path={routes.bras} component={Bras} />
            <Route  path={routes.cgnat} component={Cgnat} />
            <Route  path={routes.iplc} component={Iplc} />
            <Route  path={routes.devices} component={Devices} />
            <Route  path={routes.transit_peering} component={TransitPeering} />
            <Route  path={routes. balancing_iplc} component={BlancingIplc} />
            <Route  path={routes.tool_cgnat} component={ToolCgnat} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </LocaleProvider>
  );
}

export default App;
