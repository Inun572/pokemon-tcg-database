import Image from 'next/image';
import useGetCard from '../hook/useGetCard';
import Layout from '../components/Layout';
import { useState } from 'react';

export default function Home() {
  var [nama, setNama] = useState('');
  const {data, error, isLoading} = useGetCard(nama);

  const changeHandler = (input) => {
    if (input.length >= 3) {
      console.log(input); 
      setNama(input);
    }
  }

  const showProses = () => {
    if (isLoading){
      return (
        <div>Loading...</div>
      )
    }  
    if (error){
      return (
          <div>{error.msg}</div>
      )
    }
  }

  return (
    <>
      <Layout title="Home | PokemonTCG Database">
        <h1 className='text-center text-3xl m-4 p-4'>Card Databases</h1>
        {/* Search Bar */}
        <div className='m-4 p-2 flex justify-center w-full gap-4'>
          <label id="filter" className='border border-slate-300 rounded py-1 px-3 shadow-md hover:border-indigo-500 hover:bg-blue-300'>Filter</label>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">&</svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block w-2/5 bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search cards..."
            value={nama}
            type="search"
            name="search"
            onChange={ e => setNama(e.target.value)}            
          />
          <button
            className='border border-slate-300 rounded py-1 px-3 shadow-md hover:border-indigo-500 hover:bg-blue-300'
            type='submit'>Search</button>
        </div>

        <div className='flex justify-center align-middle'>
          {showProses()}
          <div className='flex flex-wrap justify-center p-2 gap-2 max-w-5xl'>
            {data && data.map(card => (
              <Image src={card.images.large} key={card.id} alt={card.id} title={card.name+' '+card.id} width={245} height={342} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}