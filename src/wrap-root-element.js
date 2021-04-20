import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Gist from 'super-react-gist'

import Signature from './components/Signature';
import ImagePoster from './components/ImagePoster';
import RegisterForNews from './components/RegisterForNews';
import YoutubeVideoRender from './components/YoutubeVideoRender';
import GithubGist from './components/GithubGist';

const components = {
    Signature,
    ImagePoster,
    RegisterForNews,
    YoutubeVideoRender,
    GithubGist,
    Gist,
}
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)