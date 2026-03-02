import React, { ComponentType } from 'react'
import { HomeIcon, Bars3Icon, StarIcon, ClockIcon, XCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'




type SidebarProps = {
  text: string
  Icon: ComponentType<{ className?: string }>
}

function SidebarLink({ text, Icon }: SidebarProps) {
  return (
    <li className="flex items-center  gap-2 p-2 cursor-pointer hover:bg-[#1a1f2d] rounded-md text-gray-400 hover:text-white transition-colors">
      <Icon className="h-5 w-4" />
      <span className="text-xl">{text}</span>
    </li>
  )
}

const Sidebar = () => {
  return (
    <nav className="p-6 bg-[#0f1623] border-r border-[#1e2d45] min-h-screen w-76 flex flex-col gap-6 sticky top-0 h-screen">

      <div className="flex gap-2 items-center">
        <Image src="/cloud.png" alt="cloud logo" width={28} height={28} />
        <h2 className="text-3xl font-bold text-white"style={{ fontFamily: 'Trebuchet MS, sans-serif' }}>AniTrack</h2>
      </div>

      <input
        placeholder="Search anime..."
        className="w-full rounded-lg p-2 text-sm bg-[#1a1f2d] text-white placeholder-gray-500 border border-[#1e2d45] focus:outline-none focus:border-[#00e5ff]"
      />

      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Tracking</p>
        <ul className="flex flex-col gap-1">
          <Link href="/dashboard">
          <SidebarLink text="Dashboard" Icon={HomeIcon} />
          </Link>  


          <SidebarLink text="My List" Icon={Bars3Icon} />

          <Link href="/toprated">
          <SidebarLink text="Top Rated" Icon={StarIcon} />
          </Link>


          <SidebarLink text="Plan to Watch" Icon={ClockIcon} />
          <SidebarLink text="Dropped" Icon={XCircleIcon} />
        </ul>
      </div>

    </nav>
  )
}

export default Sidebar