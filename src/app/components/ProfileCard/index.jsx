export default function ProfileCard() {
    return (
        <div className="bg-[#3B58CB] w-auto min-w-[335px] md:max-w-[523px] h-auto text-white rounded-[50px] font-[bogart] p-[40px] m-[20px]">
            <img 
                src="/asset/Amelia_Dimoldenberg_Profile.jpg" 
                alt="Amelia Dimoldenberg holding wine" 
                className="block w-full h-[427px] object-cover object-top border-[12px] rounded-[31px] box-border"
            />

            <p className="text-[15px] leading-[50px] text-center">Dimoldenberg in 2024</p>

            <div className="text-[18px] space-y-[20px]">
                <div>
                    <p>Born : 30 January 1994 (age 31) - London England</p>
                    <p>Alma mater: Central Saint Martins (BA)</p>
                    <p>Occupations: Comedian, Presenter</p>
                    <p>Years active: 2014 - present</p>
                </div>
            
                <div>
                    <h3 className="font-bold">Comedy Career</h3>
                    <p>Genres: Deadpan, cringe comedy</p>
                </div>
                
                <div>
                    <h3 className="font-bold">YouTube Information</h3>
                    <p>Channel: Amelia Dimoldenberg</p>
                    <p>Subscribers: 3.16 million</p>
                    <p>Views: 881 million</p>
                </div>
                
                <div>
                    <h3 className="font-bold">Creator Awards</h3>
                    <p>100,000 subscribers 2018</p>
                    <p>1,000,000 subscribers 2022</p>
                </div>
            </div>
        </div>
    )
}