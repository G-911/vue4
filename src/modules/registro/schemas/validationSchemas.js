import * as yup from 'yup'

export const schema = yup.object({
    nombre: yup.string().required(),
    email: yup.string().email().required()
    // email: yup.string().email('Invalid email format').required('Email is required')
})