import Image from "next/image";
import pandaFace from "@/assets/images/panda-face.png";
import pandaMarket from "@/assets/images/panda-market.png";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="max-w-screen-xl w-full p-4 md:p-6 flex flex-col items-center mx-auto">
        {/* 판다마켓 로고 클릭시 홈으로 이동 */}
        <div className="my-10 mx-auto">
          <Link href="/" className="flex gap-5 items-center justify-center">
            <Image
              src={pandaFace}
              alt="판다마켓"
              width={103}
              height={103}
              className="w-[52px] h-[52px] md:w-[103px] md:h-[103px] object-contain"
            />
            <Image
              src={pandaMarket}
              alt="판다마켓"
              width={266}
              height={90}
              className="w-[133px] h-[45px] md:w-[266px] md:h-[90px] object-contain"
            />
          </Link>
        </div>
        {children}
      </main>
    </>
  );
}
