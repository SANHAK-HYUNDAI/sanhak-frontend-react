import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import { Card, CardHeader } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { pink } from '@mui/material/colors';

FolderList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array.isRequired,
};


export default function FolderList({title, list}) {

  const ListItemTest = (list.map((sub) =>
        <ListItem key={sub.rate} >
          <ListItemAvatar>
          <Avatar sx={{bgcolor : pink[100]}}>
            <TaskAltIcon />
          </Avatar>
        </ListItemAvatar>
          <ListItemText primaryTypographyProps={{fontSize: '12px'}} primary={sub.subCateName} 
                        secondaryTypographyProps={{fontSize: '13px'}} secondary= {(sub.rate.toFixed(4)*100).toFixed(2)}/>
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