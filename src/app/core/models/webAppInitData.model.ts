export interface webAppInitData {
    query_id?: string,
    user?: {},
    receiver?: {},
    chat?: {},
    chat_instance: string,
    chat_type?: string,
    start_param?: string,
    can_send_after?: number,
    auth_date: number,
    hash: string
}