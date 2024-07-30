import { ParkingLot } from './parkingLot.js';
import { Car } from './car.js';


const main = async () => {
    const parkingLot = new ParkingLot(5);
    const { park, leave, check } = await parkingLot.initialize();

    try {
        // membuat objek mobil
        const car1 = new Car('B1234ABC', 'Iklil');
        const car2 = new Car('B5678DEF', 'Ali');
        const car3 = new Car('B91011GHI', 'Amanda');
        const car4 = new Car('B12131JKL', 'Mirza');
        const car5 = new Car('B14151MNO', 'Sandy');
        const car6 = new Car('B16171PQR', 'Sponsbob');

        //parkir mobil
        await park(car1);
        await park(car2);
        await park(car3);
        await park(car4);
        await park(car5);

        //Status tempat parkir
        console.log("Info tempat parkir Enigmapark");
        console.log(await check());


        //Mencoba parkir ketika parkiran penuh
        try {
            await park(car6);
        } catch (error) {
            console.log(error);
        }

         // Mengeluarkan mobil dan memeriksa status lagi
         await leave('B1234ABC');
         console.log('Status setelah mengeluarkan mobil dengan nopol B1234ABC:');
         console.log(await check());
 
         // Memarkir mobil yang sebelumnya dikeluarkan
         await park(car6);
         console.log('Status setelah memarkir mobil dengan nopol B16171PQR:');
         console.log(await check());

    } catch (error) {
        console.log(error);
    }

}

main();