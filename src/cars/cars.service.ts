import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid} from 'uuid';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
            year: 2020
        },
        {
            id: uuid(),
            brand: 'BMW',
            model: 'Serie 3',
            year: 2021
        },
        {
            id: uuid(),
            brand: 'Audi',
            model: 'A4',
            year: 2022
        }
    ];

    findAll() {
        console.log(this.cars);
        return this.cars;
    }

    findById(id: string) {
        const car = this.cars.find( car => car.id === id );

        if ( !car ) throw new NotFoundException(`Car with id ${id} not found`);

        return car;
    }

    addCar( car: any ) {
        car.id = this.cars.length + 1;
        this.cars.push( car );
        return car;
    }

    updateCar( id: string, updatedCar: any ) {
        const index = this.cars.findIndex( car => car.id === id );

        if ( index === -1 ) throw new NotFoundException(`Car with id ${id} not found`);

        this.cars[ index ] = updatedCar;
        return updatedCar;
    }

    deleteCar( id: string ) {
        const index = this.cars.findIndex( car => car.id === id );

        if ( index === -1 ) throw new NotFoundException(`Car with id ${id} not found`);

        this.cars.splice( index, 1 );
    }

}
