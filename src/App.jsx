import {useRoute} from 'wouter'
import Home from './home'
import Doodles from './doodles'
import Things from './things'
import Header from './components/Header'
import './App.css'

const HEADER_HEIGHT = 100

function App() {
  const [isHome] = useRoute('/')
  const [isDoodles] = useRoute('/doodles/*?')
  const [isThings] = useRoute('/things/*?')

  return (
    <div className={'absolute left-0 top-0 w-full h-full bg-gray-900 text-slate-400 overflow-auto pb-4'}>
      <Header height={HEADER_HEIGHT} />
      {isHome && <Home headH={HEADER_HEIGHT} />}
      {isDoodles && <Doodles />}
      {isThings && <Things />}
      {/*<Route path={'/'}><Home headH={HEADER_HEIGHT} /></Route>*/}
      {/*<Route path={'/doodles'}><Doodles /></Route>*/}
      {/*<Route path={'/things'}><Things /></Route>*/}
    </div>
  )
}

export default App
