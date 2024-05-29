import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Nav() {
  return (
    <div className="nav-div">
      <header className="header">
        <img src="img/omnifood-logo.png" alt="omnifood logo" className="logo" />
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li key={1}>
              <HashLink to="#section-how">
                <a href="#" className="main-nav-link" key={1}>
                  How it works
                </a>
              </HashLink>
            </li>
            <li key={2}>
              <HashLink to="#section-meals">
                <a href="#" className="main-nav-link" key={2}>
                  Meals
                </a>
              </HashLink>
            </li>

            <li key={3}>
              <HashLink to="#section-testimonials">
                <a href="#" className="main-nav-link" key={3}>
                  Testimonials
                </a>
              </HashLink>
            </li>

            <li key={4}>
              <HashLink to="#section-pricing">
                <a href="#" className="main-nav-link" key={4}>
                  Pricing
                </a>
              </HashLink>
            </li>

            <li>
              <a href="#" className="main-nav-link nav-cta">
                Try for free
              </a>
            </li>
          </ul>
        </nav>

        <button className="btn-mobile-nav">
          <ion-icon
            className="icon-mobile-nav"
            name="menu-outline"
            style={{ width: "4.8rem", height: "4.8rem", color: "#333" }}
          ></ion-icon>
        </button>
        {document.addEventListener("DOMContentLoaded", function () {
          const btnNavEl = document.querySelector(".btn-mobile-nav");
          const headerEl = document.querySelector(".header");

          btnNavEl.addEventListener("click", function () {
            console.log("clicked");
            headerEl.classList.toggle("nav-open");
          });
        })}
      </header>
    </div>
  );
}
