import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

import TextComponent from '../components/TextComponent';

const texts = [
  {
    title: 'Why this blog',
    lines: [
      {
        text: `Over the time, we have done many projects using many technologies and many approaches. 
        Each approach involves research, comparison with other implementations and choosing the best option. These investigations, which materialized in functionality, remained in my mind, in a directory on the hard disk, probably I selected some useful links, some links on the git with some similar examples, some discussions with colleagues or in the forum. This work, close over the years, is currently scattered in several parts, making it difficult to find the same solution after some time. Because of this, I decided to make a blog, where to gather all this information, to be in one place, where to document the ideas, the steps, the source code, thus making it easier for me to find solutions. for example, I remember the time when I used docker to implement a project as this process was challenging. The steps were looking for, implementing, testing, improving and possibly looking for another more optimal solution. This process lasts, it's not necessarily pleasant and sometimes frustrating. The same thing happened with kubernetes. I started locally with minikube, and previously I researched and implemented docker swarm. These processes would be much easier to implement if they were documented, with the exact steps or as accurate as possible, together with the corresponding code.
        `,
        css: ''
      }]
  },
  {
    title: 'Decision',
    lines: [{
      text: `I chose to make my own blog, my own domain, my own site security, because in this way I have high control over the entire content and the way it is presented. So, at the beginning of 2020, after about 20 years of work in this field, I decided to add each area where I have experience and add content, explanations or whatever would be useful. `,
      css:''
    }]
  },
  {
    title: "What's next",
    lines: [{
      text:`I will add this information one by one, the page improvements will be gradually. I am convinced that this approach will help me in the future and will help others. If anyone would like to prioritize information from a particular technology, please write to me. Thank you very much!`,
      css:''
    }]
  },
  {
    title: "Contact",
    lines: [{
      text:`twitter: @ClaudiuGombos
      git: claudiugombos, cg79 and 3 other private repositories`,
      css:''
    }]
  }

]

export default function Index({ data: { site } }) {
  return <Layout site={site}>
    {/* <TextComponent title={'sssssss'} text='aaaaaaaaa' />
    <TextComponent initialCounter={3} /> */}

    {texts.map((item, index) => (
      <TextComponent title={item.title} lines={item.lines} />
      ))}
    </Layout>;
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`;
