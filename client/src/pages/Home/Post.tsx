import { HandThumbUpIcon as HandThumbUpIconOutline } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
// import { HandThumbUpIcon as HandThumbUpIconSolid } from "@heroicons/react/24/solid";

export type PostType = {
  id: string;
  owner: string;
  body: string;
  image?: File;
  likes: number;
};

type PostProps = {
  post: PostType;
};

export function Post({ post }: PostProps): ReactElement {
  const { owner, body, likes } = post;

  return (
    <div className="w-full rounded-lg bg-fb-gray-600 px-2 text-fb-gray-100">
      <div className="flex flex-col">
        {/* Author */}
        <div className="w-full py-2">
          <b>{owner}</b>
        </div>

        {/* Body */}
        <div className="w-full py-2">{body}</div>

        {/* Image */}

        {/* Likes */}
        <div className="w-full border-t border-fb-gray-400 py-1">
          <button className="flex flex-row items-center gap-x-2 rounded px-2 py-1 hover:bg-fb-gray-400">
            <HandThumbUpIconOutline className="h-5 w-5" />
            {likes}
          </button>
        </div>
      </div>
    </div>
  );
}
