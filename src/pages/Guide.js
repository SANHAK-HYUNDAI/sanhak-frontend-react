import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { GuideGrid } from '../sections/@dashboard/products';
// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="Dashboard: Guide">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Guide
        </Typography>
        <GuideGrid />
        {/* <ProductList products={PRODUCTS} /> */}
      </Container>
    </Page>
  );
}
