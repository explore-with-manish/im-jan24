import { Link, Route, Routes, useLocation } from "react-router-dom";

import HomeComponent from "../components/home/HomeComponent";
import AboutComponent from "../components/about/AboutComponent";
import ProductsComponent from "../components/products/ProductsComponent";
import AdminComponent from "../components/admin/AdminComponent";
import LoginComponent from "../components/login/LoginComponent";
import ProductDetailsComponent from "../components/products/ProductDetailsComponent";
import ProductNotSelectedComponent from "../components/products/ProductNotSelectedComponent";

const productsData = [
    {
        id: 1,
        name: "Item One",
        description:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        status: "Available"
    },
    {
        id: 2,
        name: "Item Two",
        description: "sunt aut facere ptio reprehenderit",
        status: "Not Available"
    },
    {
        id: 3,
        name: "Item Three",
        description: "provident occaecati excepturi optio reprehenderit",
        status: "Available"
    },
    {
        id: 4,
        name: "Item Four",
        description: "reprehenderit",
        status: "Not Available"
    }
];

export default (
    <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/products" element={<ProductsComponent productsData={productsData} />}>
            <Route path="" element={<ProductNotSelectedComponent />} />
            <Route path=":productId" element={<ProductDetailsComponent data={productsData} />} />
        </Route>
        <Route path="/admin" element={<AdminComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
);

const img404 = require('../assets/http-404.jpg');

function NoMatch() {
    let location = useLocation();
    return (
        <div className="text-center">
            <article>
                <h1 className="text-danger">No match found for <code>{location.pathname}</code></h1>
                <h4 className="text-danger">Please check your Route Configuration</h4>
                <div className="mt-5">
                    <img src={img404} alt="Not Found" className="rounded" />
                </div>
                <h2 className="mt-5">
                    <Link className="nav-link" to="/">Back to Home</Link>
                </h2>
            </article>
        </div>
    );
}