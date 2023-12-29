import React, { Suspense, lazy } from 'react';
const Loading = lazy(()=> import('../../Shared/Loading'))

const ErrorPage = () => {
    return (
        <Suspense fallback={<Loading />}>
            <main>
                <h2 className="text-6xl text-center my-auto font-bold">Page is NOT Found</h2>
            </main>
        </Suspense>
    );
};

export default ErrorPage;