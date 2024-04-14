import {Link, useLocation} from 'wouter'

export default function Header({height}) {
  const [, setLocation] = useLocation()

  return (
    <header className={`m-4 h-[${height}px]`}>
      <div onClick={() => setLocation('/')} className={'text-3xl cursor-pointer'}>
        <span>Doodles</span>
        <span>'n'</span>
        <span>Things</span>
      </div>
      <div className={'text-xs'}>
        by{' '}
        <a className={'hover:text-red-400'} href={'https://www.github.com/simplysamd'}>
          @simplysamd
        </a>
      </div>
    </header>
  )
}
