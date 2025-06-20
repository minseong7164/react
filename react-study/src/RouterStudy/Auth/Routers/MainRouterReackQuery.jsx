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
import { useQuery } from '@tanstack/react-query';

// $ npm install @tanstack/react-query
/**
 * 전역 상태 관리
 * 1. 클라이언트 전역 상태(Zustad, recoil ->  react19에서 지원 x)
 * 2. 서버 전역 상태(ReactQuery)
 */
function MainRouterReackQuery(props) {

    const principalUserQuery = useQuery({
        queryKey: ["principalUserQuery"],
        queryFn: async () => {
            const accessToken = localStorage.getItem("AccessToken");
            return await axios.get("http://localhost:8080/api/users/principal", {
                headers: {
                    Authorization: !accessToken ? null : `Bearer ${accessToken}`,
                },
            })
        },
        // refetchOnWindowFocus: false,
        staleTime: 1000 * 60,
        retry: 0
    });

    console.log(principalUserQuery.isLoading);
    console.log(principalUserQuery.data);

    return (
        <>
            {
                !principalUserQuery.isLoading &&
                <RootLayout>
                    <RootHeader />
                    <Routes>
                        <Route path='' element={<Home />} />
                        <Route path='/auth/*' element={<AuthRouter />} />
                        <Route path='/users/*' element={<UnAuthRouter />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </RootLayout>
            }
        </>
    );
}

export default MainRouterReackQuery;