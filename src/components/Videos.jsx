import { Stack, Box, Typography } from "@mui/material"
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {

  console.log(videos)
  if (!videos.length) {
    return (<Typography>Loading...</Typography>)
  }

  return (
    <Stack flexDirection={ direction || 'row' } flexWrap='wrap' justifyContent='center' gap={2} >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}

    </Stack>
  )
}

export default Videos