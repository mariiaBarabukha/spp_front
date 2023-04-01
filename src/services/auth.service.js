import http from "../http-common";

const login = async (username, password) => {
    const response = await http
        .get("/login", {
            username,
            password,
        });
    if (response.data.accessToken || response.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const register = (username, organisation, password) => {
    return http.post("/register", {
        username,
        organisation,
        password,
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    login,
    register,
    logout
};