// import { useState, useEffect } from 'react';
// import { Box, Stack, Card, CardMedia } from '@mui/material';
// import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
// import { fetchChannelVideos, fetchChannelDetails } from '../utils/API';
// import { CheckCircle } from '@mui/icons-material';
// import { demoVideoUrl } from '../utils/constants';
// import { channelVideos, ChannelDetail } from '../utils/Interfaces';

// export default function Channel() {
//   const [channelDetils, setChannelDetils] = useState<ChannelDetail>();
//   const [videos, setVideos] = useState<channelVideos[]>([]);

//   const { id } = useParams();

//   useEffect(() => {
//     fetchChannelDetails(`channels?id=${id}&part=snippet,statistics`).then(
//       data => {
//         console.log(data);
//         return setChannelDetils(data);
//       }
//     );

//     fetchChannelVideos(
//       `search?channelId=${id}&part=snippet,id&order=date`
//     ).then(data => {
//       console.log(data);
//       return setVideos(data);
//     });
//   }, [id]);

//   console.log(videos, channelDetils);

//   return (
//     <Box>
//       <Box>
//         <div className="w-full h-[250px] gradent_Back"></div>
//       </Box>
//       <div className="min-h-[300px]   pb-5  text-stone-300 font-extrabold flex flex-col place-content-center mx-16  ">
//         <img
//           src={channelDetils.items[0].snippet.thumbnails.default.url}
//           alt="LOGO"
//           className="w-[200px] h-[200px] rounded-full object-contain"
//         />
//         <p className="m-4 text-center ">
//           {/* {channelDetils?.thumbnail[0].url} */}
//           {channelDetils.items[0].snippet.title}
//           <CheckCircle className="ml-3" />
//         </p>
//       </div>
//       {
//         <Stack
//           direction={'row'}
//           flexWrap={'wrap'}
//           justifyContent={'start'}
//           gap={2}>
//           {videos.map(video => (
//             <Box>
//               <div className="">
//                 <div className="min-h-[300px] bg-slate-400/20 rounded-xl hover:scale-105 transition pb-5 hover:ring-2 ring-red-500">
//                   <Card sx={{ borderRadius: 4 }}>
//                     <Link
//                       to={
//                         video.items[0].id
//                           ? `/video/${video.items[0].id}`
//                           : demoVideoUrl
//                       }>
//                       <CardMedia
//                         image={video.items[0].snippet.thumbnails.default.url}
//                         sx={{ width: 358, height: 180, borderRadius: 4 }}
//                       />
//                     </Link>
//                   </Card>
//                   <div className="px-3 py-2 text-justify  max-w-[350px] text-white font-bold">
//                     {video.items[0].snippet.title}
//                   </div>
//                   <p className="font-extrabold px-3 text-stone-400 ">
//                     {video.items[0].snippet.channelTitle}
//                     <CheckCircle className="ml-3" />
//                   </p>
//                 </div>
//               </div>
//             </Box>
//           ))}
//         </Stack>
//       }
//     </Box>
//   );
// }
