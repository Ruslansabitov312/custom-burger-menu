import React from 'react'
import './Menu.sass'

const Menu = ({ header, items, menuActive, setMenuActive }) => {
  return (
    <div className={menuActive ? "my-menu active" : "my-menu"} onClick={() => setMenuActive(false)}>
      <div className='my-blur' />
      <div className='my-menu__content' onClick={e => e.stopPropagation() }>
        <div className='my-menu__header'>{header}</div>
        <ul className='my-ul'>
          {items.map((item) => (
            <li className='my-li'>
              <a href={item.href} className='my-link'>{item.value}</a>
              <span className='material-icons'>{item.icon}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu
