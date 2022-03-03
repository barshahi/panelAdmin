import { Layout , ConfigProvider } from 'antd'
import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import SliderMenu from './SliderMenu';




const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (

    <Layout >
      <Header>عنوان</Header>
      <Layout>
        <Sider>
          <SliderMenu/>
        </Sider>
        <Content >محتوا</Content>
      </Layout>
      <Footer>کپی رایت</Footer>
    </Layout>
  );
}

export default App;
