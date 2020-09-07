import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import { MDXProvider } from "@mdx-js/react"

import ImagePoster from "../ImagePoster"
import Signature from "../Signature"
import YoutubeVideoRender from "../YoutubeVideoRender"
import GithubGist from "../GithubGist"

import Sidebar from "../Sidebar"
import MenuBar from "../MenuBar"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"

const shortcodes = { Signature, ImagePoster, YoutubeVideoRender, GithubGist }

const Layout = ({ children }) => {
  return (
    <MDXProvider components={shortcodes}>
      <S.LayoutWrapper>
        <GlobalStyles />
        <TransitionPortal level="top">
          <Sidebar />
        </TransitionPortal>
        <S.LayoutMain>{children}</S.LayoutMain>
        <TransitionPortal level="top">
          <MenuBar />
        </TransitionPortal>
      </S.LayoutWrapper>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
