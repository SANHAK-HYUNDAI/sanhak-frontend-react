
import { Link as RouterLink } from 'react-router-dom';

import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductList, GuideGrid } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

export default function Learnmore() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="LearnMore">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          런모어입니다
        </Typography>
        <GuideGrid />
      </Container>
    </Page>
  );
}
