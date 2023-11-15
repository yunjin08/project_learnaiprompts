"use client";

import Feed from "@components/Feed";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Generate a unique cache-busting parameter (timestamp, random string, etc.)
        const cacheBuster = new Date().getTime();

        const response = await fetch(`/api/prompt?cacheBuster=${cacheBuster}`, {
          next: { revalidate: 1 },
        });

        const data = await response.json();
        setAllPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [router.pathname]);

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

      <Feed allPosts={allPosts} loading={loading} />
    </section>
  );
};

export default Home;
