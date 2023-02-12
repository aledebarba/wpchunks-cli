/* This file will create the React app inside the Wordpress page 
 * It is invoked by @components-engine/embed_module.php file (called from <theme-folder>/functions.php)
 * and inserts all elementes necessary to create the React app
 */
import "../styles/index.scss";  // Import the stylesheet
// import react
import React from "react";
import { render } from "react-dom";
// import _app object
import { _app } from "./wpchunk"; 
// import react browser router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import default pages
import {default as FrontPage} from "./pages/index"
import {default as ArchivePage} from "./pages/archive"
import {default as PostPage} from "./pages/post"
import {default as NotFoundPage} from "./pages/404"
// import loading fallback component 
import { Loading } from "./components/loading"

// create mains app
const Main = () => { 
    // create routes from wordpress pages as lazy loaded modules
    const pages = _app.pages();
    let pagesModules = [];
  
    pages.forEach( (page) => {
      pagesModules.push(
        { 
          Page: React.lazy( async () => { 
            try {
                  const module = await import(`./pages/${page.slug}`);
                  return module;
              } catch (err) {
                  return await import(`./pages/404`);
              } }), 
          path: `/${page.slug}`
        }
      );
    });  

    console.log( _app.primaryMenu() );
    
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/:slug" element={<NotFoundPage />} />
                    <Route path="/post/:slug" element={<PostPage />} />
                    <Route path="/archive" element={<ArchivePage />} />
                    <Route path="/archive/:slug" element={<ArchivePage />} />
                    <Route path="/" element={<FrontPage /> } />
                    { pagesModules.map( (Module) => <>
                        <Route 
                            path={Module.path} 
                            key={Module.path} 
                            element={
                                <React.Suspense fallback={<Loading/>} >
                                    <Module.Page />
                                </React.Suspense>}
                            />
                        </> )}
                </Routes>
            </BrowserRouter>
        </React.StrictMode> 
    )
};

// get the div element where the app will be rendered
const root = document.querySelector('[wpchunk-theme-frontend]');

// render the app
root && render( <Main />, root);