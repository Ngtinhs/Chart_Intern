import styled from 'styled-components';
import Chart from './components/Chart/Chart';
import SearchBox from './components/Chart/SearchBox';
import ChangOfValue from './components/Table/ChangOfValue';
import Table2 from './components/Table/Table';



const Container = styled.div`
/* text-align: center; */
`
const Title = styled.div`
position: absolute;
width: 347px;
height: 50px;
left: 547px;
top: 116px;
font-family: 'FWD Circular Viet TT';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 50px;
display: flex;
align-items: center;
text-align: center;
text-transform: capitalize;

//Color
/* Orange */

color: #E87722;
`
const Desc = styled.div`
position: absolute;
width: 955px;
height: 60px;
left: 243px;
top: 186px;

font-family: 'FWD Circular Viet TT';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 30px;
/* or 167% */

display: flex;
align-items: center;
text-align: center;

/* Dark Green */

color: #0A3B32;
`


const Wrapper = styled.div`

/* Rectangle 87 */


box-sizing: border-box;

position: absolute;
width: 1208px;
height: 1275px;
left: 116px;
top: 286px;

/* Grey */

background: #DBDFE1;
/* Grey */

border: 1px solid #DBDFE1;
border-radius: 4px;
`


function App() {
  return (
    <div className="App">
      <Container>
        <Title>
          Tra cứu giá đơn vị quỹ
        </Title>
        <Desc>
          Nhằm cung cấp cho bạn đầy đủ thông tin về giá trị quỹ trong cả hiện tại và quá khứ, bạn có thể tùy chọn thời điểm tra cứu giá trị quỹ để nắm bắt đầy đủ nhất sự thay đổi của giá đơn vị quỹ theo khung thời gian bạn muốn
        </Desc>
      </Container >
      <Wrapper>
        <SearchBox />
        <Chart />
        <Table2 />
        <ChangOfValue />

      </Wrapper>
    </div>


  );
}

export default App;
