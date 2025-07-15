import axios from "axios"

export const axiosInstance = axios.create({
    baseURL:  "https://vidyarthi-sxww.onrender.com",
    withCredentials: true,
});

// Add a request interceptor to include the token in all requests
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const parsedToken = JSON.parse(token);
                config.headers.Authorization = `Bearer ${parsedToken}`;
            } catch (error) {
                console.error("Error parsing token:", error);
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            console.error("Authentication error:", error.response.data);
            // Clear invalid tokens
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            // Redirect to login if needed
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export const apiConnector = (method, url, bodyData, headers, params) => {
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers : null,
        params: params ? params : null,
    });
}