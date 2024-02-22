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

    const {smallbusinesses, fetchSmallBusiness } = usaspendingStore() as usaSpendingSmallBusinessReturnType;

    useEffect(() => {
        fetchSmallBusiness();
    }, []);
    return (
        <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Small Business Contracts</h1>
            <p className="mt-2 text-sm text-gray-700">
                A list of veterna, sdvosb small business who have been awarded a contract
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
                        Recipient Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Award Amount
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Place of Performance State Code
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Award ID
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Awarding Sub Agency
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Start Date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        End Date
                    </th>

                    </tr>
                </thead>
                <tbody className="bg-white">
                    {smallbusinesses.map((smallbusiness, index) => (
                    <tr key={index} className="even:bg-gray-50">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{smallbusiness["Recipient Name"]}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(smallbusiness["Award Amount"]))}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{smallbusiness["Place of Performance State Code"]}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{smallbusiness["Award ID"]}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{smallbusiness["Awarding Sub Agency"]}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{smallbusiness["Start Date"]}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{smallbusiness["End Date"]}</td>

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

export default SmallBusiness;