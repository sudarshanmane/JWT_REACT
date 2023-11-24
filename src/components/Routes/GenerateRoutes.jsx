import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

export const RenderRoutes = (mainRoutes) => {
  const layouts = mainRoutes.map((el, index) => (
    <Route key={index} path={el.path} element={el.layout}>
      {el.routes.map(
        ({ component, path }, subIndex) =>
          component &&
          path && <Route key={subIndex} element={component} path={path} />
      )}
    </Route>
  ));

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/mainLayout/home" />}></Route>
      {layouts}
    </Routes>
  );
};
