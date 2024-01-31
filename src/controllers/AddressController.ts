import { Request, Response } from 'express';
import { prepareDataForAddress } from '../utils/addressUtils';
import { City } from '../models/City';
import { Street } from './../models/Street';
import { District } from '../models/District';
import AddressModel from '../models/Address';
import UserModel from '../models/User';

export const createAddress = async (req: Request, res: Response) => {
    try {
        const city = await prepareDataForAddress<City>('city', {
            name: req.body.city,
            population: req.body.population,
        });

        const district = await prepareDataForAddress<District>('district', {
            name: req.body.district,
            city: city._id,
        });

        const street = await prepareDataForAddress<Street>('street', {
            name: req.body.street,
            district: district._id,
        });

        const addressDoc = new AddressModel({
            city: city._id,
            district: district._id,
            street: street._id,
        });
        const address = await addressDoc.save();

        const userDoc = new UserModel({
            name: req.body.user,
            address: address._id,
        });

        const user = await userDoc.save();

        console.log(req.body);
        console.log(address);

        res.json({ success: true });
    } catch (e) {
        res.status(500).json(e);
    }
};

export const getAddresses = async (req: Request, res: Response) => {
    try {
        const adresses = await UserModel.find()
            .populate({
                path: 'address',
                populate: ['city', 'district', 'street'],
            })
            .exec();

        res.json(adresses);
    } catch (e) {
        res.status(500).json(e);
    }
};

export const getAvailable = async (req: Request, res: Response) => {
    try {
        const available = [
            {
                label: 'Город',
                value: 'city',
            },
            {
                label: 'Район',
                value: 'district',
            },
            {
                label: 'Улицa',
                value: 'street',
            },
        ];
        res.json(available);
    } catch (e) {
        res.status(500).json(e);
    }
};
