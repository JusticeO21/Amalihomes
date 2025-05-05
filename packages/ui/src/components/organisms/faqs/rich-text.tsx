import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";
import { ReactNode } from "react";

type NodeType = {
  content: {
    nodeType: string;
    value?: string;
  }[];
  data: {
    uri?: string;
  };
};
const options = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <strong className="font-bold">{text as string}</strong>,
    [MARKS.ITALIC]: (text: ReactNode) => <em className="italic">{text as string}</em>,
    [MARKS.UNDERLINE]: (text: ReactNode) => <u className="underline">{text as string}</u>,
    [MARKS.CODE]: (text: ReactNode) => <span className="line-through bg-gray-100 px-1 rounded">{text as string}</span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: unknown, children: ReactNode) => <p>{children}</p>,
    [BLOCKS.UL_LIST]: (node: unknown, children: ReactNode) => (
      <ul className="list-disc pl-5 mb-4 space-y-1">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: unknown, children: ReactNode) => (
      <ol className="list-decimal pl-5 mb-4 space-y-1">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: unknown, children: ReactNode) => <li className="mb-1">{children}</li>,
    [BLOCKS.QUOTE]: (node: unknown, children: ReactNode) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic text-gray-600">{children}</blockquote>
    ),

    [INLINES.HYPERLINK]: (node: NodeType) => {
      const text = node.content.find((item) => item.nodeType === "text")?.value;
      const href = node.data.uri;
      return (
        <Link
          href={href ?? ""}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </Link>
      );
    },
  },
};

export default options;
