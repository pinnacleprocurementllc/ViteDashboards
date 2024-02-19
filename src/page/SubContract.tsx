import React, {useEffect} from 'react';
import usaspendingStore from "../store/usaSpendingStore";

interface SubContractInfo {
    "Recipient Name": string;
    "Award Amount": string;
    "Place of Performance State Code": string;
    "Award ID": string;
    "Awarding Agency": string;
    "Awarding Sub Agency": string;
    "Start Date": string;
    "End Date": string;
}

interface usaSpendingSubContractReturnType {
    subcontracts: SubContractInfo[];
    error: any; // Consider using a more specific type if possible
    loading: boolean;
    fetchSubContracts: () => void;
}

const SubContract = () => {

    const {subcontracts, error, loading, fetchSubContracts } = usaspendingStore() as usaSpendingSubContractReturnType;

    useEffect(() => {
        fetchSubContracts();
    }, []);
    return (
        <div>
            <h1>Top Receipients for Contract work in Missouri</h1>

            {subcontracts.map((subcontract, index) => (
                <li key={index}>
                    <p>Recipient Name: {subcontract["Recipient Name"]}</p>
                    <p>Award Amount: {subcontract["Award Amount"]}</p>
                    <p>Place of Performance: {subcontract["Place of Performance State Code"]}</p>
                    <p>Award Id: {subcontract["Award ID"]}</p>
                    <p>Award Agency: {subcontract["Awarding Agency"]}</p>
                    <p>Award Sub-Agency: {subcontract["Awarding Sub Agency"]}</p>
                    <p>Start Date: {subcontract["Start Date"]}</p>
                    <p>End Date: {subcontract["End Date"]}</p>
                </li>
            ))}
        </div>
    )
}

export default SubContract;