import React from "react"
import PropTypes from "prop-types"

import getThemeColor from "../../utils/getThemeColor"

import * as S from "./styled"
import Icons from "./Icons"

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => {
  if(!slug) return <> </>
  const Icon = Icons[category]
  return (
    <S.PostItemLink
      to={slug}
      cover
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
    >
      <S.PostItemWrapper>
        <S.PostItemTagWrapper>
          <S.PostItemTag background={background}>
            <S.IconWrapper>
              <Icon />
            </S.IconWrapper>
          </S.PostItemTag>
          <span>{category}</span>
        </S.PostItemTagWrapper>
        <S.PostItemInfo>
          <S.PostItemDate>
            {date} • {timeToRead} min de leitura
          </S.PostItemDate>
          <S.PostItemTitle>{title}</S.PostItemTitle>
          <S.PostItemDescription>{description}</S.PostItemDescription>
        </S.PostItemInfo>
      </S.PostItemWrapper>
    </S.PostItemLink>
  )
}

PostItem.defaultProps = {
  timeToRead: 1
}

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
