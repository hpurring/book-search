import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me {
            _id
            username
            bookCount
            savedBooks {
                _bookId 
                title
                description
                image
                link
                authors
            }
        }
    } 
`