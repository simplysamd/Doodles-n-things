import PropTypes from 'prop-types'
export default function Footer({footH}) {
  return <div className={`absolute left-0 bottom-0 w-full h-[${footH}] bg-amber-200`}>Footer</div>
}

Footer.propTypes = {
  footH: PropTypes.number,
}
