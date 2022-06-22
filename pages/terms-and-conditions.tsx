import { Layout } from '@components/common';
import MarkdownPage, {
  IFrontmatter,
} from '@components/common/Page/MarkdownPage';
import { readMarkdownFile } from '@lib/mdxUtils';
import { GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

type TermsAndConditionsPage = {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: IFrontmatter;
  locale?: string;
};

const TermsAndConditionsPage = ({
  frontmatter,
  mdxSource,
  locale,
}: TermsAndConditionsPage) => {
  return (
    <MarkdownPage
      locale={locale}
      mdxSource={mdxSource}
      frontmatter={frontmatter}
    />
  );
};

export default TermsAndConditionsPage;
TermsAndConditionsPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { content, data } = readMarkdownFile('algemene-voorwaarden', locale!);

  const mdxSource = content ? await serialize(content, { scope: data }) : null;

  return {
    props: {
      mdxSource,
      frontmatter: data,
      locale,
    },
  };
};
