import { Car } from "./car.js";

export class ParkingLot {
    capacity;
    parkedCars;
    initializing;

    constructor(capacity) {
        this.capacity = capacity
        this.parkedCars = [];
        this.initializing = new Promise((resolve) => setTimeout(resolve, 5000));
    }

    async initialize() {
        await this.initializing;
        return {
            park: this.park.bind(this),
            leave: this.leave.bind(this),
            check: this.check.bind(this)
        };
    }

    async park(car) {
        if (this.parkedCars.some(parkedCar => parkedCar.nopol === car.nopol)) {
            throw new Error(`Mobil dengan nopol ${car.nopol} sudah terparkir`)
        }

        if (this.parkedCars.length >= this.capacity) {
            throw new Error('Tempat parkir penuh')
        }

        await new Promise(resolve => setTimeout(resolve, 3000));
        this.parkedCars.push(car)
    }

    async leave(nopol) {
        const index = this.parkedCars.findIndex(car => car.nopol === nopol);
        if(index === -1){
            throw Error (`Mobil dengan nopol ${nopol} tidak ditemukan ditempat parkir`);
        }
        await new Promise(resolve => setTimeout(resolve, 1500));
        this.parkedCars.splice(index, 1);
    }

    async check() {
        await new Promise(resolve => setTimeout(resolve, 500));
        return{
            capacity : this.capacity,
            availableSlots : this.capacity - this.parkedCars.length,
            parkedCars : this.parkedCars
        }
    }
}