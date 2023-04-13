import { useEffect, useState } from "react";
import FileUpload from "react-material-file-upload";
import { Card, CardHeader, Grid } from '@mui/material';

export default function CAFileUploadForm({title}) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (files) {
      console.log("CA:",files);
    }
  }, [files]);

  return (
    <Card>
      <CardHeader title={title} />
      <Grid sx={{m:5}}>
        <FileUpload value={files} onChange={setFiles} multiple={false} />
      </Grid>
    </Card>
  );

}
