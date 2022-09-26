import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { company, content } from './data/data'
import Header from './pages/Header'
import Detail from './pages/Detail'

const App = () => {
  return (
    <div>
      <Header data={company} />
      {
        content.map(el => {
          return (

            <Link to={'/list/' + el.id}><div key={el.id} >{el.id}</div></Link>

          )
        })
      }

      <Routes>
        <Route path='/list/:num' element={<Detail list={content} />} />
      </Routes>


    </div>
  )
}

export default App