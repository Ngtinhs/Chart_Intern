import React from 'react'
import styled from 'styled-components';

const Search = styled.div`
/* Rectangle 351 */
position: absolute;
width: 1128px;
height: 68px;
left: 40px;
top: 40px;

background: #FFFFFF;
border-radius: 4px;

`

const ListSearchBox = styled.div`
/* Rectangle 91 */


box-sizing: border-box;

position: absolute;
width: 236px;
height: 44px;
left: 24px;
top: 12px;

background: #FFFFFF;
/* Grey */

border: 1px solid #DBDFE1;
border-radius: 4px;

`
const SearchDayBox = styled.div`
/* Rectangle 91 */


box-sizing: border-box;

position: absolute;
width: 275px;
height: 44px;
left: 284px;
top: 12px;

background: #FFFFFF;
/* Grey */

border: 1px solid #DBDFE1;
border-radius: 4px;

`


const Title = styled.span`

position: absolute;
width: 107px;
height: 24px;
left: 20px;
top: 10px;

font-family: 'FWD Circular Viet TT';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

display: flex;
align-items: center;

/* Orange */

color: #E87722;
`
const Title2 = styled.span`

position: absolute;
width: 201px;
height: 24px;
left: 20px;
top: 10px;

font-family: 'FWD Circular Viet TT';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

display: flex;
align-items: center;

/* Orange */

color: #E87722;
`

const ButtonSearch = styled.span`

position: absolute;
width: 139px;
height: 44px;
left: 583px;
top: 12px;
background: #E87722;
border-radius: 4px;
`
const Title3 = styled.span`

position: absolute;
width: 69px;
height: 24px;
left: 35px;
top: 10px;

font-family: 'FWD Circular Viet TT';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 171% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;

color: #FFFFFF;
`


const SearchBox = () => {
    return (
        <div>
            <Search>
                <ListSearchBox>
                    <Title>
                        <span>
                            Tất cả các quỹ
                        </span>
                    </Title>
                    <iconList>
                    </iconList>
                </ListSearchBox>

                <SearchDayBox>
                    <Title2>
                        01/07/2020 - 10/08/2020
                    </Title2>
                    <iconList>
                    </iconList>
                </SearchDayBox>
                <ButtonSearch>
                    <Title3>
                        Tra cứu
                    </Title3>
                </ButtonSearch>
            </Search>
        </div>
    )
}

export default SearchBox