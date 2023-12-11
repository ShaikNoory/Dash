import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const menuItems = [
        { to: '/', label: 'Analytics' },
        { to: 'financials', label: 'Financial' },
        { to: 'system', label: 'System' },
        { to: 'monitor', label: 'Monitor' },
        { to: 'projects', label: 'Projects' },
        { to: 'stock', label: 'Stock' },
        { to: 'reports', label: 'Reports' },
      ];
  return (
    <div className='sideBar'>
        <div className='sidebar-wrapper'>
            <div className='sidebar-menu'>
                <h5 className='listitem dashboard'>DashBoards</h5>
            </div>
            <ul className='menu'>
          {menuItems.map((menuItem, index) => (
            <li className='listitem' key={index}>
              <Link to={menuItem.to} className="link">{menuItem.label}</Link>
            </li>
          ))}
        </ul>
        </div>
        </div>
  )
}

export default Sidebar