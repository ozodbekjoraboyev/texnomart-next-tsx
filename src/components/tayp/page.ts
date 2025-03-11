export type CardsType = {
  all_count: number;
  availability: string;
  axiom_monthly_price: string;
  benefit: number;
  discount_price: number;
  id: number;
  image: string;
  is_can_loan_order: number;
  name: string;
  old_price: null;
  reviews_average: null;
  reviews_count: number;
  sale_price: number;
};

export type BashCardType = {
  item: CardsType;
};
