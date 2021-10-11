import {Switch, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd'
import {Navbar, HomePage, Exchanges, CryptoDetails, CryptoCurrencies, News} from './components';
import './App.css'
import { BackTop } from 'antd';


function App() {
  return (
    <div className="app">
     <div className="navbar">
      <Navbar />
     </div>
     <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <CryptoCurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
     <div className="footer">
      <Typography.Title level={5} style={{color:'#fff', textAlign:'center'}}>
        Cryptoverse <br />
        All rights reserved
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
     </div>
     <BackTop />
     </div>
    </div>
  );
}

export default App;
