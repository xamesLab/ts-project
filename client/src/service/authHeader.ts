export default function authHeader() {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        return { Authorization: "Bearer " + accessToken };
    }
    return { Authorization: "" };
}
