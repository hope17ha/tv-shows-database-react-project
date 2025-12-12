import { Routes, Route } from "react-router";

import CatalogTvShows from "./components/catalog-tv-shows/CatalogTvShows";
import CreateTvShow from "./components/create-tv-show/CreateTvShow";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import HomePage from "./components/home/HomePage";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";
import EditTvShow from "./components/edit-tv-show/EditTvShow";
import { ToastContainer } from "react-toastify";
import UserProvider from "./providers/UserProvider";
import ProfilePage from "./components/profile-page/ProfilePage";
import DetailsTvShowWrapper from "./components/details-tv-show/DetailsTvShowWrapper";
import CommentsEditWrapper from "./components/comments/CommentEditWrapper";

function App() {
    return (
        <UserProvider>
            <div id="box">
                <Header />

                <main>
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="/tv-shows" element={<CatalogTvShows />} />
                        <Route
                            path="/tv-shows/:tvShowId/details"
                            element={<DetailsTvShowWrapper />}
                        />

                        <Route
                            path="/tv-shows/:tvShowId/details/comments/:commentId/edit"
                            element={
                                <CommentsEditWrapper /> // ⬅️ New wrapper that includes CommentsProvider
                            }
                        />

                        <Route element={<AuthGuard />}>
                            <Route
                                path="/tv-shows/create"
                                element={<CreateTvShow />}
                            />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route
                                path="/tv-shows/:tvShowId/edit"
                                element={<EditTvShow />}
                            />
                        </Route>
                        <Route element={<GuestGuard />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>
                    </Routes>
                </main>

                <Footer />
                <ToastContainer />
            </div>
        </UserProvider>
    );
}

export default App;
