import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { createGlobalStyle } from 'styled-components';

import 'prismjs/themes/prism-okaidia.css';

import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

import Link from './Link';
import { MDXLayoutComponents, MDXGlobalComponents } from './mdx';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  ${() => {
    /* Override PrismJS Defaults */ return null;
  }}

  pre {
    background-color: #2f1e2e !important;
    border-radius: 4px;
    font-size: 14px;
  }

  .gatsby-highlight-code-line {
    background-color: #4f424c;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 1em;
  }
`;

const NAVIGATION = [
  { to: '/', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/algo', label: 'Algorithms' },
  { to: '/mongo', label: 'MongoDB' },
  { to: 'https://roadtoreact.com', label: 'Courses' },
];

export default ({ site, frontmatter = {}, children }) => {
  const {
    title,
    description: siteDescription,
    keywords: siteKeywords,
  } = site.siteMetadata;

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = frontmatter;

  const keywords = (frontmatterKeywords || siteKeywords).join(', ');
  const description = frontmatterDescription || siteDescription;

  return (
    <Fragment>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      >
        <html lang="en" />
      </Helmet>

      <GlobalStyle />

      <MDXProvider
        components={{
          ...MDXLayoutComponents,
          ...MDXGlobalComponents,
        }}
      >
        <Fragment>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Algorithms
        </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/algo/arrays">Arrays</a>
                    <a class="dropdown-item" href="#">Stack</a>
                    <a class="dropdown-item" href="#">Tree</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/algo/regex">Regex</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-3">
              <ul>
                {NAVIGATION.map(navigation => (
                  <li key={navigation.label}>
                    <Link to={navigation.to}>{navigation.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-9">
              {children}
            </div>

          </div>

        </Fragment>
      </MDXProvider>
    </Fragment>
  );
};

export const pageQuery = graphql`
  fragment site on Site {
        siteMetadata {
      title
      description
      author
      keywords
    }
  }
`;
