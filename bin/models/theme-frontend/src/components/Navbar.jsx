import { _app, Styles } from "../wpchunk";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
// browser-sync start  -p "https://hysteriaetc.local/" -f "build" 
export const Navbar = () => (
    <div className="navbar">
        <Styles css={`
            .menu-items { 
                display: flex;
                gap: 1rem;
                align-items: center;
                justify-content: center;
                position: fixed;
                height: 3rem;
                width: 100vw;
                background-color: #4a4a4a;                
            }

            .menu-items a {
                display: flex;
                align-items: center;
                gap: 4px;
                color: #d3d3d3;                
                text-decoration: none;
                transition: all 0.3s ease-in-out;
                cursor: pointer;
            }

            .menu-items a:hover {
                color: #fff;
                transition: all 0.3s ease-in-out;
                transform: scale(1.02);
            }
        `}/>
        <div className="menu-items">
            {_app.primaryMenu().map((item) => (
                <>
                    {item.object === "page" && (
                        <>
                            {item.slug === "home" && (
                                <Link to="/">{item.title}</Link>
                            )}
                            {item.slug !== "home" && (
                                <Link to={`/${item.slug}`}>{item.title}</Link>
                            )}
                        </>
                    )}
                    {item.object === "custom" && (
                        <a href={item.url} target={item.target}>
                            <Icon icon={item.attr} />
                            {item.title}
                        </a>
                    )}
                </>
            ))}
        </div>
    </div>
);
