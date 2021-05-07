export interface Employee {

    id: number;
    name: string;
    email: string;
    mobile: string;
    gender: string;
    roles: string[],
    addresses: Array<Address>;
}

export interface Address {
    city: string;
    street: string;
    zipcode: number;
}