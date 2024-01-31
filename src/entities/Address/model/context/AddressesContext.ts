import { createContext, useContext, useState } from 'react';
import { AddressDto, AviableTerm, ChosenTerm } from '../types';
import { generateAviableForCheckboxes } from '../../lib/utils';

interface AddressesContextInitial {
    selectedAddresses: ChosenTerm[];
    onSelectAddress: (value: string, checked: boolean) => void;
    addresses: AddressDto[];
    setAddresses: (v: AddressDto[]) => void;
    aviableTerms: AviableTerm[];
    setAviableTerms: (v: AviableTerm[]) => void;
}

//контекст для адресов
export const AddressesContext = createContext<AddressesContextInitial>(
    {} as AddressesContextInitial,
);

//для удобной работы с контекстом
export const useAddressesContext = () => {
    const context = useContext(AddressesContext);
    if (!context) throw new Error('Use ToDo context within provider!');
    return context;
};

const dataPlaceholder: AviableTerm[] = [
    {
        label: 'Город',
        value: 'city',
    },
    {
        label: 'Район',
        value: 'district',
    },
    {
        label: 'Улицa',
        value: 'street',
    },
];

const dataPlaceholderAviable = generateAviableForCheckboxes(dataPlaceholder);

const placeholderAdressesDto: AddressDto[] = [
    {
        id: 1,
        type: 'city',
        name: 'Москва',
        children: [
            {
                id: 1,
                type: 'district',
                name: 'Пресненский р-н',
                children: [
                    {
                        id: 1,
                        type: 'street',
                        name: 'Гашека ул.',
                        children: [
                            {
                                id: 1,
                                type: 'user',
                                name: 'Alesha',
                            },
                            {
                                id: 2,
                                type: 'user',
                                name: 'Alesha',
                            },
                        ],
                    },
                    {
                        id: 2,
                        type: 'street',
                        name: 'Гашека ул.',
                        children: [
                            {
                                id: 3,
                                type: 'user',
                                name: 'Alesha',
                            },
                            {
                                id: 4,
                                type: 'user',
                                name: 'Alesha',
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                type: 'district',
                name: 'Пресненский р-н',
                children: [
                    {
                        id: 1,
                        type: 'street',
                        name: 'Гашека ул.',
                        children: [
                            {
                                id: 1,
                                type: 'user',
                                name: 'Alesha',
                            },
                            {
                                id: 2,
                                type: 'user',
                                name: 'Alesha',
                            },
                        ],
                    },
                    {
                        id: 2,
                        type: 'street',
                        name: 'Гашека ул.',
                        children: [
                            {
                                id: 3,
                                type: 'user',
                                name: 'Alesha',
                            },
                            {
                                id: 4,
                                type: 'user',
                                name: 'Alesha',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        type: 'city',
        name: 'Москва',
        children: [
            {
                id: 1,
                type: 'district',
                name: 'Пресненский р-н',
                children: [
                    {
                        id: 1,
                        type: 'street',
                        name: 'Гашека ул.',
                        children: [
                            {
                                id: 1,
                                type: 'user',
                                name: 'Alesha',
                            },
                            {
                                id: 2,
                                type: 'user',
                                name: 'Alesha',
                            },
                        ],
                    },
                    {
                        id: 2,
                        type: 'street',
                        name: 'Гашека ул.',
                        children: [
                            {
                                id: 3,
                                type: 'user',
                                name: 'Alesha',
                            },
                            {
                                id: 4,
                                type: 'user',
                                name: 'Alesha',
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                type: 'district',
                name: 'Пресненский р-н',
                children: [
                    {
                        id: 1,
                        type: 'street',
                        name: 'Гашека ул.',
                        children: [
                            {
                                id: 1,
                                type: 'user',
                                name: 'Alesha',
                            },
                            {
                                id: 2,
                                type: 'user',
                                name: 'Alesha',
                            },
                        ],
                    },
                    {
                        id: 2,
                        type: 'street',
                        name: 'Гашека ул.',
                        children: [
                            {
                                id: 3,
                                type: 'user',
                                name: 'Alesha',
                            },
                            {
                                id: 4,
                                type: 'user',
                                name: 'Alesha',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

//создаём контекст
export const useCreateAddressesContext = (): AddressesContextInitial => {
    const [selectedAdresses, setselectedAdresses] = useState<ChosenTerm[]>(dataPlaceholderAviable);
    const [aviableTerms, setAviableTerms] = useState<AviableTerm[]>(dataPlaceholder);
    const [addresses, setAddresses] = useState<AddressDto[]>(placeholderAdressesDto);

    const onSelectAddress = (value: string, checked: boolean) => {
        setselectedAdresses((prev) =>
            prev.map((el) => {
                if (el.value === value) el.checked = checked;

                return el;
            }),
        );
    };

    return {
        aviableTerms,
        setAviableTerms: (v: AviableTerm[]) => setAviableTerms(v),
        selectedAddresses: selectedAdresses,
        onSelectAddress: onSelectAddress,
        addresses: addresses,
        setAddresses: (v: AddressDto[]) => setAddresses(v),
    };
};
