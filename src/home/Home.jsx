import {Link} from 'wouter'
import PropTypes from 'prop-types'

export default function Home({headH}) {
  return (
    <div style={{height: `calc(100% - ${headH}px`}} className={`mx-auto w-3/4 grid grid-cols-2 gap-4`}>
      <BigChoice text={'Doodles'} />
      <BigChoice text={'Things'} />
    </div>
  )
}

Home.propTypes = {
  headH: PropTypes.number,
}

function BigChoice({text}) {
  return (
    <Link
      className={
        'w-full flex justify-center cursor-pointer items-center h-3/4 bg-gray-800 m-auto rounded-md border border-transparent hover:border-slate-500'
      }
      href={`/${text.toLowerCase()}`}
    >
      {text}
    </Link>
  )
}

BigChoice.propTypes = {
  text: PropTypes.string,
}
