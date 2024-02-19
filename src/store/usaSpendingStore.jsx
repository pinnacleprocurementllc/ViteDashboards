import { create } from 'zustand';
import axios from 'axios';

const usaspendingStore = create((set) => ({
    recipients: [],
    smallbusinesses: [],
    loading: false,
    error: null,

    fetchReceipts: async () => {
        set({ loading: true, error: null });
        try {

            // Retrieve the contract information
            const response = await axios.post("https://api.usaspending.gov/api/v2/recipient/");
            console.log("This is the response: ", response.data.results);
            set({ recipients: response.data.results, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
    fetchSmallBusiness: async () => {
        set({ loading: true, error: null });
        try {
            const payload = {
                "filters": {
                    "time_period": [{"start_date": "2007-10-01", "end_date": "2024-09-30"}],
                    "award_type_codes": ["A", "B", "C", "D"],
                    "recipient_type_names": [
                        "small_business",
                        "veteran_owned_business",
                        "service_disabled_veteran_owned_business"
                    ],
                    "place_of_performance_locations": [
                        {"country": "USA", "state": "MO"}
                    ]
                },
                "fields": [
                    "Award ID", "Recipient Name", "Start Date", "End Date", "Award Amount",
                    "Total Outlays", "Description", "def_codes", "COVID-19 Obligations",
                    "COVID-19 Outlays", "Infrastructure Obligations", "Infrastructure Outlays",
                    "Awarding Agency", "Awarding Sub Agency", "Contract Award Type",
                    "recipient_id", "prime_award_recipient_id"
                ],
                "page": 1,
                "limit": 60,
                "sort": "Start Date",
                "order": "desc",
                "subawards": false
            };

            // Retrieve the contract information
            const response = await axios.post("https://api.usaspending.gov/api/v2/search/spending_by_award/", payload);
            console.log("This is the response: ", response.data.results);
            set({ smallbusinesses: response.data.results, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));

export default usaspendingStore;