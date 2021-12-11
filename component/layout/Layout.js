import React from 'react'
import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Online Auction</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://unpkg.com/tailwindcss@%5E1.0/dist/tailwind.min.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@%5E1.0/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <Header/>
      { children }
      <Footer/>
    </div>
  )
}
