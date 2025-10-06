import Header from "./components/Header";
import Text from "./components/Text";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";
import Bar from "./components/Bar";
import Nav from "./components/nav";
import Link from "next/link";

export default function Home() {
  return (
      
      <div className="bg-[#FFFCF6]">
        <Bar />
        <Nav />
        
        <div className="max-w-[1512px] mx-auto px-[30px] py-[38px] md:px-[50px] lg:px-[80px] lg:py-[101px] xl:px-[131px]">
          <div className="
            grid grid-cols-1 
            md:grid-cols-2
            gap-10 md:gap-20 lg:gap-40 items-start">

            <div className="md:self-center space-y-[10px] min-auto lg:max-w-[550px]">
              <Header />
              <Text paragraph={<>
                <span className="text-[#D43925] font-bold">Amelia Dimoldenberg</span> (/dɪˈmoʊldənbɜːrɡ/ dim-OHL-dən-burg; born 30 January 1994) is an English comedian, writer and presenter. She is the creator and host of the web series Chicken Shop Date, in which she interviews celebrities in fried chicken restaurants while subjecting them to her sarcastic, deadpan, and awkward sense of humour.
              </>}/> 
              <Text paragraph={"In 2025, Dimoldenberg was named in Time magazine's inaugural “TIME100 Creators” list - branded by the publication as the 100 most influential digital voices."} />
            </div>

            <div>
              <div className="w-full min-w-[335px] md:max-w-[523px]">
                <ProfileCard />
              </div>
            </div>
          </div>
        </div>

        <Bar />

        <div className="max-w-full mx-auto px-[30px] py-[38px] md:px-[50px] lg:px-[80px] lg:py-[101px] xl:px-[131px]">
          <div className="max-w-[1000px] mx-auto text-center space-y-[20px]">
              <p className="font-[bogart] font-bold text-[30px] text-[#3B58CB]">Early life and education</p>
              <Text paragraph={<>
                <span className="text-[#D43925] font-bold">Amelia Dimoldenberg</span> was born on 30 January 1994. She is the daughter of retired librarian Linda and public relations executive and longtime Westminster City Council member Paul Dimoldenberg. She has a sister, Zoe. She is Jewish.
              </>}/> 
              <Text paragraph={"Dimoldenberg was raised in Marylebone. and attended St Marylebone School. She gained A-levels in English, art, politics, and IT,  she later studied for a foundation diploma in Art and Design and a BA in Fashion Communication at Central Saint Martins, she graduated in 2017."} />
          </div>
        </div>

        <Bar />

        <div className="w-full max-w-[2000px] mx-auto px-[30px] py-[50px] md:px-[50px] lg:px-[80px] lg:py-[101px] xl:px-[131px]">
          <div className="max-w-[1000px] mx-auto pb-[30px] text-center space-y-[20px]">
            <p className="font-[bogart] font-bold text-[30px] text-[#3B58CB]">Amelia's Work</p>
          </div>

          <div className="grid grid-cols-1 min-[1365px]:grid-cols-3">
            <Link href="/chicken-date-shop" className="block cursor-pointer transition-transform hover:scale-105">
              <Card 
                title={"Chicken Date Shop"} 
                imgSrc={"/asset/CSD_Andrew.webp"}
                imgAlt={"Amelia Dimoldenberg and Andrew Garfield"}
                description_1={`Chicken Shop Date started in 2014 after Amelia Dimoldenberg turned her magazine column into a YouTube series, interviewing grime artists in chicken shops under the guise of “dates.” The awkward, comedic tone—enhanced through editing—made the show stand out, even if it wasn’t as widely popular as formats like Hot Ones. It gained credibility by connecting with music subcultures, and Dimoldenberg became known for her playful, often absurd questions that challenged her guests’ public image.`}
              />
            </Link>

            <Link href="/dimz-inc"  className="block cursor-pointer transition-transform hover:scale-105">
              <Card 
                title={"Television"} 
                imgSrc={"/asset/Amelia+Dimz+Who+Cares.webp"}
                imgAlt={"Amelia Dimoldenberg in television"}
                description_1={`Dimoldenberg later expanded into television, presenting Channel 4’s Meet the Markles in 2018, which earned positive reviews. She appeared on The Big Narstie Show, reported for Don’t Hate the Playaz, and took part in Celebrity Come Dine with Me. More recently, she hosted Channel 4’s Celebrity Rebrand, joined Taskmaster’s New Year’s Treat, and appeared on The Great Stand Up to Cancer Bake Off in 2025, further cementing her presence on mainstream TV.`}
              />
            </Link>

            <Link href="/dimz-inc"  className="block cursor-pointer transition-transform hover:scale-105">
              <Card 
                title={"Other ventures"} 
                imgSrc={"/asset/THUMB_Reporting-From_Horizontal.webp"}
                imgAlt={"Amelia Dimoldenberg as a host"}
                description_1={`Outside of her shows, Dimoldenberg founded her production company Dimz Inc in 2018, producing projects beyond Chicken Shop Date. She built a reputation as a red carpet correspondent for major events like the BRITs, Golden Globes, and Oscars, while also becoming a brand ambassador for Olay, Bumble, and Levi’s. With most of her income now coming from ventures beyond her original series, she continues to expand her career as a presenter, entrepreneur, and cultural figure.`}
              />
            </Link>
          </div>
        </div>

        <Bar />
    </div>
  );
}
