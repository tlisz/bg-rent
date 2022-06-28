export interface Game {
    id: number;
    barcode: string;
    name: string;
    qty: number;
    notRentedQty: number;
    playerFrom: number;
    playerTo: number;
    playTime: string;
}
