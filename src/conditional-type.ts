{
    //
    type a = 'number';
    type b = a extends string ? string : false;

    type BikeDetails = {
        brand: string;
        model: string;
        releaseYear: string;
        price: number
    }

    type CheckBikeDetails<T> = T extends keyof BikeDetails ? true : false;
    type hasPrice = CheckBikeDetails<'price'>;
    type hasModel = CheckBikeDetails<'model'>;
    type hasBrand = CheckBikeDetails<'brrand'>;




    //
}