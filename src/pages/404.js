import React from "react"
import "../components/layout.css"
import NotFound from "../containers/PageNotFound"
import GlobalStyle from "../containers/PageNotFound/Common/global-styles";
import Fonts from "../containers/PageNotFound/Common/fonts";

const NotFoundPage = () => (
    <div>
        <Fonts/>
        <GlobalStyle />
        <main>
        <NotFound/>
        </main>
    </div>
)

export default NotFoundPage;