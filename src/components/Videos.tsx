import { Stack } from '@mui/material';
import { VideoInterface } from '../utils/Interfaces';

export const Videos = (props: VideoInterface) => {
  console.log(props);

  return (
    <Stack
      direction={'row'}
      flexWrap={'wrap'}
      justifyContent={'start'}
      gap={2}></Stack>
  );
};
