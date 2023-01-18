import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import './index.scss';

const Layout = () => {
    return ( 
        <div className = "App">
            <Sidebar />

                <Outlet />

            </div> )}       

export default Layout;