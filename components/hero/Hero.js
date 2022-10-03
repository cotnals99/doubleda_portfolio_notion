import Link from "next/link";
import Animation from "./Animation";

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-900">
          더블다 포트폴리오
          <br className="hidden lg:inline-block" />
          다양한 체험을 준비하세요.
        </h1>
        <p className="mb-6 leading-relaxed">
          불러 고동을 꽃 무엇을 황금시대다. 있는 그들은 넣는 인생에 보이는
          얼마나 두기 것이다. 남는 튼튼하며, 옷을 시들어 작고 이 구하기
          봄바람이다. 보내는 이상은 품었기 거선의 대중을 만천하의 아름다우냐?
          얼음에 품고 고행을 듣는다. 새가 무엇을 설산에서 가치를 눈에 방지하는
          소금이라 바로 뿐이다. 많이 청춘의 것은 쓸쓸한 눈에 교향악이다. 뼈
          위하여서 우리의 꽃 같지 방황하였으며, 하였으며, 고행을 철환하였는가?
          앞이 인생을 피고, 봄바람이다. 얼마나 붙잡아 같은 굳세게 그들에게
          아름답고 뛰노는 봄바람이다. 이상, 되려니와, 따뜻한 트고, 것이다.
        </p>
        <div className="flex justify-center">
          <Link href="/project">
          <button className="btn-project">
            프로젝트 바로가기
          </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5">
        <Animation/>
      </div>
    </>
  );
};

export default Hero;
