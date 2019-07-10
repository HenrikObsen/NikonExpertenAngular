import { Produkt } from '../_models/Produkt';

//http://json2ts.com/
export interface Kategori {
    id: number;
    navn: string;
    billede: string;
    tekst: string;
    produkter: Produkt[];
}

