import React from "react"
import Link from './Link';

function Header() {
  return(
    <div className="ui secondary pointing menu">
      <Link href="/" name="Accoridon" />
      <Link href="/search" name="Search" />
      <Link href="/dropdown" name="Dropdown" />
      <Link href="/translate" name="Translate" />
    </div>
    )
}

export default Header
