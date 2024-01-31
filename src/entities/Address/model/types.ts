//возможные значения
export type TermType = 'city' | 'district' | 'street' | 'user';

//объект содержит допустипое значение терма
export type AvailableTerm = {
    label: string;
    value: TermType;
};

//объекты для генерации чекбоксов
export type ChosenTerm = AvailableTerm & {
    checked: boolean;
};

//для текстовых инпутов
export type TermForInput = AvailableTerm & {
    inputValue: string;
    error: boolean;
};

//объект который приходит с сервера
export interface UserAddress {
    id: string;
    type: TermType;
    name: string;
    meta?: any;
    children?: UserAddress[];
}
//объект который приходит с сервера
export interface UserAddressDto {
    _id: string;
    address: {
        city: {
            _id: string;
            name: string;
            population: number;
        };
        district: {
            _id: string;
            name: string;
            city: string;
        };
        street: {
            _id: string;
            name: string;
            district: string;
        };
    };
    name: string;
}
