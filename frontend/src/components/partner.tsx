import React, { useEffect, useState } from "react";
import { fetchPartner } from "src/api/api";

interface Partner {
    id:             number;
    email:          string;
    document:       string;
    category:       string;
    name:           string;
    phone:          string;
    address:        string;
    neighborhood:   string;
    zipcode:        string;
}

const PartnerList: React.FC = () => {
    const [partner, setPartner] = useState<Partner[]>([]);

    useEffect(() => {
        const getPartner = async () => {
            const data = await fetchPartner();
            setPartner(data)
        };
        getPartner();
    }, []);

    return (
        <div>
            <ul>
            {partner.map((item) => (
                <li key={item.id}>
                    {item.name}. {item.address}, CEP: {item.zipcode}
                </li>
            ))}
            </ul>
        </div>
    );
};

const PartnerDetails: React.FC = () => {
    const [partner, setPartner] = useState<Partner[]>([]);

    return (
        <div>
            <ul>
                {partner.map((item) => (
                    <li key='${item.id}'>

                    </li>
                ))}
            </ul>
        </div>
    )


};

