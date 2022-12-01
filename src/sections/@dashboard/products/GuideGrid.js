// material
import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';
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
          Ro에 대한 카테고리별 현상을 보여줍니다.
          15개의 카테고리로 분류되어 각각의 상세 정보를
          Learn more 페이지를 통해 확인가능합니다.
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item elevation={4}>
        Ro에 대한 정보를 항목별로 검색가능합니다.
        검색된 항목들과 연관된 데이터들을
        테이블의 형태로 확인가능합니다.
        </Item>
      </Grid>  
      <Grid item xs={6}>
        <Item elevation={4}>
        Ro에 대한 정보를 Word Cloud 형태와, Top 5로 
        확인가능합니다.
        큰 범주와 하위 범주로 많이 나온 범주를 확인할 수 있습니다.
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item elevation={4}>
        네이버 카페에 대한 정보를 Word Cloud 형태와, Top 5로 
        확인가능합니다.
        큰 범주와 하위 범주로 많이 나온 범주를 확인할 수 있습니다.
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item elevation={4}>table</Item>
      </Grid>
    </Grid>
  );
}
