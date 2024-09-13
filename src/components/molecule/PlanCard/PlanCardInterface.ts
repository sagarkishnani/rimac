export interface PlanCardProps {
    id: number;
    name: string;
    description: string;
    isSelected: boolean;
    onSelect: (id: number) => void;
}