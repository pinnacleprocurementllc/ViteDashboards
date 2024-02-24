import {useEffect} from 'react';
import samStore from "../store/samStore";

interface Opportunity {
    noticeId: string;
    title: string;
    solicitationNumber: string;
    fullParentPathName: string;
    fullParentPathCode: string;
    postedDate: string;
    type: string;
    baseType: string;
    archiveType: string;
    archiveDate: string;
    typeOfSetAsideDescription: string | null;
    typeOfSetAside: string | null;
    responseDeadLine: string;
    naicsCode: string;
    naicsCodes: string[];
    classificationCode: string;
    active: string;
    award: any | null;
    pointOfContact: PointOfContact[];
    description: string;
    organizationType: string;
    officeAddress: Address;
    placeOfPerformance: PlaceOfPerformance;
    additionalInfoLink: string | null;
    uiLink: string;
    links: Link[];
    resourceLinks: any | null;
}

interface PointOfContact {
    fax: string;
    type: string;
    email: string;
    phone: string;
    title: string | null;
    fullName: string;
}

interface Address {
    zipcode: string;
    city: string;
    countryCode: string;
    state: string;
}

interface PlaceOfPerformance {
    city: {
        code: string;
        name: string;
    };
    state: {
        code: string;
        name: string;
    };
    zip: string;
    country: {
        code: string;
        name: string;
    };
}

interface Link {
    rel: string;
    href: string;
}

interface SamData {
    softwareContracts: Opportunity[],
    fetchSoftwareContracts: () => void;
}

const SoftwareContracts = () => {

    // Use Sam store to access state and actions
    const { softwareContracts, fetchSoftwareContracts } = samStore() as SamData;

    // Fetch contracts when the component mounts
    useEffect(() => {
        fetchSoftwareContracts();
    }, []); // Empty dependency array to ensure this runs only once on mount

    return (
        <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Software Publishers</h1>
            <p className="mt-2 text-sm text-gray-700">
                All Software Contracts from 09-01-2023 to 10-30-2024
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
                        Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Full Parent Path Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Solicitation Number
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Posted Date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Type
                    </th>

                    </tr>
                </thead>
                <tbody className="bg-white">
                    {softwareContracts.map((contract, index) => (
                    <tr key={index} className="even:bg-gray-50">
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3 break-words whitespace-normal">
                        {contract.title}
                        </td>
                        <td className="whitespace-normal break-words px-3 py-4 text-sm text-gray-500">{contract.fullParentPathName}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{contract.solicitationNumber}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{contract.postedDate}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{contract.type}</td>
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

export default SoftwareContracts;