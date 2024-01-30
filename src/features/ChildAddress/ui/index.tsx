import { AddressDto } from '../../../entities/Address/model/types';
import { WithClassname } from '../../../shared/types/types';
import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    Accordion,
} from 'react-accessible-accordion';
import './index.css';

interface ChildAddressProps extends WithClassname {
    address: AddressDto | undefined;
}

const ChildAddress = ({ address, className = '' }: ChildAddressProps) => {
    if (address?.type === 'user') {
        return (
            <p
                className="address__user"
                data-tooltip={address?.meta?.tooltip ? address.meta.tooltip : ''}>
                {address.name}
            </p>
        );
    }

    if (!address?.children) {
        return <></>;
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
