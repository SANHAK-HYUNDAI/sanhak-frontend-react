import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sheet from '../../images/Dashboard images/기밀불량.JPG'

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
                    #기밀 불량
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <br /><br /><br />
                    이물질 유입<br />
                    습기<br />
                    누기<br />
                    <br /><br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}