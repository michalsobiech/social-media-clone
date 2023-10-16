import { ReactElement } from "react";
import { PostType } from "./Post";
import { Post } from "./Post";

export type PostListType = PostType[];

type PostListProps = {
  postList: PostListType;
};

export default function PostList({ postList }: PostListProps): ReactElement {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-y-2 py-4">
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
