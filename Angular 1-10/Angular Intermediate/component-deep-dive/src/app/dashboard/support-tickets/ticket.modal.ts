export interface TicketType{
    id: string,
    title: string,
    request: string,
    status: 'open' | 'closed';
}