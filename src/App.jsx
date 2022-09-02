import './App.css'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { FeatureResource } from './components/ResortsRecurses'

function App() {
  return (
    <>
      <Header />
      <main className="text-gray-600">
        <Banner />
        <FeatureResource />
      </main>
    </>
  )
}

export default App
