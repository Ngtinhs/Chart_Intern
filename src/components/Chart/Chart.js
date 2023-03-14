import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`

box-sizing: border-box;

position: absolute;
width: 1128px;
height: 495px;
left: 40px;
top: 132px;

background: #FFFFFF;
border-radius: 4px;`

const Chart = () => {
    return (
        <Wrapper>
            <div>Đây là chart</div>
        </Wrapper>
    )
}

export default Chart