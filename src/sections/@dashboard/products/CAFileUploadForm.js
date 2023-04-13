import { useEffect, useState } from "react";
import FileUpload from "react-material-file-upload";
import { Card, CardHeader, Grid, Button } from '@mui/material';
import axios from 'axios';
import host from "../../../api/host";

const hostName = host;

export default function CAFileUploadForm({title}) {
  const [file, setFile] = useState([]);
  const [visible, setVisible] = useState(false);

  /* API 호출 방식
  useEffect(() => {
    const fetchDatas = async () => {
     
        const response = await axios.get(
          `${hostName}/api/ROs/statistics`
        );
        setROwords(response.data.keywords);
    };
  
    fetchDatas();
  }, []); 
  */

  function handleClear(){
    axios.get(`${hostName}/upload/clear`)
  }

  function handleSend(){
    const fd = new FormData();
    // key 값 지정
    fd.append("ca",file);

    axios.post(`${hostName}/upload/ca`, fd, {
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
    if (file) {
      console.log("CA:",file);
      setVisible(true);
    }
    else{
      setVisible(false);
    }
  }, [file]);

  return (
    <Card>
      <CardHeader title={title} />
      <Grid sx={{m:5, mb:2}}>
        <FileUpload value={file} onChange={setFile} multiple={false} />
      </Grid>
      <Grid sx={{mb:2}} position="relative" left="45%" right="45%" transform={("-45%","-45%")}>
        <Button hidden={!visible} onClick={()=>handleSend()}>Select</Button>
      </Grid>
      <Grid sx={{mb:2}} position="relative" left="45%" right="45%" transform={("-45%","-45%")}>
        <Button onClick={()=>handleClear()}>Clear</Button>
      </Grid>
    </Card>
    
  );

}
