import { type ReactNode, Suspense } from "react";
import { getTweet } from "react-tweet/api";
import {
  EmbeddedTweet,
  TweetNotFound,
  TweetSkeleton,
  type TweetProps,
} from "react-tweet";
import { Caption } from "./caption";
import "./tweet.css";

interface TweetArgs {
  id: string;
  caption: ReactNode;
}

const TweetContent = async ({ id, components }: TweetProps) => {
  if (!id) return <TweetNotFound />;

  try {
    const tweet = await getTweet(id);
    if (!tweet) return <TweetNotFound />;
    return <EmbeddedTweet tweet={tweet} components={components} />;
  } catch (error) {
    console.error("tweet fetch error", error);
    return <TweetNotFound />;
  }
};

export const ReactTweet = (props: TweetProps) => (
  <Suspense fallback={<TweetSkeleton />}>
    {/* @ts-ignore: Async components are valid in the app directory */}
    <TweetContent {...props} />
  </Suspense>
);

export async function Tweet({ id, caption }: TweetArgs) {
  return (
    <div className="tweet my-6">
      <div className={`flex justify-center`}>
        <ReactTweet id={id} />
      </div>
      {caption && <Caption>{caption}</Caption>}
    </div>
  );
}
