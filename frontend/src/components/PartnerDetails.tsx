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

interface PartnerDetailsProps {
    partner: Partner;
}

const PartnerDetails: React.FC<PartnerDetailsProps> = () => {
    const [partner, setPartner] = useState<Partner[]>([]);

    useEffect(() => {
        const getPartner = async () => {
            try {
                const data = await fetchPartner();
                setPartner(data);
            } catch (error) {
                console.error("Failed to fetch partners:", error);
            }
        };
        getPartner();
    }, []);
    
    return (
        <div>
            <h2>Detalhes do parceiro:</h2>
            <dl>
            {partner.map((item) => (
                <><dt>Nome: </dt>
                <dd>{item.name}</dd>
                
                <dt>Telefone:</dt>
                <dd>{item.phone}</dd>
                
                <dt>Endereço de email:</dt>
                <dd>{item.email}</dd>
                
                <dt>Endereço:</dt>
                <dd>{item.address}</dd>
                
                <dt>Bairro:</dt>
                <dd>{item.neighborhood}</dd></>
            ))}
            </dl>
        </div>
    )

};

export default PartnerDetails;

