import React from 'react'
import styled,{keyframes} from 'styled-components'

const mymove = keyframes`
    0% {background-color: rgb(90, 92, 190);}
    50% {background-color: rgb(93, 120, 24);}
    70% {background-color: rgb(40, 149, 129);}
    100% {background-color: rgb(90, 92, 190);}
`
const Wrap = styled.div`
    min-height: 100vh;
    padding: 150px 0;
    position: relative;
    background: rgb(60, 62, 200);
    animation: ${mymove} 10s infinite ease-in-out;
    @media (max-width:800px){
      padding: 80px 0;
    }
`
const ContentWrap = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    z-index: 10;
`
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 20px;
    border-bottom: 1px solid #ffffff;
    > h1 {
      font-size: 40px;
      font-weight: 800;
      color: #fff;
    }
    > span {
      font-size: 26px;
      font-weight: 700;
      color: rgb(200, 209, 76);
    }
    @media (max-width:800px){
      flex-direction: column;
      gap: 20px
    }
`

const Layout =(props)=> {
  return (
    <Wrap>
      <ContentWrap>
        <Header>
          <h1>오늘 끝내야하는 일</h1>
          <span>From React</span>
        </Header>
        {props.children}
      </ContentWrap>
    </Wrap>
  )
}

export default  Layout