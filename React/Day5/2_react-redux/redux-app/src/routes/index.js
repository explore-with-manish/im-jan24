import { lazy, Suspense } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import LoaderAnimation from '../components/common/LoaderAnimation';

const HomeComponent = lazy(() => import("../components/home/HomeComponent"));
const AboutComponent = lazy(() => import("../components/about/AboutComponent"));

export default (
    <Suspense fallback={<LoaderAnimation />}>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    </Suspense>
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