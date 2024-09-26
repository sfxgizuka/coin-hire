import LightLogo from "../../public/icons/lightlogo.svg";
import FooterCard from "./FooterCard";
import Code from "../../public/icons/code.svg";
import Cat from "../../public/icons/catright.svg";
import User from "../../public/icons/user.svg";
import Kor from "../../public/icons/kor.svg";
import Setting from "../../public/icons/setting.svg";
import DownFooter from "./DownFooter";

export default function Footer() {
    const currentYear = () => new Date().getFullYear();

    return (
        <div className="mt-24 text-[#5E626F] grid gap-11">

            <div className="flex justify-between w-full gap-4">


                <div className="grid lg:flex gap-6 items-center grid-cols-2 justify-between w-full lg:gap-4">
                    <div className="flex flex-col px-2 gap-4 col-span-2">
                        <LightLogo />
                        <h1 className="text-sm font-black text-[#343741]">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</h1>
                        <p className="text-[#5E626F] text-[13px] font-black">010-0000-0000</p>
                        <p className="text-[#5E626F] text-[13px] font-black">aaaaa@naver.com</p>
                    </div>

                    <FooterCard logo={<Code />} title={"해외 개발자 원격 채용"} description={"바로가기"} cat={<Cat />} />
                    <FooterCard logo={<User />} title={"외국인 원격 채용 (비개발)"} description={"바로가기"} cat={<Cat />} />
                    <FooterCard logo={<Kor />} title={"한국어 가능 외국인 채용"} description={"바로가기"} cat={<Cat />} />
                    <FooterCard logo={<Setting />} title={"해외 개발자 활용 서비스"} description={"바로가기"} cat={<Cat />} />
                </div>
            </div>

            <div className="flex justify-between w-full gap-4">
                <div className="flex px-2 gap-2">

                    <div className="">
                        <h1 className="text-sm font-black text-[#343741]">상호명</h1>
                        <p className="text-[#5E626F] text-[13px] font-black">하이퍼하이어</p>
                        <p className="text-[#5E626F] text-[13px] font-black">Hyperhire India Private Limited</p>
                    </div>
                    <div className="">
                        <h1 className="text-sm font-black text-[#343741]">대표 CEO</h1>
                        <p className="text-[#5E626F] text-[13px] font-black">김주현</p>
                        <p className="text-[#5E626F] text-[13px] font-black">Juhyun Kim</p>
                    </div>
                </div>

                <div className="grid lg:flex items-center justify-between w-full gap-4">

                    <DownFooter title={"사업자등록번호 CIN"} subtitle={"427-86-01187"} description={"U74110DL2016PTC290812 "} />
                    <DownFooter title={"주소 ADDRESS"} subtitle={"서울특별시 강남대로 479, 지하 1층 238호 "}
                        description={`D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 
110053 India`} />

                </div>
            </div>
            <div className=" font-black"> &#169; {currentYear()}  Hyperhire</div>


        </div>
    )
}
