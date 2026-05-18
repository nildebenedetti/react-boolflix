import { NavLink } from "react-router";
import useTheme from "../hooks/useTheme";
import useAppData from "../hooks/useAppData";
import { useState } from "react";

function Header() {
    const { theme, toggleTheme } = useTheme();
    const [ userInput, setUserInput ] = useState('');
    const { setSearchQuery } = useAppData();

    const submitHandler = (event) => {
        event.preventDefault();
        setSearchQuery(userInput);
        
        // QUANDO preme bottone, allora invi il valore userInput e passalo come keyword di ricerca
        // devo scatenare lággiornamento delle sezioni dedicare a movies e seriers nel main
    };

    const changeHandler = (event) => {
        setUserInput(event.target.value);
        console.log('sono il change handler');
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
                <div className="container">
                    <NavLink className="navbar-brand fw-semibold" to="/">Boolflix</NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item ms-2">
                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={toggleTheme}
                                    aria-label="Cambia tema"
                                >
                                    {theme === 'light' ? '🌙' : '☀️'}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid d-flex justify-content-center">
                    <form onSubmit={submitHandler} className="d-flex" role="search">
                        <input className="form-control me-2" type="text" value={userInput} onChange={changeHandler} placeholder="Search"/>
                        <button className="btn btn-outline-success" type="submit" >Search</button>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;
