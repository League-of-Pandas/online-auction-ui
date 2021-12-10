import Head from 'next/head'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Main from '../component/Main'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Online Auction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@%5E1.0/dist/tailwind.min.css" rel="stylesheet"/>
      </Head>
      <Header />
      <Main />
      <Footer />
      
    </div>
  )
}
