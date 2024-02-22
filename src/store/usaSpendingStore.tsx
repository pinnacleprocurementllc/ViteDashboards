import { create } from 'zustand';
import axios from 'axios';

const usaspendingStore = create((set) => ({
    recipients: [],
    smallbusinesses: [],
    subcontracts: [],
    results: [],
    disasterSpending: [],
    loading: false,
    error: null,

    fetchRecipients: async () => {
        set({ loading: true, error: null });
        try {

            // Retrieve the contract information
            const response = await axios.post("https://api.usaspending.gov/api/v2/recipient/");
            console.log("This is the response: ", response.data.results);
            set({ recipients: response.data.results, loading: false });
        } catch (error) {
            set({ error: error, loading: false });
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
                    "recipient_id", "prime_award_recipient_id", "Place of Performance State Code",
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
            set({ error: error, loading: false });
        }
    },
    fetchSubContracts: async () => {
        set({ loading: true, error: null });
        try {
            const payload = {
                "filters":{
                    "time_period":[{"start_date":"2023-10-01","end_date":"2024-09-30"}],
                    "award_amounts": [{"lower_bound": 750000}],
                    "award_type_codes":["A","B","C","D"],
                    "place_of_performance_locations":[
                        {"state":"MO","country":"USA"}
                    ]
                },
                "fields":[
                    "Award ID",
                    "Recipient Name",
                    "Start Date",
                    "End Date",
                    "Award Amount",
                    "Total Outlays",
                    "Description",
                    "def_codes",
                    "COVID-19 Obligations",
                    "COVID-19 Outlays",
                    "Infrastructure Obligations",
                    "Infrastructure Outlays",
                    "Awarding Agency",
                    "Awarding Sub Agency",
                    "Contract Award Type",
                    "recipient_id",
                    "prime_award_recipient_id",
                ],
                "page":1,
                "limit":60,
                "sort":"Award Amount",
                "order":"desc",
                "subawards":false
            };


            // Retrieve the contract information
            const response = await axios.post("https://api.usaspending.gov/api/v2/search/spending_by_award/", payload);
            console.log("This is the response: ", response.data.results);
            set({ subcontracts: response.data.results, loading: false });
        } catch (error) {
            set({ error: error, loading: false });
        }
    },

    fetchMissouriDollarsSpent: async () => {
        set({ loading: true, error: null });
        try {
            const payload = {
                "group":"fiscal_year",
                "filters":{
                    "time_period":[{"start_date":"2024-01-01","end_date":"2024-09-30"}],
                    "place_of_performance_locations":[{"state":"MO","country":"USA"}]
                },
                "subawards":false,
                "auditTrail":"Spending Over Time Visualization"
            }
            

            // Retrieve the contract information
            const response = await axios.post("https://api.usaspending.gov/api/v2/search/spending_over_time/", payload);
            console.log("This is the response: ", response.data.results);
            set({ results: response.data.results, loading: false });
        } catch (error) {
            set({ error: error, loading: false });
        }
    },

  fetchDisasterSpending: async () => {
    try {
        const payload = {
            "filter": {
                "def_codes": ["L", "M", "N", "O", "P", "U"]
            },
            "geo_layer": "state",
            "geo_layer_filters": ["NE", "WY", "CO", "IA", "IL", "MI", "IN", "TX"],
            "scope": "recipient_location",
            "spending_type": "obligation"
        }
        const response = await axios.post('https://api.usaspending.gov/api/v2/disaster/spending_by_geography/', payload);
        console.log("fetchDisasterData: ", response.data);
        set({ disasterSpending: response.data.results });
        console.log("This is the response: ", response);
    } catch (error) {
        console.error('Failed to fetch disaster spending data:', error);
        set({ disasterSpending: null });
    }
  },
}));

export default usaspendingStore;