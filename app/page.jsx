import Link from "next/link";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        LearnAIPrompt is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Link href="/homepage" className="max-w-[480px] bg-black rounded-full">
        {" "}
        Show All Posts
      </Link>
    </section>
  );
};

export default Home;
