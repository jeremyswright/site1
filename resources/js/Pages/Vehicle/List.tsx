import Layout from '../Layout'
import { Head, usePage } from '@inertiajs/react'
import { FormButton } from '@/Components/FormButton';
import { VehicleInterface } from '@/Types/Vehicle';

interface ListProps {
    vehicles: VehicleInterface[];
}

export default function List({ vehicles }: ListProps) {
    return (
        <Layout>
            <Head title="Vehicle List" />
            <p>Vehicle List</p>

            <table className='w-full'>
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
                                <FormButton onClick={() => window.location.href = `/vehicles/${vehicle.id}`}>Details</FormButton>
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
