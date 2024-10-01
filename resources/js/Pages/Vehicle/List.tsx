import Layout from '../Layout'
import { Head, usePage } from '@inertiajs/react'
import { PagePropsInterface } from '../../Types/Inertia'

export default function List({ vehicles }) {
    const { flash } = usePage<PagePropsInterface>().props

    console.dir(flash)

    return (
        <Layout>
            <Head title="Vehicle List" />
            <p>Vehicle List</p>

            {flash.message && (
                <div className="alert">{flash.message}</div>
            )}

            <ul>
                {vehicles.length ? (
                    vehicles.map((row) => {
                        return (
                            <div key={Math.random()}>
                                <li className="md:align-text-left align-text-top md:table-row flex flex-wrap w-full md:flex-row flex-col border-b md:border-b-0 leading-normal">
                                    {JSON.stringify(row)}
                                </li>
                            </div>
                        )
                    })
                ) : (
                    <li key={Math.random()}>Nothing found</li>
                )}
            </ul>
        </Layout>
    )
}
