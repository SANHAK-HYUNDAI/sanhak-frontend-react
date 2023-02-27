import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
import Box from '@mui/material/Box';

// material
import {
  Card,
  Paper,
  Grid,
  Stack,
  Button,
  Container,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

// components
import Page from '../components/Page';
import host from "../api/host";

// ----------------------------------------------------------------------

const columns = [
  { field: 'cafeName', headerName: '카페 이름', width: 450, headerClassName: 'super-app-theme--header'},
  { field: 'title', headerName: '제목', width: 400, headerClassName: 'super-app-theme--header' },
  { field: 'keywords', headerName: '키워드', width: 250, headerClassName: 'super-app-theme--header' },
];

const hostName = host;

export default function LearnMore({bigcategory}) {

  const [pageSize, setPageSize] = React.useState(25);

  const [selectedRow, setSelectedRow] = useState();

  const location = useLocation();
	
  const pageTitle= location.state.bigcategory;

  // API 호출
  const [USERLIST, setUSERLIST] = useState([]);

  useEffect(() => {
    const fetchNaverCafe = async () => {
      
        const response = await axios.get( `${hostName}/api/CAs/all`, {params : {bigPhenom : pageTitle}});
        console.log(pageTitle);
        setUSERLIST(response.data);
    };

    fetchNaverCafe();
  }, []);
  
  console.log(USERLIST);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    lineHeight: '30px', 
  }));
  
  return (
    <Page title="Dashboard: Learnmore">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h3" gutterBottom>
          # {pageTitle} 
          </Typography>
      
        <Button variant="contained" size = "large" component={Link} to ="/LearnMore/information" state={{ clickedcell: selectedRow}} > 유사 RO정보 확인</Button>

        </Stack>
        <Card>
        <Grid container rowSpacing={4} columnSpacing={{ sm: 10, md: 10 }}>
          <Grid item xs={20}> 
          <Item elevation={4}>
            <Typography variant="h4" gutterBottom style={{color:'#000000',  margin:'20px', marginLeft:'10px'}}>
              Naver Cafe Data
            </Typography>
          </Item>
          </Grid>
        </Grid>
        
        <Grid>
          <div style={{ height: 550, width: '100%' }}>
          <Box sx={{ height: '100%',width: '100%',"& .MuiDataGrid-columnHeaders": {backgroundColor: '#90EE90'}}}> 
            <DataGrid
              rows={USERLIST}
              columns={columns} 
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[25, 50, 100]}
              // backgroundColor='#90EE90',
              onSelectionModelChange={(selection) => {
              setSelectedRow(selection); // select한 CA id 값 전달
            }}        
            />
            </Box>
          </div>
        </Grid>
      </Card>
      </Container>
    </Page>
  );
}