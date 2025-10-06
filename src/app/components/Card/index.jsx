export default function Card({title, imgSrc, imgAlt, description_1, description_2, description_3, description_4}) {
    return (
        <div className="bg-[#EBC9E4] w-auto min-w-[335px] md:max-w-[523px] rounded-[50px] font-[bogart] p-[40px] space-y-[20px] m-[20px]">
            <p className="font-bold text-[30px] text-[#D43925]">{title}</p>
            
            {imgSrc && <img 
                src={imgSrc}
                alt={imgAlt}
                className="block w-full h-[427px] my-[40px] object-cover object-top border-[12px] rounded-[31px] border-[#ffffff] box-border"
            />}

            <p className="text-[18px] leading-[22px]">{description_1}</p>
            <p className="text-[18px] leading-[22px]">{description_2}</p>
            <p className="text-[18px] leading-[22px]">{description_3}</p>
            <p className="text-[18px] leading-[22px]">{description_4}</p>
        </div>
    )
}