type ExpiryDateTime = {
    days: number;
    hours: number;
    minutes: number;
}

const expiryDateTime: ExpiryDateTime = {
    days: 0,
    hours: 0,
    minutes: 0,
}

const onChange = (
    key: keyof ExpiryDateTime, // days | hours | minutes,
    val: number
): void => {
    expiryDateTime[key] = val
}
