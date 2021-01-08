import React from "react"

import * as S from "./styled"
class Newsletter extends React.Component {
  render() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") return (<></>)
    return <S.ConvertKitWrapper
    dangerouslySetInnerHTML={{
      __html: `<iframe src="https://maestria.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>`
    }}/>
  }
}

const RegisterForNews = () => <Newsletter />

export default RegisterForNews
