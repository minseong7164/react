import React, { use, useEffect, useState } from 'react';
import RootLayout from '../RootLayout/RootLayout';
import Home from '../Home/Home';
import { Route, Routes } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import UnAuthRouter from './UnAuthRouter';
import NotFound from '../NotFound/NotFound';
import RootHeader from '../RootHeader/RootHeader';
import axios from 'axios';
import { useGlobalStateStore, useRefreshStore } from '../stores/storeStudy';

/**
 * 전역 상태 관리
 * 1. 클라이언트 전역 상태(Zustad, recoil ->  react19에서 지원 x)
 * 2. 서버 전역 상태(ReactQuery)
 */
function MainRouter(props) {
    const [ isLogin, setLogin ] = useState(false);
    const { value:refresh, setValue:setRefresh } = useRefreshStore();
    const { name, setName, setName2 } =  useGlobalStateStore();
    // const [ refresh, setRefresh ] = useState(true);

    useEffect(() => {
        if(refresh) {
            const accessToken = localStorage.getItem("AccessToken");
            if (!!accessToken){
                axios.get("http://localhost:8080/api/users/login/status", {
                    headers: {
                        Authorization: !accessToken ? null : `Bearer ${accessToken}`
                    }
                })
                .then(response => {
                    if (response.data.login === true) {
                        setLogin(true);
                    }
                });            
            }
            console.log(isLogin)
            setRefresh(prev => false);
        }
    }, [refresh]);

    
    return (
        <RootLayout>
            <RootHeader isLogin={isLogin} setLogin={setLogin} />
            <Routes>
                <Route path='' element={<Home />}/>
                <Route path='/auth/*' element={<AuthRouter />} />
                <Route path='/users/*' element={<UnAuthRouter />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </RootLayout>
    );
}

export default MainRouter;