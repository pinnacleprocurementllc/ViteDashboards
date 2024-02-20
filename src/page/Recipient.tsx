import {useEffect} from 'react';
import usaSpendingStore from "../store/usaSpendingStore";

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
    
    return (
        <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Top National Recipients</h1>
            <p className="mt-2 text-sm text-gray-700">
                A list of recipients who received a contract in FY 24 sorted by Amount
            </p>
            </div>
        </div>
        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                        Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Amount
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Duns
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Id
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Recipient Level
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        UEI
                    </th>

                    </tr>
                </thead>
                <tbody className="bg-white">
                    {recipients.map((recipient, index) => (
                    <tr key={index} className="even:bg-gray-50">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        {recipient.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{recipient.amount}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{recipient.duns}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{recipient.id}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{recipient.recipient_level}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{recipient.uei}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    )
}
          


export default Recipient;