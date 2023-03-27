import React from 'react'
import { useState } from 'react'
import dividor from './assets/pattern-divider-mobile.svg'
import dice from './assets/icon-dice.svg'

import styles from './styles.module.css'

import './App.css'


// Step 1: Break the UI into a component hierarchy
// Step 2: Build a static version in React
// Step 3: Find the minimal but complete representation of UI state
// Step 4: Identify where your state should live
// Step 5: Add inverse data flow


function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Card />
    </div>
    
  )
}

// The card, 
function Card() {
  return (
    <div className={styles.card}></div>
  )
}

// The title for the card "advice # 117"
function Title() {
  return (
    <div>
      <p className='title'>Advice # 117</p>
    </div>
    )
}

// The advice -> which will be fetched in the API
function Advice () {
  return(
    <div className='advice'>
      <p>Try buying a coffee for the creator of a free public API, now and then.</p>
    </div>
    )
}

// The dividor
function Dividor () {
  return(
    <div className='dividor'>
      <img src={dividor}></img>
    </div>
  )
}

// The button 
function Button() {
  return(
    <div className='button'>
      <button>{dice}</button>
    </div>
  )
}




export default App
