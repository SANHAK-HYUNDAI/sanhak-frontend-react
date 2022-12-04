import React from 'react';
// import ReactWordcloud from 'react-wordcloud';
import { Card, CardHeader } from '@mui/material';

import words from "./words";

export default function FolderList({title, list}) {

    return (
        <Card>
          <CardHeader title={title}/>
<<<<<<< Updated upstream
           {/* <ReactWordcloud words={words} /> */}
=======
            {/* <ReactWordcloud words={words} /> */}
>>>>>>> Stashed changes
        </Card>
      );
    }