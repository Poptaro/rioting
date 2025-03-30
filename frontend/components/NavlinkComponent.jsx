import { Link } from 'react-router-dom'

export default function NavlinkComponent({ children, path }) {
  return (
    <Link to={path} className='border-2 rounded-md px-2 bg-gray-400'>{children}</Link>
  )
}
