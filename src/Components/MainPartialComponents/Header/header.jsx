import React from 'react'
import MainHeader from './main-header/main-header'
import Menu from './menu/menu'
import TopHeader from './top-header/top-header'

const Header = (props) => {
    return ( 
        <header>
            <TopHeader token={props.token}/>
            <MainHeader />
            <Menu />
        </header>
     );
}
 
export default Header;