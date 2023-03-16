import React from 'react';
import styled from 'styled-components';

import arrow_down from '../../assets/svg/arrow_down.svg';
import date from '../../assets/svg/date.svg';
import dev from '../../assets/svg/dev.svg';
import filter from '../../assets/svg/filter.svg';

const SearchBoxHeader = styled.div`
display: flex; 
justify-content: space-between;
margin: 40px 40px 0 40px;
background: #ffffff; 
border-radius: 4px; 
align-items: center;`

const BoxLeft = styled.div`
display: flex;
gap: 24px;

#dropdown {
display: flex;
width: 236px;
background: #ffffff;
margin: 12px 0 12px 24px;
max-height: 44px;
box-sizing: border-box;
border: 1px solid #dbdfe1;
border-radius: 4px;
justify-content: space-between;
}

p {
font-family: 'FWD Circular Viet TT';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
color: #e87722;
margin-left: 20px;
}

img {
margin-right: 20px;
}

#fund_date_dropdown {
display: flex;
justify-content: space-between;
width: 274px;
margin: 12px 0;
border: 1px solid #dbdfe1;
border-radius: 4px;
max-height: 44px;
box-sizing: border-box;
}

button {
width: 139px;
margin: 12px 0;
max-height: 44px;
border: none;
background: #e87722;
border-radius: 4px;
color: white;
font-family: 'FWD Circular Viet TT';
font-style: normal;
font-weight: 700;
font-size: 14px;
align-items: center;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;
}
`;

const BoxRight = styled.div`
display: flex; 
gap: 24px; 
margin-right: 20px;`

const SearchBox = () => {
    return (
        <SearchBoxHeader>
            <BoxLeft>
                <span id="dropdown">
                    <p>Tất cả các quỹ</p>
                    <img src={arrow_down} alt="abc" />
                </span>
                <span id="fund_date_dropdown">
                    <p>01/07/2020 - 10/08/2020</p>
                    <img src={date} alt="abc" />
                </span>
                <button>TRA CỨU</button>
            </BoxLeft>
            <BoxRight>
                <img src={dev} alt="none" />
                <img src={filter} alt="none" />
            </BoxRight>
        </SearchBoxHeader>
    );
};

export default SearchBox;