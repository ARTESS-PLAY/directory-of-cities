import { Accordion } from 'react-accessible-accordion';
import { useAddressesContext } from '../../entities/Address/model/context/AddressesContext';
import CheckAddress from '../../features/CheckAddress/ui';
import ChildAddress from '../../features/ChildAddress/ui';
import { WithClassname } from '../../shared/types/types';
import 'react-accessible-accordion/dist/fancy-example.css';
import './index.css';

const Addresses = ({ className = '' }: WithClassname): JSX.Element => {
    const { addresses } = useAddressesContext();

    return (
        <div className={`addresses ${className}`}>
            <CheckAddress />
            <div className="addresses__table">
                {addresses.map((el) => (
                    <ChildAddress address={el} key={el.id} />
                ))}
            </div>
        </div>
    );
};

export default Addresses;
