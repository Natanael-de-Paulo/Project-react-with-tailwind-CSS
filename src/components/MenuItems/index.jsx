import { arrTextMenuItens } from '../Header'
import { MdClose } from 'react-icons/md'
export function MenuItems({ showMenu, active }) {
  return (
    <>
      <ul
        className={
          active
            ? 'flex flex-col items-center fixed inset-0 uppercase bg-gray-50 z-10 justify-center gap-6 md:hidden'
            : 'hidden'
        }
      >
        <MdClose width={24} height={24} onClick={showMenu} />

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
    </>
  )
}
