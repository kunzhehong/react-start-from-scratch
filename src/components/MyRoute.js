import { useRoutes } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';

export function MyRoute() {
  // by using useRoutes hook, we don't need to declare react Class Component, but instead by function Component
  /* hook limitation: only can use in first layer of Component*/
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/about", element: <About /> },
  ]);

  return element;
}
