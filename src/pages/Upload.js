import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { UploadGrid } from '../sections/@dashboard/products';
// ----------------------------------------------------------------------

export default function Upload() {
  

  return (
    <Page title="Dashboard: Upload">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Upload
        </Typography>
        <UploadGrid />
      </Container>
    </Page>
  );
}
