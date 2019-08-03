import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Layout from '../components/Layout';
import Link from '../components/Link';

const CategoryList = ({ list = [] }) => (
  <Fragment>
    Categories 1:
    <ul>
      {list.map(category => (
        <li key={category}>
          <Link to={`/${category}`}>{category.split("/").pop()}</Link>
          {/* <Link to={`/categories/${category}`}>{category}</Link> */}
        </li>
      ))}
    </ul>
  </Fragment>
);

export default function Post({
  data: { site, mdx },
  pageContext: { next, prev },
}) {
  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <h1>{mdx.frontmatter.title}</h1>
      <h2>{mdx.frontmatter.date}</h2>
      <h2>{mdx.frontmatter.baselink}</h2>
      

      {mdx.frontmatter.banner && (
        <Img
          sizes={mdx.frontmatter.banner.childImageSharp.sizes}
          alt={site.siteMetadata.keywords.join(', ')}
        />
      )}

      <CategoryList list={mdx.frontmatter.categories} />

      <hr />

      <MDXRenderer>{mdx.code.body}</MDXRenderer>

      <div>
        

        {prev && (
          <span>
            Previous{' '}
            <Link to={prev.fields.slug}>{prev.fields.title}</Link>
          </span>
        )}
        {next && (
          <span>
            Next{' '}
            <Link to={next.fields.slug}>{next.fields.title}</Link>
          </span>
        )}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        categories
        keywords
      }
      code {
        body
      }
    }
  }
`;
