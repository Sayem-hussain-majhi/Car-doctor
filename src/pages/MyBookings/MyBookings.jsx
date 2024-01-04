import React, { lazy } from 'react';
import { Suspense } from 'react';
const Loading = lazy(()=> import('../../Shared/Loading'))

const MyBookings = () => {
    return (
        <Suspense fallback={<Loading />}>
            <div>
                hello 
            </div>
        </Suspense>
    );
};

export default MyBookings;