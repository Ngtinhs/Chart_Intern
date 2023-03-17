import React from 'react'
import styled from 'styled-components';
import BarChart from './BarChart';
import arrow_down from '../../assets/svg/arrow_down.svg';


const Wrapper = styled.div`
margin: 0 40px 40px 40px;
background: #6ECEB2;
border-radius: 4px 4px 0px 0px;
box-sizing: border-box;
`
const HeaderWrapper = styled.p`
background: #6ECEB2;
text-align: center;
color: #FFFFFF;
font-family: 'FWD Circular Viet TT';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
box-sizing:border-box;
`
const Main = styled.div`
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 0px 0px 0px 4px;
box-sizing: border-box;
display: flex;
color: #0A3B32;
font-family: 'FWD Circular Viet TT';
`
const Left = styled.div`
flex: 1;
border-right: 0.6px solid #6ECEB2;
padding: 15px 0 15px 30px;

h2{
  font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 38px;
}
`
const Right = styled.div`
flex: 1;
padding: 15px 30px 15px 0;


.filter {
  display: flex;
background: #ffffff;
margin: 12px 0 12px 24px;
max-height: 44px;
box-sizing: border-box;
border: 1px solid #dbdfe1;
border-radius: 4px;
justify-content: space-between;
gap: 44.5px;
cursor: pointer;
}
p {
font-family: 'FWD Circular Viet TT';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
color: #0A3B32;
}

img {
margin-right: 20px;

}

h2{
  font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 38px;
}

.header, .content {
  display: flex;
  justify-content: space-between;
  text-align: justify;
  margin-left: 30px;
}
`
const ChangOfValue = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <h2>Thay đổi của giá trị quỹ</h2>
      </HeaderWrapper>
      <Main>
        <Left>
          <h2>Từ lúc thành lập quỹ</h2>
          <BarChart />
        </Left>
        <Right>
          <div className='header'>
            <h2>Thời gian</h2>
            <div className='filter'>
              <p style={{ marginLeft: "20px", color: "#E87722" }}>
                6 Tháng qua
              </p>
              <img src={arrow_down} alt="abc" />
            </div>
          </div>
          <div className='content'>
            <div className="fund-name">
              <p>Quỹ Tăng trưởng</p>
              <p>Quỹ Cân bằng</p>
              <p>Quỹ Bảo toàn</p>
            </div>
            <div className="fund-data">
              <p>+5.87%</p>
              <p>+10.3%</p>
              <p>-2.3%</p>
            </div>
          </div>

        </Right>
      </Main>

    </Wrapper>
  )
}

export default ChangOfValue