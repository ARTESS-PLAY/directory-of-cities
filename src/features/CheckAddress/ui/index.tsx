import { useAddressesContext } from '../../../entities/Address/model/context/AddressesContext';
import { WithClassname } from '../../../shared/types/types';
import CheckBox from '../../../shared/ui/CheckBox';
import './index.css';

const CheckAddress = ({ className = '' }: WithClassname): JSX.Element => {
    const { selectedAddresses, onSelectAddress } = useAddressesContext();

    console.log(selectedAddresses);

    return (
        <form className={`check-adress ${className}`}>
            {selectedAddresses.map((el) => (
                <CheckBox
                    checked={el.checked}
                    label={el.label}
                    value={el.value}
                    onChecked={onSelectAddress}
                    key={el.value}
                />
            ))}
        </form>
    );
};

export default CheckAddress;
