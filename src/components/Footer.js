import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="m-5">
      <li><Link to={'/'}>Mi app</Link></li>
      <li><Link to={'/shop'}>Shop</Link></li>
    </div>
  )
}
export default Footer