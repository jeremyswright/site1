import Layout from '../Layout'
import { Head } from '@inertiajs/react'

export default function Maint({ vehicle }) {
    return (
        <Layout>
            <Head title="Vehicle CRUD" />
            <p>Vehicle CRUD</p>
            <p>{JSON.stringify(vehicle)}</p>
        </Layout>
    )
}
