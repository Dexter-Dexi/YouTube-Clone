import { VideoInterface } from '../utils/Interfaces';
import { CheckCircle } from '@mui/icons-material';
// import { Link } from 'react-router-dom';

export const ChannelCard = (props: VideoInterface) => {
  return (
    //TODO fix the channel page and videos
    // <Link to={`channel/${props.channelId}`}>
    <div className="min-h-[300px]   pb-5  text-stone-300 font-extrabold flex flex-col place-content-center mx-16  ">
      <img
        src={props.thumbnail[0].url}
        alt="LOGO"
        className="w-[200px] h-[200px] rounded-full object-contain"
      />
      <p className="m-4 text-center ">
        {props.channelTitle}
        <CheckCircle className="ml-3" />
      </p>
    </div>
    // </Link>
  );
};
