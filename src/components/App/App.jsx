import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "../SharedLayout/SharedLayout";
import GlobalStyles from "assets/global/GlobalStyles";

import HomePage from "pages/HomePage/HomePage";
import CatalogPage from "pages/CatalogPage/CatalogPage";
import FavoritesPage from "pages/FavoritesPage/FavoritesPage";

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Route>
                <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
        </>
    )
};
