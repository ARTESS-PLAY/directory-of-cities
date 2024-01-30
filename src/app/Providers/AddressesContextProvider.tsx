import {
    AddressesContext,
    useCreateAddressesContext,
} from '../../entities/Address/model/context/AddressesContext';
import { WithChildren } from '../../shared/types/types';

const AddressesContextProvider = ({ children }: WithChildren) => {
    const context = useCreateAddressesContext();
    return <AddressesContext.Provider value={context}>{children}</AddressesContext.Provider>;
};

export default AddressesContextProvider;
