"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

import Profile from "@components/Profile";

function Profiles() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/userprofile/${params.userId}`);
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [params.userId]);

  return (
    <Profile
      name={`${
        posts[0]?.creator?.username
          ? posts[0]?.creator?.username.charAt(0).toUpperCase() +
            posts[0]?.creator?.username.slice(1)
          : "unknown"
      }`}
      desc={`Welcome to ${
        posts[0]?.creator?.username.charAt(0).toUpperCase() +
          posts[0]?.creator?.username.slice(1) || "unknown"
      }'s profile page`}
      data={posts}
      loading={loading}
    />
  );
}

export default Profiles;
