type TodoWithId = {
    readonly id: string;
    title: string;
    subtitle: null | string;
    description: string;
}

// Pick<T, Keys>
type Todo = Pick<TodoWithId, "title" | "subtitle" | "description">;
// Or
// Omit<T, Keys>
type Todo = Omit<TodoWithId, "id">

const t1: Todo = {
    title: "foo",
    subtitle: "bar",
    description: "",
};

// Partial<T>
const updateTodo = (todo: Todo, update: Partial<Todo>): Todo => {
    // ...
}
const t2 = updateTodo(t1, { description: "hello world" });

// Required<T>
const resetTodo = (todo: Todo, newTodo: Required<Todo>): Todo => {
    // ...
}
const t3 = resetTodo(t1, { description: "hello world" });
// Type '{ description: string; }' is missing the following properties from type 'Required<Todo>': title, subtitle

// Readonly<T>
const immutableTodo: Readonly<Todo> = t2;
immutableTodo.subtitle = ""
// TS2540: Cannot assign to 'subtitle' because it is a read-only property.

// Record<Key, T>
const obj: Record<string, Todo> = {
    t1: t1,
    t2: t2,
};
