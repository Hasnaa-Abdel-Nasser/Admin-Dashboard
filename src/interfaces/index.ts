export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating?: {
        rate: number;
        count: number;
    };
}

export interface IFormInput{
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export interface IErrorResponse{
    message:string
}
