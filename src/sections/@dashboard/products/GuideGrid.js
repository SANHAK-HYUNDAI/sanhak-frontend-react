// material
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography } from '@mui/material';
// components
import cafeImage from "../../../images/GuideIcon/tea.png";
import repair from "../../../images/GuideIcon/repair.png";
import search from "../../../images/GuideIcon/search.png";
import home from "../../../images/GuideIcon/home.png";
import MakeTable from './VehicleTable';
// import MakeTable2 from './VehicleTable2';
// import MakeTable3 from './VehicleTable3';
import './index.css';
// ----------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  lineHeight: '30px',
  
}));

export default function GuideGrid() {
  return (
    <Grid container rowSpacing={6} columnSpacing={{ sm: 8, md: 10 }}>
      {/* 6이 절반 넓이 */}
      <Grid item xs={6}> 
        <Item elevation={4}>
        <Typography variant="h5" gutterBottom>
           <div className="container">
            <img src={home} alt="home" /> Dashboard
           </div>
          </Typography>
          Ro에 대한 카테고리별 현상을 보여줍니다.
          15개의 카테고리로 분류되어 각각의 상세 정보를
          Learn more 페이지를 통해 확인가능합니다.
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item elevation={4}>
          <Typography variant="h5" gutterBottom>
           <div className="container">
            <img src={search} alt="search" /> Search
           </div>
          </Typography>
        Ro에 대한 정보를 항목별로 검색가능합니다.
        검색된 항목들과 연관된 데이터들을
        테이블의 형태로 확인가능합니다.
        </Item>
      </Grid>  
      <Grid item xs={6}>
        <Item elevation={4}>
        <Typography variant="h5" gutterBottom>
          <div className="container">
            <img src={repair} alt="repair" /> Ro Data
          </div>
          </Typography>
        Ro에 대한 정보를 Word Cloud 형태와, Top 5로 
        확인가능합니다.
        큰 범주와 하위 범주로 많이 나온 범주를 확인할 수 있습니다.
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item elevation={4}>
          <Typography variant="h5" gutterBottom>
          <div className="container">
            <img src={cafeImage} alt="cafe" /> Naver Cafe Data
          </div>
          </Typography>
        네이버 카페에 대한 정보를 Word Cloud 형태와, Top 5로 
        확인가능합니다.
        큰 범주와 하위 범주로 많이 나온 범주를 확인할 수 있습니다.
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item elevation={4}>
          <Typography variant="h5" sx = {{ margin : 2 }}gutterBottom>
            Types of vehicles (현대트랜시스 납부 차종 종류)
          </Typography>
          <div>
            <MakeTable />
          </div>
        </Item>
      </Grid>
    </Grid>
  );
}