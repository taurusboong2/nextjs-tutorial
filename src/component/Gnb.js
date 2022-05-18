import React from 'react'
import { Menu } from 'semantic-ui-react'

const Gnb = () => {
  const activeItem = "home"

  return (
    <Menu inverted>
        <Menu.Item
          name='About'
          active={activeItem === 'editorials'}
          // onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
          name='Skills'
          active={activeItem === 'reviews'}
          // onClick={this.handleItemClick}
        >
          Skills
        </Menu.Item>

        <Menu.Item
          name='Contact'
          active={activeItem === 'upcomingEvents'}
          // onClick={this.handleItemClick}
        >
          Contact
        </Menu.Item>
      </Menu>
  )
}

export default Gnb
