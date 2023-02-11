import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';
import { ToastContainer } from 'react-toastify';
import UserDetails from './components/userDetails/UserDetails';

type Props = {}

export default function RouterComponent({ }: Props) {
  const appCtx = useSelector((state: any) => state.app)

    return (
        <>
            <Routes>
                <Route path="/" element={<UserDetails />} />
            </Routes>
            

        </>
    )
}