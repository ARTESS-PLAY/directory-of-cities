import { createContext, useContext, useState } from 'react';
import { ChosenTerm } from '../types';

interface AddressesContextInitial {
    selectedAddresses: ChosenTerm[];
    onSelectAddress: (value: string, checked: boolean) => void;
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

const dataPlaceholder = [
    {
        label: 'Города',
        value: 'cities',
        checked: true,
    },
    {
        label: 'Районы',
        value: 'districts',
        checked: true,
    },
    {
        label: 'Улицы',
        value: 'streets',
        checked: true,
    },
];

//создаём контекст
export const useCreateAddressesContext = (): AddressesContextInitial => {
    const [selectedAdresses, setselectedAdresses] = useState<ChosenTerm[]>(dataPlaceholder);

    const onSelectAddress = (value: string, checked: boolean) => {
        setselectedAdresses((prev) =>
            prev.map((el) => {
                if (el.value === value) el.checked = checked;

                return el;
            }),
        );
    };

    return {
        selectedAddresses: selectedAdresses,
        onSelectAddress: onSelectAddress,
    };
};
