import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla',
            year: 2020
        },
        {
            id: 2,
            brand: 'BMW',
            model: 'Serie 3',
            year: 2021
        },
        {
            id: 3,
            brand: 'Audi',
            model: 'A4',
        }
    ];

    findAll() {
        return this.cars;
    }

    findById(id: number) {
        return this.cars[id];
    }

}
