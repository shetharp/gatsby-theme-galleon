/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Tag from "../../../components/tag";

type Props = {
  data: {
    allPost: any;
    [key: string]: any;
  };
  pageContext: any;
};

export default function MinimalBlogCoreTag({ data, pageContext }: Props) {
  const { allPost } = data;

  return <Tag posts={allPost.nodes} pageContext={pageContext} />;
}
