import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { useQuery } from 'react-query';
import { getCart } from '../api/cartApi';


const CartBadge = () => {

    const { user } = useAuth0();

    const { data, isLoading } = useQuery(["GetCartUser", user], async () => await getCart(user?.sub));


    if (isLoading) {
        return <>...</>
    }

    if (data && data?.totalItems) {
        return (<div className="absolute p-[0.15rem] z-10 ml-5 -mt-[0.15rem] text-sm text-white font-semibold rounded-full bg-orange-600">
            {data?.totalItems}
        </div>)
    }
    return <></>
}

export default CartBadge