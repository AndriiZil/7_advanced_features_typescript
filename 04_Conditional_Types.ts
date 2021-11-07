type NumberId = {
    id: number;
}

type StringId = {
    id: string;
}

type GetId =
    | ((id: string) => StringId)
    | ((id: string) => NumberId)
    | ((id: string | number) => StringId | NumberId)


type NumberId = {
    id: number;
};

type StringId = {
    id: string;
};

type StringOrNumber<T extends string | number> = T extends string
    ? StringId
    : NumberId

const getId = <T extends string | number>(val: T): StringOrNumber<T> => {
    //...
}

const s = getId('1');
const n = getId(2);