import {useEffect} from 'react';
import usaSpendingStore from "../store/usaSpendingStore";
import RecipientCard from '../Components/RecipientCard';

interface ReicipentInfo {
    "id": string;
    "duns": string;
    "uei": string;
    "name": string;
    "recipient_level": string;
    "amount": number;
}

interface usaSpendingRecipientType {
    recipients: ReicipentInfo[];
    error: any;
    loading: any;
    fetchRecipients: () => void;
}

const Recipient = () => {

    // Use usaspending store to access state and actions
    const { recipients, fetchRecipients } = usaSpendingStore() as usaSpendingRecipientType;

    // Fetch contracts when the component mounts
    useEffect(() => {
        fetchRecipients();
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