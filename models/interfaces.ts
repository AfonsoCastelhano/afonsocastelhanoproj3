export interface Municipality {
    id: number;
    district_name: string;
    name: string;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { 
        rate: number;
        count: number;
    };
}