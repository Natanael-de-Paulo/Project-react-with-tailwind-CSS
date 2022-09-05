import './App.css'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { FeatureResource, ResortsGrid } from './components/ResortsRecurses'
import { Footer } from './components/Footer'
import { useState } from 'react'

function App() {
  const stado = useState(
    <>
      <Header />
    </>
  )

  return (
    <>
      <Header />
      <main className="text-gray-600">
        <Banner />
        <FeatureResource />
        <ResortsGrid />
      </main>
      <Footer />
    </>
  )
}

export default App
