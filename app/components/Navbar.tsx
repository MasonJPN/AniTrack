'use client'
import React, { ComponentType } from 'react'
import { HomeIcon, Bars3Icon, StarIcon, ClockIcon, XCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type SidebarProps = {
  text: string
  Icon: ComponentType<{ className?: string }>
}

function SidebarLink({ text, Icon, isOpen }: SidebarProps & { isOpen: boolean }) {
  return (
    <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#1a1f2d] rounded-md text-gray-400 hover:text-white transition-colors">
      <Icon className="h-5 w-4" />
      {isOpen && <span className="text-xl">{text}</span>}
    </li>
  )
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <nav className={`bg-[#0f1623] border-r border-[#1e2d45] min-h-screen h-screen sticky top-0 transition-all duration-300 flex flex-col gap-6 ${isOpen ? 'w-76 p-6' : 'w-16 p-4'}`}>
      <div>
        <div className="flex gap-2 items-center px-2">
          <Image src="/cloud.png" alt="cloud logo" width={28} height={28} />
          {isOpen && (
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>
              AniTrack
            </h2>
          )}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="mt-6">
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {isOpen && (
          <input
            placeholder="Search anime..."
            className="w-full rounded-lg p-2 text-sm bg-[#1a1f2d] text-white placeholder-gray-500 border border-[#1e2d45] focus:outline-none focus:border-[#00e5ff]"
          />
        )}

        <div>
          {isOpen && (
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Tracking</p>
          )}

          <ul className="flex flex-col gap-1">
            <Link href="/dashboard">
              <SidebarLink text="Dashboard" Icon={HomeIcon} isOpen={isOpen} />
            </Link>

            <Link href="/mylist">
              <SidebarLink text="Watched List" Icon={Bars3Icon} isOpen={isOpen} />
            </Link>

            <Link href="/toprated">
              <SidebarLink text="Top Rated" Icon={StarIcon} isOpen={isOpen} />
            </Link>

            <Link href="/watchlater">
              <SidebarLink text="Watch Later" Icon={ClockIcon} isOpen={isOpen} />
            </Link>

            <SidebarLink text="Dropped" Icon={XCircleIcon} isOpen={isOpen} />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
