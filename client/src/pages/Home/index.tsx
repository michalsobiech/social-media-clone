import { ReactElement } from "react";
import PostList, { PostListType } from "./PostList";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function Home(): ReactElement {
  const { auth } = useAuth();

  if (!auth) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="flex w-full justify-center px-2">
      <PostList postList={list} />
    </div>
  );
}

const list: PostListType = [
  {
    id: "1",
    owner: "User1",
    body: "Post 1",
    likes: 100,
  },
  {
    id: "2",
    owner: "User2",
    body: "Post",
    likes: 200,
  },
  {
    id: "3",
    owner: "User3",
    body: "Post",
    likes: 300,
  },
  {
    id: "4",
    owner: "User4",
    body: "Post",
    likes: 300,
  },
  {
    id: "5",
    owner: "User5",
    body: "Post",
    likes: 300,
  },
  {
    id: "6",
    owner: "User6",
    body: "Post",
    likes: 300,
  },
  {
    id: "7",
    owner: "User7",
    body: "Post",
    likes: 300,
  },
];
