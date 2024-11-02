{
    //
    interface Developer<T, B = null> {
        name: string;
        age: number;
        computer: {
            name: string;
            model: string;
            price: number;
            releaseYear: number
        };
        phone: {
            name: string;
            model: string;
            price: number;
            releaseYear: number
        };
        smartWatch: T;
        bike?: B;
    }

    type PoorManWatch = {
        name: string;
        price: number;
        heartTrack: boolean;
    }

    interface RoyalEnfield {
        name: string,
        enginePower: string,
        price: number
    }



    const poorDeveloper: Developer<PoorManWatch> = {
        name: 'Sabbir',
        age: 23,
        computer: {
            name: 'Dell',
            model: 'Inspiron 4100',
            price: 50000,
            releaseYear: 2020
        },
        phone: {
            name: 'Redmi',
            model: 'Note 7 pro',
            price: 15000,
            releaseYear: 2018
        },
        smartWatch: {
            name: 'araimo',
            price: 2000,
            heartTrack: true,
        }
    }

    const richDeveloper: Developer<PoorManWatch, RoyalEnfield> = {
        name: 'Sabbir',
        age: 23,
        computer: {
            name: 'Dell',
            model: 'Inspiron 4100',
            price: 50000,
            releaseYear: 2020
        },
        phone: {
            name: 'Redmi',
            model: 'Note 7 pro',
            price: 15000,
            releaseYear: 2018
        },
        smartWatch: {
            name: 'araimo',
            price: 2000,
            heartTrack: true,
        },
        bike: {
            name: 'Royal Enfield',
            enginePower: '350 cc',
            price: 400000
        }
    }
    //
}