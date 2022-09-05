import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineFacebook } from 'react-icons/ai'
export function Footer() {
  return (
    <>
      <div className="border-t border-gray-200">
        <footer className=" container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-gray-400">Logo</div>
          <div className="flex items-center gap-4">
            <AiOutlineFacebook height={24} width={24} />
            <MdOutlineEmail height={24} width={24} />
            <BsWhatsapp height={24} width={24} />
          </div>
        </footer>
      </div>
    </>
  )
}
