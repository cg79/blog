import React, { Fragment, useState } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { createGlobalStyle } from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import 'prismjs/themes/prism-okaidia.css';

import "../styles/global.css";

import Link from './Link';
import { MDXLayoutComponents, MDXGlobalComponents } from './mdx';

library.add(fab, faCheckSquare, faCoffee, faBars)

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

  .navcontainer {
    border: 5px solid #ffcc5c;
    display: flex;
  }
  
  .navcontainer > li {
    flex: 1;
  }

  .search {  
    flex: 1;  
  }

  .navtoggle {
    display: none;
  }
  .navbody .hid {
    display: none;
  }

  @media all and (max-width: 1200px) {  
    
    .navcontainer {  
      flex-wrap: wrap;  
      border: 5px solid yellow;
    }  
    .navcontainer > li {  
      flex-basis: 33%;  
    }
  }

  @media all and (max-width: 800px) {  
    
    .navcontainer {  
      flex-wrap: wrap;  
      border: 5px solid green;
    }  
    .navcontainer > li {  
      flex-basis: 33%;  
    }
  }

  @media all and (max-width: 600px) {  

    .navcontainer {  
      border: 5px solid blue;
    }  
    .navcontainer > li {  
      flex-basis: 50%;  
    }  
    .search {  
      order: 1;  
    }  

    .navtoggle {
      align-self: flex-end;
      display: initial;
      cursor: pointer;
      margin-bottom: 15px;
    }

    .categories{
      display: flex;
      justify-content: space-evenly;
      list-style-type: none;    
    }

    .categories > li {  
      flex-basis: 50%;  
    }  
  }

  ul.navcontainer{
    list-style-type: none;
  }

  .categories{
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;    
  }

`;

const NAVIGATION = [
  { to: '/', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/algo', label: 'Algorithms' },
  { to: '/mongo', label: 'MongoDB' },
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
  const [navValues, setNavVis] = useState({
    navVis: false,
    extraNavcss: 'vis'
  });

  const toggleClick = () => {
    const newVis = !navValues.navVis;

    const newV = {
      navVis: newVis,
      extraNavcss: newVis ? 'hid' : 'vis'
    };
    setNavVis(newV);
  }

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
          <nav>
            <div className="navtoggle">
              <FontAwesomeIcon icon={["fa", "bars"]} style={{ color: "#000000" }} onClick={() => toggleClick()} />
            </div>
            <div className="navbody">
              <ul className={`${navValues.extraNavcss} navcontainer`}>
                <li><a className="dropdown-item" href="/">Home</a></li>
                <li>
                      <a className="dropdown-item" href="/algo">Algorithms</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/react">React</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/node">Node</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/mongo">Mongo</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/css">Css</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/angular">Angular</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/git">Git</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/reactnative">React native</a>
                  </li>
                  
                  <li>
                      <a className="dropdown-item" href="/javascript">Javascript</a>
                  </li>
                  <li>
                      <a className="dropdown-item" href="/dotnet">C#</a>
                  </li>
                  <li>
                      <a className="dropdown-item" href="/php">Php</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/kotlin">Kotlin</a>
                  </li>
                  <li>
                      <a className="dropdown-item" href="/golang">Golang</a>
                  </li>
                  <li>
                      <a className="dropdown-item" href="/testing">Testing</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/python">Python</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/gaming">Gaming</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/patterns">Patterns</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/security">Security</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/devops">DevOps</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/practices">Practices</a>
                  </li>

                  <li>
                      <a className="dropdown-item" href="/about">About</a>
                  </li>

                {/* <li className="search">
                  <input type="text" className="search-input" placeholder="Search" />
                </li> */}
                {/* <li>Logout</li> */}
              </ul>
            </div>
          </nav>

          <div className="col-md-9">
              {children}
            </div>
        </Fragment>
      </MDXProvider>
    </Fragment>
  )
}

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
