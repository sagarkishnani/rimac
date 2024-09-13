export interface SpecialPlanCardProps {
    name: string;
    price: number;
    discountedPrice: number | null;
    description: string[];
    onSelect: (name: string) => void;
}