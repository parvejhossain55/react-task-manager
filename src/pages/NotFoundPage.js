import React from "react";

function NotFoundPage() {
    // if (!getToken()) {
    //     window.location.href = "/login";
    // }
    return (
        <div class="row justify-content-center">
            <section class="col-6">
                <div class="error-page">
                    <h2 class="headline text-warning"> 404</h2>

                    <div class="error-content">
                        <h3>
                            <i class="fas fa-exclamation-triangle text-warning"></i>{" "}
                            Oops! Page not found.
                        </h3>

                        <p>
                            We could not find the page you were looking for.
                            Meanwhile, you may{" "}
                            <a href="/">return to dashboard</a> or try using the
                            search form.
                        </p>

                        <form class="search-form">
                            <div class="input-group">
                                <input
                                    type="text"
                                    name="search"
                                    class="form-control"
                                    placeholder="Search"
                                />

                                <div class="input-group-append">
                                    <button
                                        type="submit"
                                        name="submit"
                                        class="btn btn-warning"
                                    >
                                        <i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NotFoundPage;
