type Product = {
    [productName: string]: {
        amount: {
            selling: number;
            deno: number;
            cost: number;
        };
        code: string;
        subCode: string;
    }
}

type RGB = {
    r: number;
    g: number;
    b: number;
}

type Color = {
    color1: RGB;
    color2: RGB;
}

type toSwitch<T> = {
    [Property in keyof T]: boolean;
}

const colorSwitch: toSwitch<Color> = {
    color1: false,
    color2: false,
}

type RGB = {
    r: number;
    g: number;
    b: number;
};

type ImmutableColor = {
    readonly color1: RGB;
    readonly color2: RGB;
};

// Removes 'readonly' attributes from a type's properties
type toMutable<T> = {
    -readonly [Property in keyof T]: T[Property];
};
type MutableColor = toMutable<ImmutableColor>;

/*
type MutableColor = {
  color1: RGB;
  color2: RGB;
}
*/

type Getters<T> = {
    [Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property]
}

type ColorGetter = Getters<Color>;
/*
type ColorGetter = {
  getColor1: () => RGB;
  getColor2: () => RGB;
}
*/
