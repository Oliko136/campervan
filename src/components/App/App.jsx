import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "../SharedLayout/SharedLayout";
import GlobalStyles from "assets/global/GlobalStyles";

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('../../pages/FavoritesPage/FavoritesPage'));

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
