import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) {}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById ( @Param('id', ParseUUIDPipe ) id: string ) {
        return this.carsService.findById( id );
    }

    @Post()
    createCar( @Body() newCar: any ) {
        return this.carsService.addCar( newCar );
    }

    @Patch(':id')
    updateCar(
        @Param('id') id: string,
        @Body() updatedCar: any )
    {
        return this.carsService.updateCar( id, updatedCar );
    }

    @Delete(':id')
    deleteCar( @Param('id') id: string ) {
        return this.carsService.deleteCar( id );
    }
}
