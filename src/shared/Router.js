import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import GlobalStyle from 'GlobalStyles';
import Layout from "components/Layout";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/:id" element={<Detail/>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;