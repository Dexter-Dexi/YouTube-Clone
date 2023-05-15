import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { fetchURL } from '../utils/API';

import { VideoCard } from '../components/VideoCard';

export default function Video() {
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [relatedvideos, setRelatedVideos] = useState([]);

  // if

  useEffect(() => {
    fetchURL(`video?id=${id}`).then(data => {
      console.log(data);
      return setVideo(data);
    });

    fetchURL(`related?id=${id}`).then(data => {
      console.log(data);
      return setRelatedVideos(data.data);
    });

    // return () => {};
  }, [id]);

  return (
    <Box minHeight={'95vh'}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        sx={{ backgroundColor: '#000', height: '100vh' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px', p: 3 }}>
            <ReactPlayer
              controls
              url={`https://www.youtube.com/watch?v=${video?.id}`}
              className="react-player"
            />
            <Typography color={'#fff'} fontWeight={'bold'} py={2} variant="h5">
              {video?.title}
            </Typography>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              color={'#fff'}
              py={1}
              px={2}>
              <Link to={`/channels/${video?.channelId}`}>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {video?.channelTitle}
                </Typography>
              </Link>
              <Stack>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(video?.viewCount).toLocaleString()}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* VIDEO COMPONENT  */}
        <Stack
          direction={'column'}
          flexWrap={'wrap'}
          justifyContent={'start'}
          gap={2}
          bgcolor={'#000'}>
          {relatedvideos.map(video => (
            <Box key={video?.title}>{<VideoCard {...video} />}</Box>
          ))}
        </Stack>
        {/* VIDEO COMPONENT  */}
      </Stack>
    </Box>
  );
}
