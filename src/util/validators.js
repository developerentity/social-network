export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


// export const required = value => (value ? undefined : 'Field must by filled')

export const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)

export const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
    
export const minLength = min => value =>
    value.length >= min ? undefined : `Should be longer than ${min} symbols`
    
export const required = (value) => {
    if (value) return undefined
    return `Field must by filled`
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `max length is ${maxLength} symbols`
    return undefined
}