import PropTypes from 'prop-types'

export default function Page ({children}) {
  return (
    <div className={'mx-auto p-4 max-w-[960px] border border-gray-800 overflow-auto'}>
      {children}
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.element
}
