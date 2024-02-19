import {useEffect} from 'react';
import samStore from "../store/samStore";

interface Awardee {
    manual: boolean;
}

interface PointOfContact {
    fax: string | null;
    type: string;
    email: string;
    phone: string;
    title: string | null;
    fullName: string;
}

interface OfficeAddress {
    zipcode: string;
    city: string;
    countryCode: string;
    state: string;
}

interface Link {
    rel: string;
    href: string;
}

interface ContractInfo {
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
    typeOfSetAsideDescription: string;
    typeOfSetAside: string;
    responseDeadLine: string;
    naicsCode: string;
    naicsCodes: string[];
    classificationCode: string;
    active: string;
    award: Awardee;
    pointOfContact: PointOfContact[];
    description: string;
    organizationType: string;
    officeAddress: OfficeAddress;
    placeOfPerformance: string | null;
    additionalInfoLink: string | null;
    uiLink: string;
    links: Link[];
    resourceLinks: string | null;
}

interface samContractReturnType {
    contracts: ContractInfo[];
    error: any,
    loading: any,
    fetchContracts: () => void;
}

const Contract = () => {

    // Use Sam store to access state and actions
    const { contracts, fetchContracts } = samStore() as samContractReturnType;

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