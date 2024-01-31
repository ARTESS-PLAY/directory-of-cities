import { UserAddress } from '../../../entities/Address/model/types';
import { WithClassname } from '../../../shared/types/types';
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    Accordion,
} from 'react-accessible-accordion';
import './index.css';
import { useAddressesContext } from '../../../entities/Address/model/context/AddressesContext';
import DeleteAddress from '../../DeleteAddress/ui';

interface ChildAddressProps extends WithClassname {
    address: UserAddress | undefined;
}

const ChildAddress = ({ address, className = '' }: ChildAddressProps) => {
    const { selectedAddresses } = useAddressesContext();

    if (address?.type === 'user') {
        return (
            <div className="address__user">
                <p data-tooltip={address?.meta?.tooltip ? address.meta.tooltip : ''}>
                    {address.name}
                </p>
                <DeleteAddress id={address.id} />
            </div>
        );
    }

    if (!address?.children) {
        return <></>;
    }

    const currentChecked = selectedAddresses.find((el) => el.value === address.type)?.checked;
    if (!currentChecked) {
        return (
            <>
                {address.children.map((el) => (
                    <ChildAddress address={el} className={className} key={el.id} />
                ))}
            </>
        );
    }

    return (
        <Accordion allowZeroExpanded allowMultipleExpanded>
            <AccordionItem className={`address ${className}`}>
                <AccordionItemHeading className="address__title">
                    <AccordionItemButton>{address.name}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="address__children">
                    {address.children.map((el) => (
                        <ChildAddress address={el} className={className} key={el.id} />
                    ))}
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default ChildAddress;
