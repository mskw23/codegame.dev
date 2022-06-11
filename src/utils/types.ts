export type Question = {
  id: string;
  code: string;
  didYouKnow: string;
  correct: number[];
};

export type Path = {
  id: string;
  name: string;
  icon: JSX.Element;
};
