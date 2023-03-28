import React from 'react'
import { useState, useEffect } from 'react'
import dice from './assets/icon-dice.svg'
import axios from 'axios'
import styles from './styles.module.css'
import './App.css'

const localCounter = localStorage.getItem("counter")
if (localCounter) {
  console.log(localCounter)
}

function App() {
  const [counter, setCounter] = useState(Number(localCounter ? localCounter: 1))
  const [advice, setAdvice] = useState()

  
  useEffect(() => {
    axios
    .get(`https://api.adviceslip.com/advice/${counter}`)
    .then(response => {
      if (response.data.slip) {
        setAdvice(response.data.slip.advice)
        localStorage.setItem("counter", counter)
      } if (response.data.message) {
        // setCounter(1) -> Should be this, 
        // however the API does not return
        // at the ID: 22 so:
        counter == 225 ? setCounter(1) : setCounter( counter += 1) 
      }
    })
    .catch(err => console.error(err))
  },[counter])
  
  return (
    <Card 
      counter={counter} 
      setCounter={setCounter}
      advice={advice} 
      />
  )
}

// The card, 
function Card({ counter, advice, setCounter }) {
  return (
    <div className={styles.card}>
      <Title counter={counter} />
      <Advice advice={advice} />
      <Dividor />
      <Button counter={counter} setCounter={setCounter} />
    </div>
  )
}

// The title for the card "advice # 117"
function Title({ counter }) {
  
  const title = `ADVICE #${counter}`
  return (
    <div>
      <p className={styles.title} >{title}</p>
    </div>
    )
}

// The advice -> which will be fetched in the API
function Advice ({ advice }) {
  return(
    <div className={styles.advice} >
      <p className={styles.adviceP} >"{advice}"</p>
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
function Button({ counter, setCounter }) {
  return(
    <div className={styles.shadow} onClick={(e)=>setCounter(counter += 1)} >
      <div className={styles.next} >
        <img src={dice} className={dice}/>
      </div>
    </div>
  )
}

export default App
