import * as React from 'react';
import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sheet from '../../images/Dashboard images/기 타.JPG'

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
                    #기타
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    기타<br />
                    막힘_상시<br />
                    오디오/AVN 주변장치USB작동불량<br />
                    공조 불량_에어컨 시원해지지 않음<br />
                    충/방전 불량_방전<br />
                    과열_간헐적
                </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" component={Link} to="./LearnMore">Learn More</Button>
            </CardActions>
        </Card>
    );
}