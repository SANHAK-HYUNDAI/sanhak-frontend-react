// material
import { IconButton } from '@mui/material';
import OpenInNew from '@mui/icons-material/OpenInNew';
// Icons
import Icon from '../../components/Iconify';
// ----------------------------------------------------------------------


export default function IconButtonStyles() {

  return (
    <>
      <IconButton component="a" href="https://blog.hyundai-transys.com/" startDecorator={<OpenInNew />}>
       <Icon icon="tabler:brand-blogger" />
      </IconButton>
      <IconButton component="a" href="https://post.naver.com/hyundai-transys" startDecorator={<OpenInNew />}>
        <Icon icon="tabler:circle-letter-n" />
      </IconButton>
      <IconButton component="a" href="https://www.instagram.com/hyundaitransys/" startDecorator={<OpenInNew />}>
        <Icon icon="ri:instagram-line" />
      </IconButton>
      <IconButton component="a" href="https://www.youtube.com/HyundaiTransys" startDecorator={<OpenInNew />}>
        <Icon icon="mingcute:youtube-line" />
      </IconButton>

    </>
  );
}
