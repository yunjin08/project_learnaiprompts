import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-gradient-to-r flex flex-col from-blue-300 via-sky-300 to-blue-300 shadow-inner  border-t-4 border-blue-200">
      <div
        className={
          " w-full items-center justify-center px-1 flex flex-col sm:flex-row "
        }
      >
        <div className="font-satoshi flex flex-col flex-1 footer:pl-28 sm:mt-8 mt-8 sm:pl-10">
          <div className="flex">
            <div className="flex items-center justify-center sm:min-w-[50px]">
              <Image
                src="/assets/images/logo2.svg"
                alt="logo"
                width={50}
                height={50}
                className="object-contain sm:w-10 w-7"
              />
            </div>
            <div className="flex justify-center items-center pl-1">
              <h1 className="semihead_text  text-center">LearnAIPrompts</h1>
            </div>
          </div>
          <p className=" flex items-start pl-1 sm:mt-2 font-satoshi text-gray-700  sm:text-center font-bold md:text-lg sm:text-md text-sm">
            Open-source AI Prompting Tool
          </p>
        </div>
        <div className="flex lg:pr-24 lg:space-x-28 footer:pr-5 md:space-x-14 md:pr-10 sm:space-x-12  sm:w-auto w-full">
          <div className="flex items-center flex-col sm:gap-2 font-satoshi sm:pt-10 pt-4 text-gray-700 w-full">
            <h2 className="font-semibold md:text-lg sm:text-base  text-sm">
              {" "}
              Follow Us
            </h2>
            <div className="flex  items-center justify-center space-x-3">
              <a
                href="https://www.facebook.com/donairejededison/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons/fb.png"
                  alt="Facebook"
                  width={33}
                  height={33}
                  className="object-contain md:w-8 sm:w-7 w-5"
                />
              </a>
              <a
                href="https://www.instagram.com/don.jedison/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons/ig.webp"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="object-contain md:w-10 sm:w-9 w-7"
                />
              </a>
              <a
                href="https://github.com/yunjin08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons/gh.png"
                  alt="GitHub"
                  width={30}
                  height={30}
                  className="object-contain md:w-7 sm:w-6 w-5"
                />
              </a>
            </div>
          </div>
          <div className="flex  items-center  flex-col sm:gap-2 font-satoshi sm:pt-10 pt-4  text-gray-700 w-full">
            <h2 className="font-semibold md:text-lg sm:text-base  text-sm">
              Email Us
            </h2>
            <p className=" font-satoshi py-1 text-gray-700 sm:text-base  text-xs">
              jjdonaire@up.edu.ph
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className=" sm:mt-6 mt-4 pt-1 bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300">
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-300 via-sky-300 to-blue-300">
          <p className="pt-1 font-satoshi  text-gray-700 sm:text-base text-xs">
            {" "}
            &#169;2023 jededisondonaire. github@yunjin08{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
