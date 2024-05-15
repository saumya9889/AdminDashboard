import './App.css';
import {Space} from "antd";
import AppFooter from './Components/AppFooter';
import Header from './Components/AppHeader';
import PageContent from './Components/PageContent';
import SideMenu from './Components/SideMenu';


function App() {
  return (
    <>
    <Header />
    <div className='sideMenuPagecontent'>
      <SideMenu></SideMenu>
      <PageContent></PageContent>
    </div>
    <AppFooter />
    
    </>
  );
}

export default App;
