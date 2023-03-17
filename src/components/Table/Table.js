import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
const Wrapper = styled.div`
box-sizing: border-box;
background: #6ECEB2;
border-radius: 4px 4px 0px 0px;
margin: 0 40px;
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
font-family: 'Be Vietnam Pro';
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
font-family: 'Be Vietnam Pro';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
align-items: center;
text-align: center;
border-bottom: #6ECEB2 1px solid;
border-right:#6ECEB2 1px solid ;
color: #E87722;
&:first-child {
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
}
tr:nth-child(odd) {
background-color: #FFFFFF;
}
`;
function Table2() {
  const [data, setData] = useState([
    {
      fundName: 'Quỹ Tương trưởng',
      startDate: '22',
      endDate: '40',
      performance: '30',
    },
    {
      fundName: 'Quỹ Cân bằng',
      startDate: '78',
      endDate: '37',
      performance: '10',
    },
    {
      fundName: 'Quỹ Bảo toàn',
      startDate: '85',
      endDate: '36',
      performance: '2',
    },
  ]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const newData = data.map(item => ({
        ...item,
        startDate: Math.floor(Math.random() * 100),
        endDate: Math.floor(Math.random() * 100),
        performance: Math.floor(Math.floor(Math.random() * 200) - 100),
      }));
      setData(newData);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [data]);
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
              {data.map((row) => (
                <TableRow key={row.fundName}>
                  <TableCell>{row.fundName}</TableCell>
                  <TableCell>{row.startDate}</TableCell>
                  <TableCell>{row.endDate}</TableCell>
                  <TableCell>{row.performance > 0 ? '+' + row.performance : row.performance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Wrapper>
    </>
  )
}
export default Table2