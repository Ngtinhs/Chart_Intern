import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
margin: 0 40px 40px 40px;
background: #6ECEB2;
border-radius: 4px 4px 0px 0px;
`
const HeaderWrapper = styled.p`
background: #6ECEB2;
border-radius: 4px 4px 0px 0px;
text-align: center;
color: #FFFFFF;
font-family: 'FWD Circular Viet TT';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
`
const Content = styled.div`
display: flex;
background-color:#FFFFFF ;
`

const Title = styled.div`
flex: 1;`
const BoxChart = styled.div`
display: flex;
flex-direction: column;
gap: 28px;
margin: 30px;
`
const Des = styled.div``


const ChangOfValue = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <p>Thay đổi của giá trị quỹ</p>
      </HeaderWrapper>
      <Content>
        <Title style={{ borderRight: "0.6px solid #6ECEB2 " }}>
          <BoxChart >
            <h2>Từ lúc thành lập quỹ</h2>
            <Des>Quỹ Tăng trưởng</Des>
            <Des>Quỹ Cân bằng</Des>
            <Des>Quỹ Bảo toàn</Des>
          </BoxChart>
        </Title>
        <Title>
          <BoxChart>
            <h2>Thời gian</h2>
            <Des>Quỹ Tăng trưởng</Des>
            <Des>Quỹ Cân bằng</Des>
            <Des>Quỹ Bảo toàn</Des>
          </BoxChart>
        </Title>
      </Content>
    </Wrapper>
  )
}

export default ChangOfValue