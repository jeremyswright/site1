import Layout from '../Layout'
import { Head, usePage } from '@inertiajs/react'
import { FormButton } from '@/Components/FormButton';
import { VehicleInterface } from '@/Types/Vehicle';
import { PagePropsInterface } from '@/Types/Inertia';

interface ListProps {
    vehicles: VehicleInterface[];
}

export default function List({ vehicles }: ListProps) {
    const { flash } = usePage<PagePropsInterface>().props

    return (
        <Layout>
            <Head title="Vehicle List" />
            <p>Vehicle List</p>

            {flash.message && (
                <div className="md:w-1/2 md:mx-auto alert alert-success bg-green-100 border border-green-400 text-green-700 px-4 py-3 my-3 rounded relative" role="alert">
                    {flash.message}
                </div>
            )}

            {flash.message && (
                <style>
                    {`
                        .alert {
                            animation: fadeOut 5s forwards;
                        }

                        @keyframes fadeOut {
                            0% { opacity: 1; }
                            100% { opacity: 0; display: none; }
                        }
                    `}
                </style>
            )}

            <table className='w-full mx-3'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Registration</th>
                        <th>Name</th>
                        <th>No Seats</th>
                        <th>Can Tow</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map(vehicle => (
                        <tr key={vehicle.id}>
                            <td>
                                <FormButton onClick={() => window.location.href = `/vehicles/${vehicle.id}/edit`}>Details</FormButton>
                            </td>
                            <td>
                                {vehicle.registration}
                            </td>
                            <td>{vehicle.name}</td>
                            <td>{vehicle.no_seats}</td>
                            <td>{vehicle.can_tow ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout >
    )
}
