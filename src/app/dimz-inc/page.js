import Header from "../components/Header";
import Text from "../components/Text";
import Bar from "../components/Bar";
import Nav from "../components/nav";
import Image from 'next/image'

export default function DimzInc() {

  const ProjectCard = function(title, description, link, imageSrc, projects) {
    return (
      <div className="bg-[#EBC9E4] p-[30px] rounded-lg shadow-lg">
          <Image
            src={imageSrc}
            alt={`Dimz Inc ${title}`}
            width={400}
            height={250}
            className="w-full h-[250px] object-cover rounded-lg shadow-lg mb-4"
          />

        <h3 className="font-[bogart] font-bold text-[20px] text-[#3B58CB] mb-3">
          {title}
        </h3>

        <Text paragraph={description} />

        <ul className="mt-4 font-[bogart] space-y-2 text-[16px] text-[#3B58CB]">
          {projects.map(function(project, index) 
          {
            return <li key={index}> - {project}</li>;
          })}
        </ul>
      </div>
    );
  };


  return (
    <div className="bg-[#FFFCF6] min-h-screen">
      <Bar />
      <Nav />
      
        {/* Hero Section*/}
        <div className="max-w-[1512px] mx-auto px-[30px] py-[20px] md:px-[50px] lg:px-[80px] lg:py-[40px] xl:px-[131px]">
          <div className="text-center space-y-[30px]">
            <h1 className="font-[bogart] font-bold text-[40px] md:text-[60px] lg:text-[80px] text-[#D43925]">
              Dimz Inc.
            </h1>
            <div className="max-w-[900px] mx-auto">
              <Text paragraph="Dimz Inc. is a CREATIVE studio by Amelia Dimoldenberg." />
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-auto mx-auto px-[20px] pb-[50px] md:px-[50px] lg:px-[80px] xl:px-[131px]">
          <div className="w-full mx-auto">
            <img 
              src="/asset/dimzinc.webp" 
              alt="Dimz Inc. creative studio hero image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <Bar />

        {/* Section 2 */}
        <div className="max-w-full mx-auto px-[30px] py-[38px] md:px-[50px] lg:px-[80px] lg:py-[101px] xl:px-[131px]">
          <div className="max-w-[1000px] mx-auto text-center space-y-[30px]">
            <h2 className="font-[bogart] font-bold text-[30px] text-[#3B58CB]">
              About Dimz Inc
            </h2>
            <div className="space-y-[20px]">
              <Text paragraph="Specialising in original formats and branded entertainment, with a particular focus on short-form episodic content, Dimz Inc.'s expertise covers creative ideation, production and roll-out. The studio works with partners across broadcast, publishing and digital to bring stories to life." />
              <Text paragraph="From Chicken Shop Date to red carpet interviews and beyond, they're focused on creating engaging content, fuelled by a passion for pop culture. Allergic to being generic in any way, Dimz Inc is on a quest to shape the future of content creation." />
            </div>
          </div>
        </div>

        <Bar />

      {/* Section 3 */}
      <div className="max-w-full mx-auto px-[30px] py-[38px] md:px-[50px] lg:px-[80px] lg:py-[101px] xl:px-[131px]">
        <h2 className="pb-[40px] font-[bogart] font-bold text-[30px] text-[#3B58CB] text-center">
            Projects besides Chicken Date Shop
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {ProjectCard(
            "Commercial Projects",
            "We create compelling branded content and commercial campaigns that resonate with audiences while maintaining our signature creative edge and authenticity.",
            "https://www.dimzinc.com/projects/commercial-projects",
            "/asset/3.1_Commerical.webp",
            ["Brand partnership campaigns", "Product launch content", "Celebrity endorsement videos", "Social media activations"]
          )}

          {ProjectCard(
            "Amelia Reporting From",
            "Our signature red carpet and event coverage series, bringing Amelia's unique interviewing style to major entertainment events and premieres worldwide.",
            "https://www.dimzinc.com/projects/amelia-reporting-from",
            "/asset/3.2_Reporting.jpeg",
            ["Academy Awards coverage", "Golden Globe interviews", "Film premiere reports", "Fashion week content"]
          )}

          {ProjectCard(
            "Commissions",
            "Bespoke content creation for broadcasters and streaming platforms, developing original formats and series that push creative boundaries and engage modern audiences.",
            "https://www.dimzinc.com/projects/commissions",
            "/asset/3.3_Commissions.jpg",
            ["TV show development", "Streaming series concepts", "Digital-first formats", "Cross-platform content"]
          )}

          {ProjectCard(
            "Events",
            "Live event production and coverage, creating memorable experiences and content that capture the energy and excitement of special occasions and brand activations.",
            "https://www.dimzinc.com/projects/events",
            "/asset/3.4_Events.avif",
            ["Live event hosting", "Brand activation events", "Pop-up experiences", "Interactive installations"]
          )}

          </div>
        </div>
      <Bar />
    </div>
  );
}