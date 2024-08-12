export interface Product {
    id: number;
    city: string;
    name: string;
    type: string;
    description: string;
}

export interface FlightProduct extends Product {
    date: Date;
}

export interface CarRentalsInteface {
    car_rentals: Product[]
}
