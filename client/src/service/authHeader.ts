export default function authHeader() {
    //const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InhhbWVzMjIiLCJpYXQiOjE2NTQ1MzA0ODQsImV4cCI6MzMwOTM2MDk2OCwiaXNzIjoiY29vbElzc3VlciJ9.G91mlN2X-fp0IvF78eTowtMA7nVtAgXRBAmlj4JE9p8";

    if (accessToken) {
        return { Authorization: "Bearer " + accessToken };
        // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    }
    return { Authorization: "" };
}
