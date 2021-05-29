import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation tokenAuth($email: String! $password: String!) {
    tokenAuth(
        email: $email, 
        password: $password
    ) {
        success,
        errors,
        token,
        refreshToken
        user {
            email
        }
    }
}
`

export const REGISTER = gql`
mutation register($email: String! $username: String! $password1: String! $password2: String!) {
    register(
        email: $email,
        username: $username,
        password1: $password1,
        password2: $password2
    ) {
        success,
        errors,
        token,
        refreshToken,
    }
}
`
