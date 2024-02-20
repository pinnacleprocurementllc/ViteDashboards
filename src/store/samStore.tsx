import { create } from 'zustand';
import axios from 'axios';

const samStore = create((set) => ({
    contracts: [],
    loading: false,
    error: null,

    fetchContracts: async () => {
        set({ loading: true, error: null });
        try {
            // Retrieve the contract information
            const response = await axios.get("https://api.sam.gov/prod/opportunities/v2/search?limit=1000&api_key=1FgZGo0A8oeOC7vbpe5U52aftLoWHgCkN2ubETP3&postedFrom=01/01/2024&postedTo=02/20/2024&setAside=VSA&state=mo");
            console.log("This is the response: ", response.data.opportunitiesData);
            set({ contracts: response.data.opportunitiesData, loading: false });
        } catch (error) {
            set({ error: error, loading: false });
        }
    },
    

}));

export default samStore;