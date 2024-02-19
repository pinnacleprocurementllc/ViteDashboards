import React, {useEffect} from 'react';
import samStore from "../store/samStore";

const Contract = () => {

    // Use Sam store to access state and actions
    const { contracts, loading, error, fetchContracts } = samStore();

    // Fetch contracts when the component mounts
    useEffect(() => {
        fetchContracts();
    }, []); // Empty dependency array to ensure this runs only once on mount

    return(
        <div>
            <ul>
                {contracts.map((contract, index) => (
                    <li key={index}>
                        <p>Title: {contract.title}</p>
                    </li>
                ))}
            </ul>
            <h1>Contract Page</h1>
        </div>
    );
}

export default Contract;