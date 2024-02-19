import { useEffect } from "react";
import usaspendingStore from "../store/usaSpendingStore";

interface SmallBusinessInfo {
    "Recipient Name": string;
    "Award Amount": string;
    "Place of Performance State Code": string;
    "Award ID": string;
    "Awarding Agency": string;
    "Awarding Sub Agency": string;
    "Start Date": string;
    "End Date": string;
}

interface usaSpendingSmallBusinessReturnType {
    smallbusinesses: SmallBusinessInfo[];
    error: any;
    loading: any;
    fetchSmallBusiness: () => void;
}

const SmallBusiness = () => {

    const {smallbusinesses, error, loading, fetchSmallBusiness } = usaspendingStore() as usaSpendingSmallBusinessReturnType;

    useEffect(() => {
        fetchSmallBusiness();
    }, []);
    return (
        <div>
            <h1>Top Receipients for Contract work in Missouri</h1>

            {smallbusinesses.map((smallbusiness, index) => (
                <li key={index}>
                    <p>Recipient Name: {smallbusiness["Recipient Name"]}</p>
                    <p>Award Amount: {smallbusiness["Award Amount"]}</p>
                    <p>Place of Performance: {smallbusiness["Place of Performance State Code"]}</p>
                    <p>Award Id: {smallbusiness["Award ID"]}</p>
                    <p>Award Agency: {smallbusiness["Awarding Agency"]}</p>
                    <p>Award Sub-Agency: {smallbusiness["Awarding Sub Agency"]}</p>
                    <p>Start Date: {smallbusiness["Start Date"]}</p>
                    <p>End Date: {smallbusiness["End Date"]}</p>
                </li>
            ))}
        </div>
    )

}

export default SmallBusiness;