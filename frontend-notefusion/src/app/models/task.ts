export interface Task {
    id: number | null;
    title: string;
    description: string;
    fechaDesde: Date;
    fechaHasta: Date;
}
