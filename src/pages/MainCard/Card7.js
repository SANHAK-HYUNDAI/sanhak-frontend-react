import * as React from 'react';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sheet from '../../images/Dashboard images/조립문제.JPG'

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 300}}>
            <CardMedia
                component="img"
                height="140"
                img src={sheet}
                alt="image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    #조립 문제
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    코딩불량<br />
                    치합불량<br />
                    들뜸/떨어짐<br />
                    이종품 장착<br />
                    미장착/오장착<br />
                    조정불량<br />
                    간/단차<br />
                    고정작업 불량(이탈)<br />
                </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" component={Link} to="./LearnMore">Learn More</Button>
            </CardActions>
        </Card>
    );
}