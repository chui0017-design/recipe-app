import Header from "../components/Header";
import Text from "../components/Text";
import Bar from "../components/Bar";
import Nav from "../components/nav";
import Image from 'next/image'

export default function ChickenDateShop() {
  return (
    <div className="bg-[#FFFCF6] min-h-screen">
      <Bar />
      <Nav />
      
        {/* Hero Section */}
        <div className="max-w-[1512px] mx-auto px-[30px] py-[20px] md:px-[50px] lg:px-[80px] lg:py-[40px] xl:px-[131px]">
          <div className="text-center space-y-[30px]">
            <h1 className="font-[bogart] font-bold text-[40px] md:text-[60px] lg:text-[80px] text-[#D43925]">
              Chicken Date Shop
            </h1>
            <div className="max-w-[900px] mx-auto">
              <Text paragraph="Where awkward interviews meet fried chicken in the most unexpected of ways." />
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-auto mx-auto px-[20px] pb-[50px] md:px-[50px] lg:px-[80px] xl:px-[131px]">
          <div className="w-full mx-auto">
            <img 
              src="/asset/chicken-shop-date_hero.avif" 
              alt="Chicken Shop Date hero image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <Bar />

        {/* section 1 */}
        <div className="max-w-full mx-auto px-[30px] py-[38px] md:px-[50px] lg:px-[80px] lg:py-[101px] xl:px-[131px]">
          <div className="space-y-[40px]">
            <h2 className="font-[bogart] font-bold text-[30px] text-[#3B58CB] text-center">
              The Show That Started It All
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="space-y-[20px]">
                <h3 className="font-[bogart] font-bold text-[24px] text-[#D43925]">
                  Origins & Concept
                </h3>
                <Text paragraph="Chicken Shop Date began as a column written by Dimoldenberg for the youth magazine The Cut, which was based at the Stowe Centre youth club on the Harrow Road. It was other members' interest in grime music that led her to interview grime artists, as she wanted to know more about the music." />
                <Text paragraph="Dimoldenberg had the idea to frame the interviews as dates, and the location of a chicken shop was chosen as it was 'somewhere you wouldn't usually go on a date'. The first filmed episode was released in March 2014, featuring a 'date' with grime MC Ghetts." />
              </div>
              
              <div className="w-full">
                <img 
                  src="/asset/chicken-shop-date_section.jpg" 
                  alt="Origins and concept of Chicken Shop Date"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <Bar />

        {/* Section 2 */}
        <div className="max-w-full mx-auto px-[30px] py-[38px] md:px-[50px] lg:px-[80px] lg:py-[101px] xl:px-[131px]">
          <div className="space-y-[40px]">
            <h2 className="font-[bogart] font-bold text-[30px] text-[#3B58CB] text-center">
              The Signature Style
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="w-full lg:order-first order-last">
                <img 
                  src="/asset/awkward moment.jpg" 
                  alt="The signature style of Chicken Shop Date"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-[20px] lg:order-last order-first">
                <Text paragraph="Dimoldenberg has described her persona in the show as 'an exaggerated version' of herself, adding that 'in the edit is where the character comes through, we chop and cut things, we make it more awkward'." />
                <Text paragraph="Dimoldenberg is known for surprising her chicken shop guests by posing preposterous questions about aspects of their image, art, or public perception. For example, she asked Phoebe Bridgers if dressing as a skeleton promotes 'an unhealthy body image'." />
              </div>
            </div>
          </div>
        </div>

        <Bar />

{/* Section 3 cards */}
        <div className="max-w-full mx-auto px-[30px] py-[38px] md:px-[50px] lg:px-[80px] lg:py-[101px] xl:px-[131px]">
            <h2 className="pb-[40px] font-[bogart] font-bold text-[30px] text-[#3B58CB] text-center">
             Some Episodes Here
            </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 - Damson Idris */}
            <div className="text-center">
              <a 
                href="https://youtu.be/wEFz0gRoXxg?si=qqaWEXs6nJHKlETT"
                target="_blank"
                className="block transition duration-300 ease-in-out hover:opacity-80"
              >
                <Image
                src="/asset/01_Damson Idris.jpeg"
                alt="Chicken Shop Date with Damson Idris"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg shadow-lg mb-4"
                />
              </a>
              <h3 className="font-[bogart] font-bold text-[18px] text-[#3B58CB]">
                Damson Idris
              </h3>
            </div>

            {/* Card 2 - Sabrina Carpenter */}
            <div className="text-center">
              <a 
                href="https://youtu.be/wEFz0gRoXxg?si=qqaWEXs6nJHKlETT"
                target="_blank"
                className="block transition duration-300 ease-in-out hover:opacity-80"
              >
                <Image 
                  src="/asset/02_Sabrina Carpenter.jpeg" 
                  alt="Chicken Shop Date with Sabrina Carpenter"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                />
              </a>
              <h3 className="font-[bogart] font-bold text-[18px] text-[#3B58CB]">
                Sabrina Carpenter
              </h3>
            </div>

            {/* Card 3 - Billie Eilish */}
            <div className="text-center">
              <a 
                href="https://youtu.be/Zt_snmlE8Dg?si=YYQRddPEjWmoVEKz"
                target="_blank"
                className="block transition duration-300 ease-in-out hover:opacity-80"
              >
                <Image 
                  src="/asset/03_Billie Eilish.jpeg" 
                  alt="Chicken Shop Date with Billie Eilish"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                />
              </a>
              <h3 className="font-[bogart] font-bold text-[18px] text-[#3B58CB]">
                Billie Eilish
              </h3>
            </div>

            {/* Card 4 - Paul Mescal */}
            <div className="text-center">
              <a 
                href="https://youtu.be/C1T_mVGe0hk?si=-UIkQiYdIhwcKKhh"
                target="_blank"
                className="block transition duration-300 ease-in-out hover:opacity-80"
              >
                <Image
                  src="/asset/04_Paul Mescal.jpeg" 
                  alt="Chicken Shop Date with Paul Mescal"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                />
              </a>
              <h3 className="font-[bogart] font-bold text-[18px] text-[#3B58CB]">
                Paul Mescal
              </h3>
            </div>

            {/* Card 5 - Cher */}
            <div className="text-center">
              <a 
                href="https://youtu.be/KkffkAD_xGo?si=OWXQ06v15kaVoQaF"
                target="_blank"
                className="block transition duration-300 ease-in-out hover:opacity-80"
              >
                <Image
                  src="/asset/05_Cher.jpeg" 
                  alt="Chicken Shop Date with Cher"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                />
              </a>
              <h3 className="font-[bogart] font-bold text-[18px] text-[#3B58CB]">
                Cher
              </h3>
            </div>

            {/* Card 6 - Jack Harlow */}
            <div className="text-center">
              <a 
                href="https://youtu.be/iQvBPfpPdoM?si=ugUy9AkvqbBl2USs"
                target="_blank"
                className="block transition duration-300 ease-in-out hover:opacity-80"
              >
                <Image
                  src="/asset/06_Jack Harlow.jpeg" 
                  alt="Chicken Shop Date with Jack Harlow"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                />
              </a>
              <h3 className="font-[bogart] font-bold text-[18px] text-[#3B58CB]">
                Jack Harlow
              </h3>
            </div>

            {/* Card 7 - Addison Rae */}
            <div className="text-center">
              <a 
                href="https://youtu.be/SD4r0UeJa8g?si=hbWTB7tn0KCKQ9KF"
                target="_blank"
                className="block transition duration-300 ease-in-out hover:opacity-80"
              >
                <Image 
                  src="/asset/07_Addison Rae.jpeg" 
                  alt="Chicken Shop Date with Addison Rae"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                />
              </a>
              <h3 className="font-[bogart] font-bold text-[18px] text-[#3B58CB]">
                Addison Rae
              </h3>
            </div>

            {/* Card 8 - Andrew Garfield */}
            <div className="text-center">
              <a 
                href="8. https://youtu.be/eFS5vxYlfY8?si=tQib4hDAIVan8h5q"
                target="_blank"
                className="block transition duration-300 ease-in-out hover:opacity-80"
              >
                <Image 
                  src="/asset/08_Andrew Garfield.jpeg" 
                  alt="Chicken Shop Date with Andrew Garfield"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                />
              </a>
              <h3 className="font-[bogart] font-bold text-[18px] text-[#3B58CB]">
                Andrew Garfield
              </h3>
            </div>

            {/* Card 9 - Jennifer Lawrence */}
            <div className="text-center">
              <a 
                href="youtube.com/watch?si=liEAHILQrdZofUTl&v=CVix78Az6bE&feature=youtu.be"
                target="_blank"
                className="block transition duration-300 ease-in-out hover:opacity-80"
              >
                <Image 
                  src="/asset/09_Jennifer Lawrence.jpeg" 
                  alt="Chicken Shop Date with Jennifer Lawrence"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg mb-4"
                />
              </a>
              <h3 className="font-[bogart] font-bold text-[18px] text-[#3B58CB]">
                Jennifer Lawrence
              </h3>
            </div>

          </div>
        </div>

      <Bar />
    </div>
  );
}