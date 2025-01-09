import Image from "next/image";

export default function Introduction() {
  return (
    <>
      <div className="w-screen h-[500px] bg-slate-800 p-8">
        <div className="flex justify-between items-center">
          <div>
            <div>
              <p className="text-[#D3EE98] text-2xl font-bold my-4">
                Teknik Informatika
              </p>
              <h2 className="text-7xl text-white">Hello, I&apos;m</h2>
              <h2 className="text-7xl text-[#72BF78]">
                Muhammad Nurfatkhur Rahman
              </h2>
            </div>
            <div className="my-8">
              <p className="text-white max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                sed dignissimos, cumque nemo sit quas fugit distinctio
                consectetur eius quisquam.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="relative w-96 h-96">
            <Image
              src={"/img/user.jpg"}
              alt="Muhammad Nurfatkhur Rahman"
              fill={true}
              priority={true}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
