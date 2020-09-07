import React from "react"

import * as S from "./styled"
class ConvertKitForm extends React.Component {
  componentDidMount() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") return
    const script = document.createElement("script")
    script.src = "https://angeliski.ck.page/6e136032a3/index.js"
    script.async = true
    script.setAttribute("data-uid", "6e136032a3")
    document.querySelector("#convert-kit").appendChild(script)
  }

  render() {
    return <S.ConvertKitWrapper id="convert-kit" />
  }
}

const RegisterForNews = () => <ConvertKitForm />

export default RegisterForNews
