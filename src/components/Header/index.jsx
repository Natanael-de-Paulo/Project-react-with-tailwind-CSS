export function Header() {
  const arrTextMenuItens = [
    'Como reservar',
    'Sobre nós',
    'informações',
    'Contatos'
  ]

  return (
    <>
      <header className="container max-w-5xl mx-auto px-4 h-24 flex items-center justify-between">
        <div className="text-black font-bold">Logo</div>
        <nav>
          <ul className="flex gap-3">
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
        </nav>
      </header>
    </>
  )
}
