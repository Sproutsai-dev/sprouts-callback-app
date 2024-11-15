import React, { Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import RedirectEmailSequencing from "@/pages/redirect-email-sequencing";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/redirect-email-sequencing"
            element={<RedirectEmailSequencing />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
