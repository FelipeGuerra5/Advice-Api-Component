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
  const [counter, setCounter] = useState(Number(localCounter ? localCounter : 1))
  const [advice, setAdvice] = useState()

  useEffect(() => {
    axios
      .get(`https://api.adviceslip.com/advice/${counter}`)
      .then(response => {
        if (response.data.slip) {
          setAdvice(response.data.slip.advice)
          localStorage.setItem("counter", counter)
        } if (response.data.message) {
          // API -> Has error response on ID:22 and have a total of 224 ID's.
          counter == 225 ? setCounter(1) : setCounter(counter + 1)
        }
      })
      .catch(err => console.error(err))
  }, [counter])

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
      <divisor />
      <Button counter={counter} setCounter={setCounter} />
    </div>
  )
}

function Title({ counter }) {

  const title = `ADVICE #${counter}`
  return (
    <div>
      <p className={styles.title} >{title}</p>
    </div>
  )
}

function Advice({ advice }) {
  return (
    <div className={styles.advice} >
      <p className={styles.adviceP} >"{advice}"</p>
    </div>
  )
}

function divisor() {
  return (
    <div className='divisor'>
      <img src="" alt="" className={styles.divisorSvg} />
    </div>
  )
}

function Button({ counter, setCounter }) {
  return (
    <div className={styles.shadow} onClick={(e) => setCounter(counter += 1)} >
      <div className={styles.next} >
        <img src={dice} className={dice} alt="" />
      </div>
    </div>
  )
}

export default App
