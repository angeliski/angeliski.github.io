import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../components/Post/styled"

const BlogPage = ({ data, pageContext }) => {
  const post = data.mdx

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostHeader>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <MDXRenderer>{post.body}</MDXRenderer>
      </S.MainContent>
    </Layout>
  )
}

export const query = graphql`
  query Page($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      body
      timeToRead
    }
  }
`

export default BlogPage
