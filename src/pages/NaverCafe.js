// material
import { Grid, Container, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import host from "../api/host";

// components
import Page from '../components/Page';

import {
AppConversionRates,
FolderList,
CAWordCloud,
FolderList2
} from '../sections/@dashboard/app';

const hostName = host;
// ----------------------------------------------------------------------

export default function NaverCafe() {

  const [BigCategoryItem, setBigCategoryItem] = useState([]);
  const [SubCategoryItem, setSubCategoryItem] = useState([]);
  const [KeyWordList, setKeyWordList] = useState([]);

useEffect(() => {
  const fetchDatas = async () => {
   
      const response = await axios.get(
        `${hostName}/api/CAs/statistics`
      );

      const subTest = response.data.subCategories
      const bigTest = response.data.bigCategories

      const valueTest = bigTest.map(row => row.value)
      const labelTest = bigTest.map(row => row.label)

      // 가장 상위의 big category 정보 가져오기
      const maxIndex = valueTest.indexOf(Math.max(...valueTest)) 
      const bigCate = labelTest[maxIndex]
      
      function MostCategories(element)  {
        if(element.bigCateName === bigCate)  {
          return true;
        }
      }
      setBigCategoryItem(bigTest);
      // 가장 상위의 big category에 대한 subcategory 내용만 저장
      setSubCategoryItem(subTest.filter(MostCategories));
      // 빈도수 상위 5개 keyword
      setKeyWordList(response.data.keywords.slice(0,5));
  };
  fetchDatas();
}, []);

return (
<Page title="Dashboard: NaverCafe">
<Container>
  <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
    <Typography variant="h4" gutterBottom>
      Naver Cafe data
    </Typography>
  </Stack>

  <Grid container spacing={2}>
    <Grid item xs={15} md={8} lg={8}>
      <CAWordCloud title = "WordCloud"/>
      </Grid>

      <Grid item xs={15} md={6} lg={4}>
        <FolderList2 title = "Top Keywords" list = {KeyWordList}/>
      </Grid>
  </Grid>
  
  <Grid container spacing={2}>
    <Grid item xs={15} md={8} lg={8} marginTop={2}>
      <AppConversionRates
        title="Big Categories" chartData = {BigCategoryItem}
      />
    </Grid>
    
    <Grid item xs={15} md={6} lg={4}>
      <FolderList title="Sub Categories" list = {SubCategoryItem}/>
    </Grid>

  </Grid>
</Container>
</Page>
);
}
