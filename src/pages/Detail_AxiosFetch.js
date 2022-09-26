import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

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
      <img src={process.env.PUBLIC_URL + match.img} alt="" />
      <div>{match.name}</div> 
      <div>{match.des.substring(0,2)} ...</div> 
      {/* substring 글자수 제한 */}
      <div>{match.price}원</div>
      <ul>
        {
          match.color.map(el => {
            return (
              <li style={{ ...liStyle, background: el }}>{el}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Detail