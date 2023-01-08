import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import { Card, CardHeader } from '@mui/material';
import { pink, } from '@mui/material/colors';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

FolderList2.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array.isRequired,
};


export default function FolderList2({title, list}) {

  const ListItemTest = (list.map((keyword) =>
        <ListItem key={keyword.value} >
          <ListItemAvatar>
          <Avatar sx={{bgcolor : pink[50]}}>
            <ArrowRightIcon sx={{ fontSize: 30 }}/>
          </Avatar>
        </ListItemAvatar>
          <ListItemText primaryTypographyProps={{fontSize: '18px', fontStyle:"bolder"}} primary={keyword.text} />
        </ListItem>
        )
      );

  return (
    <Card>
      <CardHeader title={title}/>
      {ListItemTest}
    </Card>
  );
}