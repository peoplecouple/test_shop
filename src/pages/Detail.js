import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({ list }) => {
  const { num } = useParams()
  const match = list.find(el => String(el.id) === num)


  const liStyle = {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    background: 'ddd',
    margin: '0 15px'
  }

  return (
    <>
      <img src={match.img} onError={e => e.target.src = process.env.PUBLIC_URL + '/assets/images/main_m01.jpg'} alt="" />
      <div>{match.name}</div>
      <div>{match.des.substring(0, 30)} ...</div>
      {/* substring 글자수 제한 */}
      <div>{match.price}</div>
      <ul>
        {
          match.color.map(el => {
            return (
              <li style={{ ...liStyle, background: el.hex_value }}>color</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Detail