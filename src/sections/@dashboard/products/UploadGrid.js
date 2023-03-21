// material
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography } from '@mui/material';
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
      <Grid item xs={12}>
        <Item elevation={4}>
          <Typography variant="h5" sx = {{ margin : 2 }}gutterBottom>
            File upload
          </Typography>
        </Item>
      </Grid>
  );
}