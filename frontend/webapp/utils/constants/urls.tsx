const env = process.env.NODE_ENV;

const LOCALHOST = "http://localhost:8080/api";
const BASE_URL = env === "production" ? "/api" : LOCALHOST;

const API = {
  CONFIG: `${BASE_URL}/config`,
  NAMESPACES: `${BASE_URL}/namespaces`,
  APPLICATIONS: `${BASE_URL}/applications`,
  DESTINATION_TYPE: `${BASE_URL}/destination-types`,
  DESTINATIONS: `${BASE_URL}/destinations`,
  SOURCES: `${BASE_URL}/sources`,
};

const QUERIES = {
  API_CONFIG: "apiConfig",
  API_NAMESPACES: "apiNamespaces",
  API_APPLICATIONS: "apiApplications",
  API_DESTINATIONS: "apiDestinations",
  API_SOURCES: "apiSources",
  API_DESTINATION_TYPE: "apiDestinationType",
  API_DESTINATION_TYPES: "apiDestinationTypes",
};

export { API, QUERIES };
