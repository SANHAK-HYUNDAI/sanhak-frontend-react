// material
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography, Container,Stack } from '@mui/material';
import FileUploadForm from './FileUploadForm'
// components
import './index.css';
// components
// ----------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  lineHeight: '30px',
  
}));

export default function Upload() {
  return (
    <Container>
    <Grid container spacing={2}>
      <Grid item xs={10} md={5} lg={6}>
        <FileUploadForm title="CA Data"/>
      </Grid>
      <Grid item xs={10} md={5} lg={6}>
        <FileUploadForm title="RO Data"/>
      </Grid>
    
    </Grid>
    </Container>
  );
}