import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"

const ImagePoster = ({ src, caption }) => (
  <S.FigureWrapper>
    <figure>
      <img src={src} alt={caption}></img>
      <figcaption v-if="caption">{caption}</figcaption>
    </figure>
  </S.FigureWrapper>
)

ImagePoster.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
}

export default ImagePoster
