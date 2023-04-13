import { useEffect, useState } from "react";
import FileUpload from "react-material-file-upload";
import { Card, CardHeader, Grid, Button } from '@mui/material';
import axios from 'axios';
import host from "../../../api/host";

const hostName = host;

export default function ROFileUploadForm({title}) {
  const [file, setFile] = useState([]);
  const [visible, setVisible] = useState(false);

  function handleClear() {
    setFile([]);
  }

  function handleSend(){
    const fd = new FormData();
    // key 값 지정
    Object.values(file).forEach((file) => fd.append("ro",file))
    
    axios.post(`${hostName}/upload/ro`, fd, {
      headers : { 
        'Content-Type' : 'multipart/form-data'
      }
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    console.log(file)
    if (file.length === 0) {
      setVisible(false);
    }
    else{
      setVisible(true);
    }
  }, [file]);

  return (
    <Card>
      <CardHeader title={title} />
      <Grid sx={{m:5 ,mb:2}}>
        <FileUpload value={file} onChange={setFile} multiple={false} />
      </Grid>
      {visible ? 
      <Grid sx={{mb:2}} position="relative" left="45%" right="45%" transform={("-45%","-45%")}>
        <Button onClick={()=>handleSend()}>Select</Button>
      </Grid>
      : <></>}
      {visible ?
      <Grid sx={{mb:2}} position="relative" left="45%" right="45%" transform={("-45%","-45%")}>
        <Button onClick={()=>handleClear()}>Clear</Button>
      </Grid> :
      <></>
      }
      
    </Card>
    
  );

}
