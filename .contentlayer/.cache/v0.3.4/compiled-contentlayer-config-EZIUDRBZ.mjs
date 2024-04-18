// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: `about/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, "")
    }
  }
}));
var Projects = defineDocumentType(() => ({
  name: "Projects",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: true },
    tag: {
      type: "list",
      of: { type: "string" },
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, "")
    }
  }
}));
var rehypePrettyOptions = {
  theme: {
    light: "github-light",
    dark: "github-dark"
  },
  keepBackground: true
};
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [About, Projects],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      [
        // @ts-expect-error
        rehypePrettyCode,
        rehypePrettyOptions
      ]
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-EZIUDRBZ.mjs.map
