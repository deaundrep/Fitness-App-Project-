import jwtDecode from "jwt-decode";

export function checkIsUserLoggedIn() {
    let getJwtToken = localStorage.getItem("jwtToken");

    if (getJwtToken) {
        const currentTime = Date.now() / 1000;

        let decodedJwtToken = jwtDecode(getJwtToken);

        if (decodedJwtToken.exp < currentTime) {
            localStorage.removeItem("jwtToken");
            return false;
        } else {
            return true;
        }
    }
}

export function getData(key) {
    if (!localStorage) return;

    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        console.error(`Error getting item ${key} from localStorage`, err);
    }
};

export function storeData(key, item) {
    if (!localStorage) return;

    try {
        return localStorage.setItem(key, JSON.stringify(item));
    } catch (err) {
        console.error(`Error storing item ${key} to localStorage`, err);
    }
};

