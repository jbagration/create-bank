import * as yup from 'yup'
import { SchemaLike } from 'yup/lib/types'

const ignoreValidation = yup.string().notRequired()

export const optionalFieldValidation = (
    validate: string | string[],
    schema: SchemaLike
) => {
    return yup.string().when(validate, (val) => {
        if (val) return schema
        return ignoreValidation
    })
}
