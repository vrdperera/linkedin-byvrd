import { getProviders, signIn } from 'next-auth/react';

import Image from 'next/image';
import Head from 'next/head';

import HeaderLinks from '../components/headerLinks';
// mui
import ExploreIcon from '@mui/icons-material/Explore';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function Home({ providers }) {
  return (
    <div className="space-y-10">
      <Head>
        <title>Linkedin Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-around py-4">
        <div className="relative w-36 h-10">
          <Image
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            alt="linkedin-logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="flex items-center  sm:divide-x divide-blue-400  gap-3 ">
          <div className="hidden sm:flex space-x-8">
            <HeaderLinks Icon={ExploreIcon} text="Explore" />
            <HeaderLinks Icon={EngineeringIcon} text="Engineering" />
            <HeaderLinks Icon={FingerprintIcon} text="Fingerprint" />
            <HeaderLinks Icon={CloudDoneIcon} text="Cloud" />
          </div>

          {Object.values(providers).map((prodiver) => (
            <div key={prodiver.name}>
              <div className="pl-4">
                <button
                  onClick={() => signIn(prodiver.id, { callbackUrl: '/' })}
                  className="text-blue-700 font-semibold
            border-2 border-blue-400  px-5  py-1.5 rounded-full transition-all  hover:border-2  hover:border-blue-700"
                >
                  Sign in
                </button>
              </div>
            </div>
          ))}
        </div>
      </header>

      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto ">
        <div className="space-y-6  xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">
            Welcome to your professional <br /> community
          </h1>

          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl">Search for a job</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Find a person you know</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Learn a new skill</h2>
              <ArrowForwardIosRoundedIcon className="text=gray-700" />
            </div>
          </div>
        </div>

        <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-0">
          <Image src="/hero-img.svg" layout="fill" priority alt="" />
        </div>
      </main>
    </div>
  );
}

export default Home;

export async function getServerSideProps(ctx) {
  const providers = await getProviders();
  return { props: { providers } };
}
