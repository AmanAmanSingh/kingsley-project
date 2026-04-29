export type TicketStatus = 'Backlog' | 'Triaged' | 'In Progress' | 'Waiting on Info' | 'Resolved';
export type Priority = 'Low' | 'Medium' | 'High' | 'Critical';
export type TicketType = 'Bug' | 'Feature' | 'Documentation' | 'Performance' | 'Security' | 'UX/UI' | 'API' | 'Database';

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: string;
    status?: 'online' | 'offline' | 'away';
}

export interface Ticket {
    id: string;
    title: string;
    description: string;
    status: TicketStatus;
    priority: Priority;
    type: TicketType[];
    assignee?: User;
    created_date: string;
    updated_date: string;
    deadline?: string;
    tags?: string[];
    estimated_time?: string;
    reporter: User;
}

export interface Team {
    id: string;
    name: string;
    members: User[];
    description?: string;
    avatar?: string;
}

export interface DashboardStats {
    total_tickets: number;
    open_tickets: number;
    sla_at_risk: number;
    resolved_this_week: number;
    weekly_trend: Array<{ day: string; count: number }>;
}

export interface ReportData {
    type: 'resolution_time' | 'team_performance' | 'ticket_volume' | 'popular_issues';
    data: any[];
}
