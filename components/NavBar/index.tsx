import React from 'react'
import { PAGES } from '@app/constants'
import NavItem from "@components/NavBar/NavItem";
import styles from "./NavBar.module.css"

type Props = {}

const NavBar = ( { }: Props ) =>
{
  return (
      <section className={ styles.navBar }>
          {
              PAGES.map((page) => {
                  return (
                      <NavItem page={ page } />
                  )
              })
          }
    </section>
  )
}

export default NavBar