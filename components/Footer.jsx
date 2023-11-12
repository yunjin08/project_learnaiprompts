import Image from "next/image";

const Footer = () => {
  return (
    <section className="bg-gradient-to-r flex flex-col from-blue-300 via-sky-300 to-blue-300 shadow-inner  border-t-4 border-blue-200">
      <div
        className={
          " w-full items-center justify-center px-1 flex flex-col footer:flex-row "
        }
      >
        <div className="font-satoshi flex flex-col flex-1 footer:pl-28 mt-12">
          <div className="flex">
            <div className="flex items-center min-w-[50px]">
              <Image
                src="/assets/images/logo2.svg"
                alt="logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center pl-1">
              <h1 className="semihead_text text-center">LearnAIPrompts</h1>
            </div>
          </div>
          <p className="pl-1 mt-2 font-satoshi text-gray-700 font-bold text-xl max-w-[480px]">
            Open-source AI Prompting Tool
          </p>
        </div>
        <div className="flex lg:pr-20 lg:space-x-5 footer:pr-5 space-x-4">
          <div className="flex items-center w-[250px] flex-col gap-2 font-satoshi pt-10  text-gray-700">
            <h2 className="font-semibold text-lg"> Follow Us</h2>
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
                  className="object-contain"
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
                  className="object-contain"
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
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          <div className="flex  items-center w-[250px] flex-col gap-2 font-satoshi pt-10  text-gray-700">
            <h2 className="font-semibold text-lg">Email Us</h2>
            <p className="pt-1 font-satoshi py-1 text-gray-700">
              jjdonaire@up.edu.ph
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className=" mt-6 pt-1 bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300">
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-300 via-sky-300 to-blue-300">
          <p className="pt-1 font-satoshi  text-gray-700">
            {" "}
            &#169;2023 jededisondonaire. github@yunjin08{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
