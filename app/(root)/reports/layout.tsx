import React from 'react'
import Sidebar from "../../../components/shared/Sidebar"
import Header from "../../../components/shared/Header"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='p-8'>
      <h2 className='font-bold text-[16px]'>Overview</h2>
      {children}
    </section>
  )
}

export default Layout