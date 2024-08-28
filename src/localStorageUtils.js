export function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    console.log("Gaming");
}

export function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}