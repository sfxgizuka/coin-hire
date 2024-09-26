import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';


export default function MenuDropdown() {

    const links = [
        { href: '/', label: '채용' },
        { href: '/', label: '해외 개발자 원격 채용' },
        { href: '/', label: '외국인 원격 채용 (비개발 직군)' },
        { href: '/', label: '한국어 가능 외국인 채용' },
      ]

  return (
    <Menu>
      <MenuButton className=" flex items-center gap-1">채용 <IoIosArrowDown/> </MenuButton>
      <MenuItems anchor="bottom" className={`pt-6 pl-4`}>
        {links.map((link) => (
          <MenuItem key={link.href} as="div" className="block p-2 text-white hover:text-[#FFE76B]">
            <a href={link.href}>{link.label}</a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}
