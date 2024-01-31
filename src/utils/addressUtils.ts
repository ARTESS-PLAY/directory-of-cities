import { Address } from '../models/Address';
import CityModel from '../models/City';
import DistrictModel from '../models/District';
import StreetModel from '../models/Street';

import { Types, Document } from 'mongoose';

type ReturnedModel<T> = Document<unknown, {}, T> &
    T & {
        _id: Types.ObjectId;
    };

//функция ищет элементы адреса, и в случае их отсутсвия - создаёт
export const prepareDataForAddress = async <T>(
    type: keyof Address,
    value: any,
): Promise<ReturnedModel<T>> => {
    let Model;
    switch (type) {
        case 'city':
            Model = CityModel;
            break;

        case 'district':
            Model = DistrictModel;
            break;

        case 'street':
            Model = StreetModel;
            break;

        default:
            const neverCheck: never = type;
            break;
    }

    //пытаемся получить
    let res = await Model.findOne(value);

    //если не находим, то создаём
    if (!res) {
        const doc = new Model(value);

        res = await doc.save();
    }

    return res;
};
