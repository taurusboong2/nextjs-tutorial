import { useRouter } from 'next/router'
import React from 'react'
import { Menu } from 'semantic-ui-react'

const Gnb = () => {
  const router = useRouter();
  console.log(router);

  let activeItem;

  if(router.pathname === "/") {
    activeItem = "Home";
  } else if (router.pathname === "/about") {
    activeItem = "About";
  }

  const goLink = (e, data) => {
    if(data.name === 'Home'){
      router.push('/')
    } else if (data.name === 'About') {
      router.push('/about')
    }
  }

  return (
    <Menu inverted>
        <Menu.Item
          name='Home'
          active={activeItem === 'reviews'}
          onClick={goLink}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='About'
          active={activeItem === 'editorials'}
          onClick={goLink}
        >
          About
        </Menu.Item>
      </Menu>
  )
}

export default Gnb
