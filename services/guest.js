import axios from ".";
import catchErrors from "@/utils/catchErrors"; 
 

// Create a job request
export const addGuest = async (data) => {
    try {
        const res = await axios.post(`/api/v1/guest`, data); 
        
        return res.data 
    } catch (error) {
        return error;
    }
};

// Get all user jobs
export const getContractors = async (page) => { 
    let items_per_page=10 
    try {
        const res = await axios.get(`/api/v1/guest`, {
            params: { page, items_per_page}
        });
        return res.data;
    } catch (error) {
        return catchErrors(error);
    }
};
  