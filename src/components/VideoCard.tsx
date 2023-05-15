import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle, Padding } from '@mui/icons-material';
import { VideoInterface } from '../utils/Interfaces';
import {
  demoChannelTitle,
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from '../utils/constants';

export const VideoCard = (props: VideoInterface) => {
  // console.log(props.title);
  return (
    <div className="min-h-[300px] bg-slate-400/20 rounded-xl hover:scale-105 transition pb-5 hover:ring-2 ring-red-500">
      <Card sx={{ borderRadius: 4 }}>
        <Link to={props.videoId ? `/video/${props.videoId}` : demoVideoUrl}>
          <CardMedia
            image={props.thumbnail[0].url}
            sx={{ width: 358, height: 180, borderRadius: 4 }}
          />
        </Link>
      </Card>
      <div className="px-3 py-2 text-justify  max-w-[350px] text-white font-bold">
        {props.title}
      </div>
      <p className="font-extrabold px-3 text-stone-400 ">
        {props.channelTitle}
        <CheckCircle className="ml-3" />
      </p>
    </div>
  );
};
