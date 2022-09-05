import * as icon from 'react-icons/md'
export function Form() {
  return (
    <>
      <form
        action="#"
        className="text-center grid grid-cols-2 lg:grid-cols-3 gap-4 py-100"
      >
        <select
          className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500"
          name=""
          id=""
        >
          <option value="">Escolha seu estado</option>
        </select>

        <select
          className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500"
          name=""
          id=""
        >
          <option value="">Escolha a cidade</option>
        </select>

        <button
          type="submit"
          className="bg-yellow-400 px-3 py-2 border border-gray-300 rounded text-yellow-800 col-span-2 lg:col-span-1 inline-flex items-center justify-center gap-1"
        >
          <icon.MdSearch height={24} width={24} />
          Pesquisar resorts
        </button>
      </form>
    </>
  )
}
