import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import './index.scss';

const Layout = (props) => {
    return ( 
        <div className = "App">
            <Sidebar />
                {props.children}
                <Outlet />

            </div> )}       

export default Layout;