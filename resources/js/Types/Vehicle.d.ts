export interface VehicleInterface {
    id: number;
    no_seats: number;
    name?: string;
    registration?: string;
    can_tow: boolean;
    created_at?: Date;
    updated_at?: Date;
}
