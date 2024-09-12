import React from 'react'
import { Link } from 'react-router-dom'
import "./ErrorPageNotFound.scss"
import NavBar from '../components/NavBar'
import Card from "../layout/Cards"
import Footer from '../layout/Footer'

function ErrorPageNotFound() {
  return (
    <>
    <NavBar/>
    <Card>
      <div className='error-page'>
      <h1>404</h1>
      <h2>Oops! La page que vous demandez n'existe pas</h2>
      <Link to="/">Retuner sur la page d'accueil</Link>
      </div>
    </Card>
    <Footer/>
    </>
  )
}

export default ErrorPageNotFound