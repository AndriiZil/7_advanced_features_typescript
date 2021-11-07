const getHisOrHer = (val: number): 'his' | 'her' => {
    // ...
}

type HisOrHer = ReturnType<typeof getHisOrHer> // "his" | "her"

// OR

type GetHisOrHerFunc = (val: number) => 'his' | 'her'

const getHisOrHer: GetHisOrHerFunc = (val: number) => {
    // ...
}

type HisOrHer = ReturnType<GetHisOrHerFunc> // "his" | "her"
