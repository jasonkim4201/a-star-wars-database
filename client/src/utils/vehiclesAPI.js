import axios from "axios";

export default {
  getSavedVehicles() {
    return axios.get("/api/vehicles");
  },
  getSavedVehiclesById(vehicleId) {
    return axios.get(`/api/vehicles/${vehicleId}`);
  },
  saveVehicle(vehicleData) {
    return axios.post("/api/vehicles", vehicleData);
  },
  deleteVehichle(vehicleId) {
    return axios.delete(`/api/vehicles/${vehicleId}`);
  }
}