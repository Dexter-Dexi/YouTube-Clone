import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

interface Ui {
  name: string;
  icon: any;
  selected: boolean;
}

export const categories: Ui[] = [
  { name: 'New', icon: HomeIcon, selected: true },
  { name: 'JS Mastery', icon: CodeIcon, selected: false },
  { name: 'Coding', icon: CodeIcon, selected: false },
  { name: 'ReactJS', icon: CodeIcon, selected: false },
  { name: 'NextJS', icon: CodeIcon, selected: false },
  { name: 'Music', icon: MusicNoteIcon, selected: false },
  { name: 'Education', icon: SchoolIcon, selected: false },
  { name: 'Podcast', icon: GraphicEqIcon, selected: false },
  { name: 'Movie', icon: OndemandVideoIcon, selected: false },
  { name: 'Gaming', icon: SportsEsportsIcon, selected: false },
  { name: 'Live', icon: LiveTvIcon, selected: false },
  { name: 'Sport', icon: FitnessCenterIcon, selected: false },
  { name: 'Fashion', icon: CheckroomIcon, selected: false },
  { name: 'Beauty', icon: FaceRetouchingNaturalIcon, selected: false },
  { name: 'Comedy', icon: TheaterComedyIcon, selected: false },
  { name: 'Gym', icon: FitnessCenterIcon, selected: false },
  { name: 'Crypto', icon: DeveloperModeIcon, selected: false },
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle =
  'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture =
  'http://dergipark.org.tr/assets/app/images/buddy_sample.png';
