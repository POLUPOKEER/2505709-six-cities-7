export type TComment = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}

export type TComments = TComment[];

export type TFormState = {
  comment: string;
  rating: number;
};
