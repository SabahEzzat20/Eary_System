import { Outlet } from 'react-router-dom';
import {Header} from './shared/Header';
import './sass/App.scss';

export const App = () => {
    return (
        <>
        <Header />
        <Outlet />
        </>
    );
    }
