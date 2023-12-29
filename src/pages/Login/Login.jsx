import React, { Suspense, lazy } from 'react';
import { images } from '../../Shared/Images';
const Loading = lazy(()=> import('../../Shared/Loading'))

const Login = () => {
    return (
        <Suspense fallback={<Loading />}>
            <main>
                <div>
                    <img src={images.login} alt="" />
                </div>
            </main>
        </Suspense>
    );
};

export default Login;