import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CarCrash, CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";
import { Link } from "react-router-dom";

const prefURL = 'https://yt3.googleusercontent.com/';
const prefURL2 = 'https://yt3.googleusercontent.com/ytc/';

const ChannelCard = ({ channel, marginTop=0 }) => {

  let channelImgArr;
  let channelImgUrl;
  if (channel) {
    channelImgArr = (channel?.snippet?.thumbnails?.high?.url)?.split('/');
    channelImgUrl = `${prefURL}${channelImgArr[channelImgArr?.length-1]}`;
  }
  

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'none',
        borderRadius: '20px',
        width: {xs: '322px', md: '300p'},
        height: '320px',
        margin: 'auto',
        marginTop: `${marginTop}px`
      }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "red",
          }}
        >
          <CardMedia
            image={
              channel?.snippet?.thumbnails?.high?.url 
              ? channelImgUrl
              : demoProfilePicture
            }
            alt={channel?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              color: "black",
            }}/>
          <Typography variant="h6">
            {channel?.snippet?.title}
            <CheckCircle sx={{fontSize: 12, color: 'red', ml: '5px' }} />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
    
  );
};

export default ChannelCard;
