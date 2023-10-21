import React from 'react';
import { Link } from 'react-router-dom';


export default function Menu()  {
    function updatemenu() {
        if (document.getElementById('responsive-menu').checked === true) {
          document.getElementById('menu').style.borderBottomRightRadius = '0';
          document.getElementById('menu').style.borderBottomLeftRadius = '0';
        }else{
          document.getElementById('menu').style.borderRadius = '10px';
        }
      }
      
  return(
    <>
    <nav id='menu'>
  <input type='checkbox' id='responsive-menu' onClick={updatemenu}/><label></label>
  <ul>
    <li><Link to="">Home</Link></li>
    <li><a className='dropdown-arrow' href='http://'>Products</a>
      <ul className='sub-menus'>
        <li><a href='http://'>Products 1</a></li>
        <li><a href='http://'>Products 2</a></li>
        <li><a href='http://'>Products 3</a></li>
        <li><a href='http://'>Products 4</a></li>
      </ul>
    </li>
    <li><Link to="/about">About</Link></li>
    <li><a className='dropdown-arrow' href='http://'>Services</a>
      <ul className='sub-menus'>
        <li><a href='http://'>Services 1</a></li>
        <li><a href='http://'>Services 2</a></li>
        <li><a href='http://'>Services 3</a></li>
      </ul>
    </li>
    <li><a href='http://'>Contact Us</a></li>
  </ul>
</nav>
    </>
  )
}

