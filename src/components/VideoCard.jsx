import { Link } from 'react-router-dom';
import {
  Typography,
  Card,
  CardComponent,
  CardMedia,
  CardContent,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {
  demoVideoUrl,
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
} from '../utils/constants';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{ width: { md: '320px', xs: '100%', boxShadow: 'none', borderRadius: 0 }}}>

      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          sx={{
            width: 'auto',
            height: 180,
          }}
          alt={snippet?.title}
          image={snippet?.thumbnails?.high?.url}
        />
      </Link>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px', width: '358px' }}>

        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color='red'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize: 12, color: 'red', ml: '5px' }} />
          </Typography>
        </Link>

      </CardContent>
    </Card>
  );
};

export default VideoCard;
