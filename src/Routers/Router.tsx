import { ReactNode } from "react";
import { Route, BrowserRouter, Routes,Link } from "react-router-dom";

interface Props {
    components: React.ReactNode[];
    titles: React.ReactNode[];
    links: string[];
  }
  
  function Router(props: Props) {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            {props.links.map((link: string, index: number) => {
              const icon: ReactNode = props.titles[index]; // Get the icon for the current link
              return (
                <li key={index}>
                  <Link to={'/' + link}>
                    {icon} {/* Render the icon */}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Routes>
          {props.links.map((link: string, index: number) => {
            const component: ReactNode = props.components[index];
            return <Route key={index} path={'/' + link} element={component} />;
          })}
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;