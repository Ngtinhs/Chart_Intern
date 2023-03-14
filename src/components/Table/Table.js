import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 1128px;
  left: 40px;
  top: 651px;
  background: #6ECEB2;
border-radius: 4px 4px 0px 0px;
  
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  `;

const TableHeader = styled.th`
  color: #FFFFFF;
  text-align: center;
  height: 52px;
  width: 282px;
  border-right: rgba(255, 255, 255, 0.28) solid 1px;

  font-family: 'FWD Circular Viet TT';
font-style: normal;
font-weight: 700;
font-size: 20px;

  &:last-child{
      border-right: none;
    }

`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  font-family: 'FWD Circular Viet TT';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
align-items: center;
text-align: center;
border-bottom: #6ECEB2 1px solid;
border-right:#6ECEB2 1px solid ;
/* identical to box height, or 120% */
/* Orange */

color: #E87722;


  &:first-child {
    /* Đổi màu cho td đầu tiên */
    background: #0A3B32;
  }
  
  &:last-child {
    border-right: none;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #FFFFFF;
  }
`;

const TableBody = styled.tbody`
height: 194px ;
  tr:nth-child(even) {
    /* background-color: #FFFFFF; */
  }

  tr:nth-child(odd) {
    background-color: #FFFFFF;
  }
`;
function Table2() {
  return (
    <>
      <Wrapper>
        <div>
          <Table>
            <thead>
              <TableRow>
                <TableHeader>Tên quỹ</TableHeader>
                <TableHeader>Ngày bắt đầu</TableHeader>
                <TableHeader>Ngày kết thúc</TableHeader>
                <TableHeader>Tăng/Giảm (%)</TableHeader>
              </TableRow>
            </thead>
            <TableBody>
              <TableRow>
                <TableCell>Quỹ Tương trưởng</TableCell>
                <TableCell>335.00</TableCell>
                <TableCell>40.00</TableCell>
                <TableCell>+30%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quỹ Cân bằng</TableCell>
                <TableCell>120.00</TableCell>
                <TableCell>230.88</TableCell>
                <TableCell>+10%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Quỹ Bảo toàn</TableCell>
                <TableCell>110.23</TableCell>
                <TableCell>120.00</TableCell>
                <TableCell>+2%</TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </div>
      </Wrapper>
    </>
  )
}

export default Table2