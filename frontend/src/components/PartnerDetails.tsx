import React from "react";

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

const PartnerDetails: React.FC<PartnerDetailsProps> = ({partner}) => {
    return (
        <div>
            <h2>Detalhes do parceiro:</h2>
            <dl>
                <dt>Nome: </dt>
                <dd>{partner.name}</dd>

                <dt>Telefone:</dt>
                <dd>{partner.phone}</dd>

                <dt>Endereço de email:</dt>
                <dd>{partner.email}</dd>

                <dt>Endereço:</dt>
                <dd>{partner.address}</dd>

                <dt>Bairro:</dt>
                <dd>{partner.neighborhood}</dd>
            </dl>
        </div>
    )

};

export default PartnerDetails;

