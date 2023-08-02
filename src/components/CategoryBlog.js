import React,{useState} from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';

const CategoryBlog = (props) => {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
          <div class="container">
            <Link to="/" class="navbar-brand">
              <span style={{ color: "#5e9693" }}>Blogg</span>
              <span style={{ color: "#fff" }}>Up</span>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <Link to="/javascript" class="nav-link">
                    Javascript
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/python" class="nav-link">
                    Python
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Django" class="nav-link">
                    Django
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/BigDataAnalysis" class="nav-link">
                    BigDataAnalysis
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/MachineLearning" class="nav-link">
                    Machine Learning
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/ReactJS" class="nav-link">
                    ReactJS
                  </Link>
                </li>
                <li class="nav-item">
                    <Link to="/Java" class="nav-link">
                      Java
                    </Link>
                </li>

                <li class="nav-item">
                    <Link to="/DSA" class="nav-link">
                      DataStructures&Algorithms
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/CPP" class="nav-link">
                      CPP
                    </Link>
                </li>

                <li class="nav-item">
                    <Link to="/Sql" class="nav-link">
                      SQL
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/CP" class="nav-link">
                      Competitive Programming
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section>
          <div
            id="intro"
            class="bg-image vh-100 vh-100"
            style={{
              backgroundImage:
                "url(https://static.vecteezy.com/system/resources/previews/011/855/061/original/black-website-landing-page-template-in-glassmorphism-style-with-3d-circles-horizontal-banner-website-screen-with-glass-overlay-effect-isolated-on-abstract-background-with-fluid-gradient-shapes-vector.jpg)",
            }}
          >
            <div
              class="mask"
              style={{ backgroundColor: "rgba(250, 182, 162, 0.15);" }}
            ></div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default CategoryBlog