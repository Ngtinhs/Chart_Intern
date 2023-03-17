import styled from 'styled-components';
import SearchBox from './components/Chart/SearchBox';
import Table2 from './components/Table/Table';
import LineChart from './components/Chart/Chart';
import ChangOfValue from './components/Chart/ChangOfValue';
import BarChart from './components/Chart/BarChart';

const Container = styled.div`
max-width: 1208px;
margin: 116px auto;
`
const Title = styled.div`
font-family: 'FWD Circular Viet TT';
font-weight: 500;
font-size: 32px;
line-height: 50px;
display: flex;
justify-content: center;
align-items: center;
color: #E87722;
`
const Desc = styled.div`
width: 100%;
font-family: 'FWD Circular Viet TT';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 30px;
margin-top: 20px;
display: flex;
text-align: center;
color: #0A3B32;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 24px;
margin-top: 40px;
background: #DBDFE1;
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
        <Wrapper>
          <SearchBox />
          <LineChart />
          <Table2 />
          <ChangOfValue />
        </Wrapper>
      </Container >
    </div>
  );
}

export default App;
