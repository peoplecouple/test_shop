import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Header from './pages/Header'
import Detail from './pages/Detail'

const App = () => {
  const [con, setCon] = useState();
  const [loading, setLoading] = useState(false);
  const url = process.env.PUBLIC_URL + '/data.json';
  // axios는 자동으로 json 파일로 바꾼다
  useEffect(() => {
    setLoading(false)
    const getData = async () => {
      const res = await axios.get(url);
      setCon(res.data);
      setLoading(true)
    }
    getData();
    // axios(url).then(res => {
    //   console.log(res)
    //     setCon(res.data);
    //     setLoading(true)
    //   })
  }, [])

  return (
    <div>
      <div>
        {
          loading
            ? <div>
              {
                con.map(el => {
                  return (
                    <div key={el.id}>
                      <Link
                        to={"/list/" + el.id}>
                        {el.name}
                      </Link>
                    </div>
                  )
                })
              }
              <Routes>
                <Route path='/list/:num' element={<Detail list={con} />} />
              </Routes>

            </div>
            : <div>없음</div>

        }
      </div>
      <Header />

    </div>
  )
}

export default App