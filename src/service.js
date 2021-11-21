const baseUrl = "https://alpha.cloudcastles.io";

export function register({ email, username, password, confirmPassword }) {
    const data = {
        username,
        email,
        "password1": password,
        "password2": confirmPassword
    };
    return fetch(`${baseUrl}/rest-auth/registration/`, {
        method: "POST",
        body: JSON.stringify(data)
    })
}

export function login({ email, username, password }) {
    return fetch(`${baseUrl}/rest-auth/login/`, {
        method: "POST",
        body: JSON.stringify({ email, username, password })
    })
}