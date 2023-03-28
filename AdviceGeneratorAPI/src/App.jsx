import React from 'react'
import { useState } from 'react'
import mobileDividor from './assets/pattern-divider-mobile.svg'
import deskDividor from './assets/pattern-divider-desktop.svg'
import dice from './assets/icon-dice.svg'

import './App.css'
import styles from './styles.module.css'



// Step 1: Break the UI into a component hierarchy
// Step 2: Build a static version in React
// Step 3: Find the minimal but complete representation of UI state
// Step 4: Identify where your state should live
// Step 5: Add inverse data flow


function App() {
  return (
    <div>
      <Card />
    </div>
    
  )
}

// The card, 
function Card() {
  return (
    <div className={styles.card}>
      <Title />
      <Advice />
      <Dividor />
      <Button />
    </div>
  )
}

// The title for the card "advice # 117"
function Title() {
  return (
    <div>
      <p className={styles.title} >ADVICE #117</p>
    </div>
    )
}

// The advice -> which will be fetched in the API
function Advice () {
  return(
    <div className={styles.advice} >
      <p className={styles.adviceP} >"It's easy to sit up and take notice what's difficult is getting up and taking action."</p>
    </div>
    )
}

// The dividor
function Dividor () {
  return(
    <div className='dividor'>
      <img className={styles.dividorSvg} />
    </div>
  )
}

// The button 
function Button() {
  return(
    <div className={styles.shadow}>
      <div className={styles.next} >
        <img src={dice} className={dice}/>
      </div>
    </div>
  )
}




export default App
