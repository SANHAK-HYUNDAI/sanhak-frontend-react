import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sheet from '../../images/Dashboard images/경고등.JPG'

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 190 }}>
            <CardMedia
                component="img"
                height="140"
                img src={sheet}
                alt="image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    #경고등
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <br />
                    에어백/SRS<br />
                    점등안됨<br />
                    엔진<br />
                    경고등 점등<br />
                    시트벨트<br />
                    ABS<br />
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}