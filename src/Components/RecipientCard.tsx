import React from 'react';

interface RecipientProps {
    recipient: {
        id: string;
        duns: string;
        uei: string;
        name: string;
        recipient_level: string;
        amount: number; // Assuming amount should be a number
    };
}

const RecipientCard: React.FC<RecipientProps> = ({ recipient }) => {
    return(
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold text-gray-900">{recipient.name}</h2>
            <p className="text-gray-700">Amount: ${recipient.amount}</p>
            <p className="text-gray-600">DUNS: {recipient.duns}</p>
            <p className="text-gray-600">ID: {recipient.id}</p>
            <p className="text-gray-600">Recipient Level: {recipient.recipient_level}</p>
            <p className="text-gray-600">UEI: {recipient.uei}</p>
        </div>
    );
}

export default RecipientCard;