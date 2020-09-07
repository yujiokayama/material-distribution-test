export type TileData = {
  image: string;
  keyword: string[];
  title: string;
};

type TypeObjectInArray<T, S> = {
  id: T;
  name: S;
};

const objectInArray: Array<TypeObjectInArray<number, string>> = [
  {
    id: 1,
    name: "xxx",
  },
];
