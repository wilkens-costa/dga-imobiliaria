export type TransactionType = "compra" | "venda" | "aluguel";

export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  transactionType: TransactionType;
  propertyType: string;
  price: number;
  condominium?: number;
  iptu?: number;
  bedrooms?: number;
  bathrooms?: number;
  parkingSpaces?: number;
  area?: number;
  neighborhood: string;
  city: string;
  state: string;
  address?: string;
  features: string[];
  images: string[];
  featured: boolean;
  active: boolean;
}
