//возможные значения
export type TermType = 'city' | 'district' | 'street' | 'user';

//объект содержит допустипое значение терма
export type AviableTerm = {
    label: string;
    value: TermType;
};

//объекты для генерации чекбоксов
export type ChosenTerm = AviableTerm & {
    checked: boolean;
};

//для текстовых инпутов
export type TermForInput = AviableTerm & {
    inputValue: string;
    error: boolean;
};

//объект который приходит с сервера
export interface AddressDto {
    id: number | string;
    meta?: any;
    type: TermType;
    name: string;
    children?: AddressDto[];
}
