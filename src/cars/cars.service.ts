import { Injectable, NotFoundException } from '@nestjs/common';

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
            year: 2022
        }
    ];

    findAll() {
        return this.cars;
    }

    findById(id: number) {
        const car = this.cars.find( car => car.id === id );

        if ( !car ) throw new NotFoundException(`Car with id ${id} not found`);

        return car;
    }

    addCar( car: any ) {
        car.id = this.cars.length + 1;
        this.cars.push( car );
        return car;
    }

    updateCar( id: number, updatedCar: any ) {
        const index = this.cars.findIndex( car => car.id === id );

        if ( index === -1 ) throw new NotFoundException(`Car with id ${id} not found`);

        this.cars[ index ] = updatedCar;
        return updatedCar;
    }

    deleteCar( id: number ) {
        const index = this.cars.findIndex( car => car.id === id );

        if ( index === -1 ) throw new NotFoundException(`Car with id ${id} not found`);

        this.cars.splice( index, 1 );
    }

}
