import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled.js"

const YoutubeVideoRender = ({ width, height, videoId }) => (
  <S.YoutubeVideoWrapper>
    <iframe
      title={videoId}
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}`}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </S.YoutubeVideoWrapper>
)

YoutubeVideoRender.defaultProps = {
  width: 560,
  height: 315,
}

YoutubeVideoRender.propTypes = {
  videoId: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default YoutubeVideoRender
