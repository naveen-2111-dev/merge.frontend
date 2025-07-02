import { Suspense } from 'react'
import PoolsWrapper from './PoolsWrapper'

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PoolsWrapper />
        </Suspense>
    )
}
