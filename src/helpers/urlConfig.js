const localHostUrl = "http://localhost:2000";
const herokuhosturl = "https://flipkart-rest-backend-server.herokuapp.com";

const baseUrl = window.location.hostname === "localhost" ? localHostUrl : herokuhosturl;
export const API = `${baseUrl}/api`;
