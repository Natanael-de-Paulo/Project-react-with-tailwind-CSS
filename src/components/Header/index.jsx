import { useState } from 'react'
import { MenuItems } from '../MenuItems'
import { MdList } from 'react-icons/md'

export function Header() {
  const [active, setActive] = useState(false)
  const showMenu = () => {
    setActive(!active)
  }
  return (
    <>
      <header className="container max-w-5xl mx-auto px-4 h-24 flex items-center justify-between">
        <div className="text-black font-bold">Logo</div>

        <nav>
          <div className="md:hidden">
            <MdList height={24} width={24} onClick={showMenu} />
          </div>
          <ul className="hidden md:flex md:gap-3">
            {arrTextMenuItens.map(item => (
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <MenuItems showMenu={showMenu} active={active} />
        </nav>
      </header>
    </>
  )
}

export const arrTextMenuItens = [
  'Como reservar',
  'Sobre nós',
  'informações',
  'Contatos'
]
