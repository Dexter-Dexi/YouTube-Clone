import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

interface Props {
  catagory: string;
  set: (name: string) => void;
}

export const SideBar = ({ catagory, set }: Props) => {
  return (
    <Stack
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { sx: 'row', md: 'column' },
        color: 'white',
      }}>
      {categories.map(category => (
        <div
          key={category.name}
          className={`category-btn space-x-5 ${
            category.name === catagory && 'bg-[#FC1503]'
          } font-extrabold`}
          onClick={() => set(category.name)}>
          <span
            className={`text-red-500 ${
              category.name === catagory && 'text-white'
            }`}>
            <category.icon />
          </span>
          <span>{category.name}</span>
        </div>
      ))}
    </Stack>
  );
};
