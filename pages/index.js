import { Rocket } from 'lucide-react'
import Head from 'next/head'
import LinearGradient from "../components/linear-background"

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js and tailwindcss boilerplate!</title>
      </Head>
      <LinearGradient option={1} width="100vw" height="100vh">
        <div className='text-center text-white space-y-8 font-sans'>
          <div className='inline-flex justify-center'>
            <Rocket width={160} height={160} />
          </div>
          <h1 className='text-9xl font-bold'>Starter.</h1>
          <h2 className='text-6xl '>Next.js + Tailwindcss</h2>
          <p className='text-lg'>Build your next Amazing product!</p>
        </div>
      </LinearGradient>
    </>
  )
}
