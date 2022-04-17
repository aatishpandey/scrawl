import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "../components/requiresAuth/requiresAuth";
import { MockAPI } from "../MockAPI";
import { ErrorPage } from "../pages/404-page/errorpage";
import { Archive, Label, LoginPage, Notes, Profile, SignupPage, Trash } from "../pages/index"

function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<RequiresAuth><Notes /></RequiresAuth>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/mock" element={<MockAPI />} />
            <Route path="/label" element={<RequiresAuth><Label /></RequiresAuth>} />
            <Route path="/archive" element={<RequiresAuth><Archive /></RequiresAuth>} />
            <Route path="/trash" element={<RequiresAuth><Trash /></RequiresAuth>} />
            <Route path="/profile" element={<RequiresAuth><Profile /></RequiresAuth>} />
        </Routes>
    )
}

export { PageRoutes }