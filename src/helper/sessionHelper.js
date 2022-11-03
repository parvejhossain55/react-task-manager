export function setToken(token) {
    localStorage.setItem("token", token);
}

export function getToken() {
    return localStorage.getItem("token");
}

export function setVerifyEmail(eamil) {
    localStorage.setItem("verifyEamil", eamil);
}

export function getVerifyEmail() {
    return localStorage.getItem("verifyEamil");
}

export function setLocalData(key, value) {
    localStorage.setItem(key, value);
}

export function getLocalData(key) {
    return localStorage.getItem(key);
}

export function setUserDetail(data) {
    localStorage.setItem("user", JSON.stringify(data));
}

export function getUserDetail() {
    return JSON.parse(localStorage.getItem("user"));
}

export function removeSession() {
    localStorage.clear();
    window.location.href = "/login";
}
