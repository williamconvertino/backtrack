import Head from 'next/head'
import Image from 'next/image'
import CenterWindow from '../components/windows/CenterWindow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LeftWindow from '../components/windows/LeftWindow'
import RightWindow from '../components/windows/RightWindow'

export default function Home() {
  return (
    <div>

      <Head>
        <title>BackTrack</title>
        <meta name="" content="" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />
      

      <main className='container'>
        <LeftWindow />
        <CenterWindow/>
        <RightWindow />
      </main>
    
    
    </div>
  )
}  
