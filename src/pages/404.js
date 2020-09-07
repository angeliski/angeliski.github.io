import React from "react"

import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const PageWrapper = styled.div`
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/257418/andy-holmes-698828-unsplash.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  
  width: 100%;
  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const PageTitle = styled.h1`
  color: var(--postColor);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
`
const PageText = styled.p`
  color: var(--postColor);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
`


export const BackLink = styled(AniLink)`
  transition: color 0.5s;
  color: var(--postColor);
  font-size: 2.1rem;

  &:hover {
    color: var(--highlight);
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageWrapper>
      <PageTitle>404</PageTitle>
      <PageText>Página não encontrada</PageText>
      <PageText>Volte até o último posto espacial e peça ajuda</PageText>
      <BackLink>Voltar</BackLink>
    </PageWrapper>
  </Layout>
)

export default NotFoundPage
