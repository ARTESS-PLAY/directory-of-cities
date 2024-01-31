import { useState } from 'react';
import { WithClassname } from '../../../shared/types/types';
import { useAddressesContext } from '../../../entities/Address/model/context/AddressesContext';
import { removeAddress } from '../../../entities/Address/api/AddressApi';
import './index.css';

interface DeleteAddress extends WithClassname {
    id: string;
}

const DeleteAddress = ({ id, className = '' }: DeleteAddress) => {
    const { loadAddresses } = useAddressesContext();
    const [isLocalLoading, setIsLocalLoading] = useState(false);

    const handleDelete = async () => {
        setIsLocalLoading(true);
        if (window.confirm('Уверены, что хотите удалить?')) {
            await removeAddress(id);
            await loadAddresses();
        }
        setIsLocalLoading(false);
    };

    return (
        <div
            className={`delete-address ${
                isLocalLoading ? 'delete-address__loading' : ''
            } ${className}`}
            onClick={handleDelete}></div>
    );
};

export default DeleteAddress;
