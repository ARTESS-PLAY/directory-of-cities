import { createContext, useContext, useState } from 'react';
import { UserAddress, AvailableTerm, ChosenTerm } from '../types';
import { generateAvailableForCheckboxes, generateTermsFromServer } from '../../lib/utils';
import { getAddresses, getAvailable } from '../../api/AddressApi';

interface AddressesContextInitial {
    selectedAddresses: ChosenTerm[];
    onSelectAddress: (value: string, checked: boolean) => void;
    addresses: UserAddress[];
    setAddresses: (v: UserAddress[]) => void;
    availableTerms: AvailableTerm[];
    setAvailableTerms: (v: AvailableTerm[]) => void;
    isLoaded: boolean;
    setIsLoaded: (l: boolean) => void;
    loadData: () => Promise<void>;
    loadAddresses: () => Promise<void>;
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

// const dataPlaceholderAvailable = generateAvailableForCheckboxes(dataPlaceholder);

//создаём контекст
export const useCreateAddressesContext = (): AddressesContextInitial => {
    const [selectedAdresses, setselectedAdresses] = useState<ChosenTerm[]>([]);
    const [availableTerms, setAvailableTerms] = useState<AvailableTerm[]>([]);
    const [addresses, setAddresses] = useState<UserAddress[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const onSelectAddress = (value: string, checked: boolean) => {
        setselectedAdresses((prev) =>
            prev.map((el) => {
                if (el.value === value) el.checked = checked;

                return el;
            }),
        );
    };

    const loadData = async () => {
        setIsLoaded(false);
        await Promise.all([loadAddresses(), loadAvailable()]);
        setIsLoaded(true);
    };
    const loadAddresses = async () => {
        const data = await getAddresses();
        const formated = generateTermsFromServer(data);
        setAddresses(formated);
    };

    const loadAvailable = async () => {
        const available = await getAvailable();
        setAvailableTerms(available);
        setselectedAdresses(generateAvailableForCheckboxes(available));
    };

    return {
        loadData,
        loadAddresses,
        isLoaded,
        setIsLoaded: (l: boolean) => setIsLoaded(l),
        availableTerms,
        setAvailableTerms: (v: AvailableTerm[]) => setAvailableTerms(v),
        selectedAddresses: selectedAdresses,
        onSelectAddress: onSelectAddress,
        addresses: addresses,
        setAddresses: (v: UserAddress[]) => setAddresses(v),
    };
};
