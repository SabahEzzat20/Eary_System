export const setAuthenticatedUser = (data) => {
    //save object to local storage
    //stringify object to text using JSON.stringfy(take the json object and convert it to text)
    localStorage.setItem("user", JSON.stringify(data));
};
export const getAuthenticatedUser = (data) => {
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
    }
};
export const removeAuthenticatedUser = () => {
    if (localStorage.getItem("user")) {
        localStorage.removeItem("user");
    }
    
};
