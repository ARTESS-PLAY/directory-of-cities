export type ChosenTerm = {
    label: string;
    value: string;
    checked: boolean;
};

export interface AddressDto {
    id: number | string;
    meta?: any;
    type: 'city' | 'district' | 'street' | 'user';
    name: string;
    children?: AddressDto[];
}
