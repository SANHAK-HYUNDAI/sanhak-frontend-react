import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import { Card, CardHeader } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { purple } from '@mui/material/colors';

FolderList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array.isRequired,
};


export default function FolderList({title, list}) {
  const ListItemTest = (list.map((sub) =>
        <ListItem key={sub.id} value={sub.subcategory} >
          <ListItemAvatar>
          <Avatar sx={{bgcolor : purple[100]}}>
            <TaskAltIcon />
          </Avatar>
        </ListItemAvatar>
          <ListItemText primaryTypographyProps={{fontSize: '12px'}} primary={sub.subcategory} 
                        secondaryTypographyProps={{fontSize: '13px'}} secondary= {sub.probability}/>
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