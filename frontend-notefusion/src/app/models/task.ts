export interface Task {
    title: string;
    description: string;
    fechaDesde: string;
    fechaHasta: string;
}

export interface TaksUpdate extends Task {
    id: number;
}

