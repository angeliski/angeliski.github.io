import React from "react"
import PropTypes from "prop-types"

import Gist from 'super-react-gist' 


const GithubGist = ({gistId}) => (
  <Gist url={`https://gist.github.com/${gistId}`} />
)

GithubGist.propTypes = {
    gistId: PropTypes.string.isRequired,
  }
  

export default GithubGist
