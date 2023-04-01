import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { logout } from "../../store/actions/auth";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);

    const logOut = () => {
        navigate("/");
        dispatch(logout());
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setScrolled(window.pageYOffset > 100)
            );
        }
    }, []);

    return (
        <header className={`w-100 d-flex align-items-center ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <a href="/" className="title">Title</a>
                        <div className="menu d-flex">
                            {!currentUser ? (
                                <>
                                    <a href="/login" className="menu__item cursor-pointer">Login</a>
                                    <a href="/register" className="menu__item cursor-pointer">Register</a>
                                </>
                            ) : (
                                <>
                                    <a href="/cabinet" className="menu__item cursor-pointer">Cabinet</a>
                                    <div className="menu__item cursor-pointer" onClick={() => logOut()}>
                                        Log Out
                                    </div>
                                    <a href="/statistics" className="menu__item cursor-pointer">Statistics</a>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
