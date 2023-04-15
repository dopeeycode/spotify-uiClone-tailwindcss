/* eslint-disable jsx-a11y/alt-text */
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Home as HomeIcon, Library, Search, Plus, Heart } from 'lucide-react'

import eazyePlaylist from '../assets/eazy-e-playlist.jpeg'
import neffexPlaylist from '../assets/neffex-playlist.svg'
import illeniumPlaylist from '../assets/illenium-playlist.jpeg'
import Image from 'next/image'


export default function Home() {

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full cursor-pointer transition duration-300 hover:scale-125 hover:opacity-75'/>
            <div className='w-3 h-3 bg-yellow-500 rounded-full cursor-pointer transition duration-300 hover:scale-125 hover:opacity-75'/>
            <div className='w-3 h-3 bg-green-500 rounded-full cursor-pointer transition duration-300 hover:scale-125 hover:opacity-75'/>
            <div />
          </div>
          <nav className="space-y-4 mt-10">
            <a href="#" className='flex gap-2 items-center text-sm font-semibold text-zinc-400  hover:text-white transition duration-300 ease-in-out'>
              <HomeIcon size={25}/>
              Home
            </a>
            <a href="#" className='flex gap-2 items-center text-sm font-semibold text-zinc-400  hover:text-white transition duration-300 ease-in-out'>
              <Search size={25}/>
              Buscar
            </a>
            <a href="#" className='flex gap-2 items-center text-sm font-semibold text-zinc-400 hover:text-white transition duration-300 ease-in-out'>
              <Library size={25}/>
              Sua Biblioteca
            </a>
          </nav>
          <div className='flex flex-col gap-4 pt-8'>
            <div className='flex gap-2 cursor-pointer'>
              <div className='flex items-center justify-center w-6 h-6 rounded-md bg-zinc-400 hover:bg-white transition duration-300 ease-in-out'>
                <Plus size={20} className='flex item-center text-zinc-700'/>
              </div>
              <span className='text-base font-semibold text-zinc-400 hover:text-white transition duration-300 ease-in-out'>Criar playlist</span>
            </div>
            <div className='flex gap-2 cursor-pointer'>
              <div className='flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-r from-rose-400 to-red-500 hover:bg-white transition duration-300 ease-in-out'>
                <Heart size={18} className='flex item-center fill-zinc-100 text-zinc-100'/>
              </div>
              <span className='text-base font-semibold text-zinc-400 hover:text-white transition duration-300 ease-in-out'>Músicas Curtidas</span>
            </div>
          </div>
          <nav className='mt-4 pt-5 border-t border-zinc-700 flex flex-col gap-2'>
            <a href="#" className='text-sm font-semibold text-zinc-400 hover:text-white transition duration-200'>Locked In</a>
            <a href="#" className='text-sm font-semibold text-zinc-400 hover:text-white transition duration-200'>Sla carai</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='bg-zinc-950 rounded-full p-1.5'>
              <ChevronLeft/>
            </button>
            <button className='bg-zinc-950 rounded-full p-1.5'>
              <ChevronRight/>
            </button>
          </div>
          <h1 className='font-bold text-3xl mt-6'>Bom dia</h1>
          <div className='flex flex-wrap gap-6 mt-6'>
            <div className='flex items-center gap-4 rounded-md overflow-hidden bg-gradient-to-bl from-zinc-700 via-zinc-700 to-zinc-950 w-72 shadow-sm'>
              <Image className='w-24'
                src={eazyePlaylist}
                alt='Ilustração da sua playlist'
              />
              <span className='font-semibold'>Eazy-e mix</span>
            </div>
            <div className='flex items-center gap-4 rounded-md overflow-hidden bg-gradient-to-bl from-zinc-700 via-zinc-700 to-zinc-950 w-72'>
              <Image className='w-24'
                src={neffexPlaylist}
                alt='Ilustração da sua playlist'
              />
              <span className='font-semibold'>Neffex Playlist</span>
            </div>
            <div className='flex items-center gap-4 rounded-md overflow-hidden w-72 bg-gradient-to-bl from-zinc-700 via-zinc-700 to-zinc-950'>
              <Image className='w-24'
                src={illeniumPlaylist}
                alt='Ilustração da sua playlist'
              />
              <span className='font-semibold'>Neffex Playlist</span>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}
