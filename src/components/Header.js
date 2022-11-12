import React from "react";
import { Link } from 'react-router-dom'


const Header = () => {
    return(
        <header>
            <h1>My React App</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            BOOKS
                        </Link>
                    </li>
                    <li>
                        <Link to="/categories">
                            CATEGORIES
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}