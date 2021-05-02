export interface Users {

    id: number,
    name: string,
    email: string,
    gender?: string
    // ? means, this field is optional
    address?: {
        street: string;
        city: string;
        zip: string
    }
}
