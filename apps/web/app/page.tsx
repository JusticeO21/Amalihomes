import type { EntrySkeletonType } from "contentful";
import { getEntries } from "../lib/contentful/contentful";

interface CartEntry extends EntrySkeletonType {
  fields: {
    title: string;
    // add other cart fields here
  };
  contentTypeId: "cart";
}

export default async function Home() {
  const carts = await getEntries<CartEntry>("cartDetail", {});
  console.log("from contentful", carts);

  return <div></div>;
}
