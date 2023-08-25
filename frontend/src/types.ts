export type TextType = { id: number; text: string };
export type TextArray = Array<TextType>;
export type TextsResponseType = { texts: Array<TextType> };
export type TextFormProps = { fetchList: () => void };
export type TextListProps = { listIsLoading: boolean, fetchData: Function, data: TextArray };