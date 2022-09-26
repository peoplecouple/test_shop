import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Header from './pages/Header'
import Detail from './pages/Detail'

const App = () => {
  const [con, setCon] = useState();
  const [loading, setLoading] = useState(false);

  // axios는 자동으로 json 파일로 바꾼다
  useEffect(() => {
    setLoading(false)
    const url = 'https://desipossa.github.io/shop_cra/assets/data.json';
    const getData = async () => {
      const res = await axios.get(url);
      const newdata = res.data.slice(0, 100).map(el => {
        return {
          id: el.id,
          name: el.name,
          des: el.description,
          price: el.price,
          img: el.image_link,
          color: el.product_colors,
          hex_value: el.hex_value,
        }
      })
      setCon(newdata);
      setLoading(true)
      console.log(newdata)
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
          loading ? <div>

            <Routes>
              <Route path='/' element={
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
              } />
              <Route path='/list/:num' element={<Detail list={con} />} />
            </Routes>

          </div>
            : <div>Loading...</div>

        }
      </div>
      <Header />

    </div>
  )
}

export default App