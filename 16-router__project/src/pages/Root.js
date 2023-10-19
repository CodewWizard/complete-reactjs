import React from 'react'
import { MainNavigation } from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';

 const Root = () => {
  return (
    <>
        <MainNavigation/>
        <main>
        </main>
    </>
  )
}

export default Root;