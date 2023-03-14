import React from 'react'
import styled from 'styled-components';
import ChartValue from './../Chart/ChartValue';
import FilterDay from './../Chart/FilterDay';


const Wrapper = styled.div`
position: absolute;
width: 1128px;
height: 314px;
left: 40px;
top: 921px;


/* Light Green */

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
justify-content: space-between;
background-color:#FFFFFF ;

`
const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  border-right: 1px solid #6ECEB2;

`;

const ChangOfValue = () => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <p>Thay đổi của giá trị quỹ</p>
            </HeaderWrapper>
            <Content>
                <Right>
                    <ChartValue />
                </Right>
                <Left>
                    <FilterDay />
                </Left>
            </Content>
        </Wrapper>
    )
}

export default ChangOfValue