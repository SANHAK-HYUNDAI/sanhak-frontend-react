// material
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography } from '@mui/material';
// components
import cafeImage from "../../../images/GuideIcon/tea.png";
import repair from "../../../images/GuideIcon/repair.png";
import search from "../../../images/GuideIcon/search.png";
import home from "../../../images/GuideIcon/home.png";
import MakeTable from './VehicleTable';
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
            Types of vehicles (현대트랜시스 납부 차종 종류)
          </Typography>
          <div>
            <MakeTable />
          </div>
        </Item>
      </Grid>
  );
}