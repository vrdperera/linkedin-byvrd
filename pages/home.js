import Image from 'next/image';
import HeaderLinks from '../components/headerLinks';

// mui
import ExploreIcon from '@mui/icons-material/Explore';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

function Home() {
  return (
    <div>
      <header className="flex justify-around py-4">
        <div className="relative w-36 h-10">
          <Image
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            alt="linkedin-logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="flex items-center  sm:divide-x divide-gray-400 ">
          <div className="hidden sm:flex space-x-8">
            <HeaderLinks Icon={ExploreIcon} text="Explore" />
            <HeaderLinks Icon={EngineeringIcon} text="Engineering" />
            <HeaderLinks Icon={FingerprintIcon} text="Fingerprint" />
            <HeaderLinks Icon={CloudDoneIcon} text="Cloud" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
