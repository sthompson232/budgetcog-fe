import { gql } from '@apollo/client'

export const LOAD_USERS = gql`
query {
    users {
        edges {
            node {
                email
            }
        }
    }
}
`;

export const CURRENT_USER = gql`
query {
    me {
        email
    }
}
`;

