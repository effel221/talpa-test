export interface Product {
    id: number;
    date?: Date;
    city: string;
    name: string;
    type: string;
    description: string;
}

export interface CarRentalsInteface {
    car_rentals: Product[]
}
