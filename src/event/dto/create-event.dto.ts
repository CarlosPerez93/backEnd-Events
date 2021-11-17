export class CreateEventDto {
    description: string;
    num_participants: number;
    startDate: number;
    duration: number;
    fk_user: number;
    fk_type: number;
    fk_place: number;
}
