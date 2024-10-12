import { useRoute } from '../../../../vendor/tightenco/ziggy/src/js'
import { FieldGroup } from '../../Components/FieldGroup'
import { FieldInput } from '../../Components/FieldInput'
import { FieldLabel } from '../../Components/FieldLabel'
import Layout from '../Layout'
import { Head, router, useForm, usePage } from '@inertiajs/react'
import { useState } from 'react'
import { FormButton } from '../../Components/FormButton'
import { FlashType } from '../../Types/Utility'
import { PagePropsInterface } from '../../Types/Inertia'

export default function Maint({ vehicle }) {
    const { flash } = usePage<PagePropsInterface>().props

const { data, setData, processing, errors } = useForm({
    name: vehicle.name,
    registration: vehicle.registration,
    no_seats: vehicle.no_seats,
    can_tow: vehicle.can_tow,
})

const route = useRoute();

function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value
    setData(data => ({
        ...data,
        [key]: value,
    }))
}

function handleSubmit(e) {
    e.preventDefault()

    console.dir(route().current())

    if (route().current() == 'vehicles.edit') {
        router.put(`/vehicles/${vehicle.id}`, data)
    } else {
        router.post('/vehicles', data)
    }
}

return (
    <Layout>
        <Head title="Vehicle CRUD" />
        <p>Vehicle CRUD</p>

        {flash.error && (
            <div className="alert">{flash.error}</div>
        )}

        <form onSubmit={handleSubmit}>
            <FieldGroup>
                <FieldLabel className="md:w-1/2" label='Name' />
                <FieldInput type='text' name='name' value={data.name} onChange={handleChange} />
            </FieldGroup>

            <FieldGroup>
                <FieldLabel className="md:w-1/2" label='Registration' />
                <FieldInput type='text' name='registration' value={data.registration} onChange={handleChange} />
            </FieldGroup>

            <FieldGroup>
                <FieldLabel className="md:w-1/2" label='Capacity' />
                <FieldInput type='number' name='no_seats' value={data.no_seats} onChange={handleChange} />
            </FieldGroup>

            {route().current() != 'vehicles.show' &&
                <FormButton type='submit' disabled={processing}>Submit</FormButton>
            }
        </form>
    </Layout>
)
}