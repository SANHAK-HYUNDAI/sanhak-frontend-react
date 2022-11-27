import { useRef, useState } from 'react';
// material
import { Box, MenuItem, Stack, IconButton } from '@mui/material';
// Icons
import { Icon } from '@iconify/react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
// ----------------------------------------------------------------------

const SNS = [
  {
    value: 'blog',
    icon: '/static/icons/blog.svg',
    width :'5%',
  },
  {
    value: 'naver',
    icon: '/static/icons/naver.png',
    width : '30%',
  },
  {
    value: 'insta',
    icon: '/static/icons/insta.png',
    width : '30%',
  },
  {
    value: 'youtube',
    icon: '/static/icons/youtube.png',
    width : '30%',
  },
];

// ----------------------------------------------------------------------

export default function IconButtonStyles() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const url = "https://blog.hyundai-transys.com"
  const handleOpen = () => {
    console.log('The link was clicked.');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton>
       <Icon icon="tabler:brand-blogger" />
      </IconButton>
      <IconButton>
        <Icon icon="tabler:circle-letter-n" />
      </IconButton>
      <IconButton>
        <Icon icon="ri:instagram-line" />
      </IconButton>
      <IconButton>
        <Icon icon="mingcute:youtube-line" />
      </IconButton>
    </Stack>

    </>
  );
}
