import React from "react";


const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3
            shadow-sm">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-4" href="Home">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="Home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="Product">Product</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="Contact">Contact Us</a>
                            </li>
                          
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;
