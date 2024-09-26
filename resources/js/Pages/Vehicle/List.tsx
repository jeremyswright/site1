import Layout from '../Layout'
import { Head } from '@inertiajs/react'

export default function List({ vehicles }) {
    return (
        <Layout>
            <Head title="Vehicle List" />
            <p>Vehicle List</p>
            <ul>
                {vehicles.length ? (
                    vehicles.map((row) => {
                        return (
                            <>
                                <li className="md:align-text-left align-text-top md:table-row flex flex-wrap w-full md:flex-row flex-col border-b md:border-b-0 leading-normal"
                                    key={Math.random()}>
                                    {JSON.stringify(row)}
                                </li>
                            </>
                        )
                    })
                ) : (
                    <li key={Math.random()}>Nothing found</li>
                )}
            </ul>
        </Layout>
    )
}
