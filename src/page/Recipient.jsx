import React, {useEffect} from 'react';
import usaSpendingStore from "../store/usaSpendingStore";
import RecipientCard from '../Components/RecipientCard';

const Recipient = () => {

    // Use usaspending store to access state and actions
    const { recipients, loading, error, fetchReceipts } = usaSpendingStore();

    // Fetch contracts when the component mounts
    useEffect(() => {
        fetchReceipts();
    }, []); // Empty dependency array to ensure this runs only once on mount

    return(
        <div>
            <ul>
                {recipients.map((recipient, index) => (
                    <RecipientCard key={index} recipient={recipient} />
                ))}
            </ul>
            <h1>Recipient Page</h1>
        </div>
    );
}

export default Recipient;