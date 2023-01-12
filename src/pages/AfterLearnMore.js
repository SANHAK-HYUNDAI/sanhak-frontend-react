import { useState, useEffect, React } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// material
import {
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
// components
import { styled } from '@mui/material/styles';
import Page from '../components/Page';
import ROsimilarityTable from './ROsimilarityTable';
import SelectedTable from './SelectedTable';
import SelectedContent from './SelectedContent';

// ----------------------------------------------------------------------

export default function AfterLearnMore() {

  const location = useLocation();
  console.log(location.state.clickedcell);

  const [selectId, setSelectId] = useState(location.state.clickedcell);

  // API 호출
  const [row, setRow] = useState([]);

  useEffect(() => {
    const fetchOneRow = async () => {
      
        const response = await axios.get(`https://kw-dormitory.k-net.kr/api/CAs/${Number(selectId)}`);
        setRow(response.data);
    };

    fetchOneRow();
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    lineHeight: '30px',
    
  }));

  return (
    <Page title="User">
      <Container>
        <Grid container rowSpacing={5} columnSpacing={{ sm: 20, md: 10 }} >
        <Grid item xs={20} style={{marginTop:'50px'}}>
        <Item elevation={4}>
          <Typography variant="h4" gutterBottom style={{color:'#000000',  margin:'20px', marginLeft:'10px'}}>
            Naver Cafe Data
          </Typography>
          <SelectedTable selectId = {selectId}/>
        </Item>
        
        </Grid>

      <Grid item xs={20}> 
        <Item elevation={4}>
           <SelectedContent selectId = {selectId}/>
           </Item>
      </Grid>
      
      <Grid item xs={20}>
        <Item elevation={4}>
        <Typography variant="h4" gutterBottom style={{color:'#000000', margin:'20px', marginLeft:'10px'}}>Ro Data</Typography>
          <ROsimilarityTable selectId = {selectId}/>
        </Item>
      </Grid>
      <Grid item xs={20}>
        {}
      </Grid>

    </Grid>
    </Container>
    </Page>
  );
}
   