import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_USERS } from '../graphql/Queries';

function GetUsers() {

    const {error, loading, data} = useQuery(LOAD_USERS)
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (data) {
            console.log(data.users.edges)
            setUsers([data.users.edges[0].node.email])
        }  
    }, [data])

    return (
        <div>
            {users}
        </div>
    )
}

export default GetUsers