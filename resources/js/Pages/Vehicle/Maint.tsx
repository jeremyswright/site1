import { useRoute } from '../../../../vendor/tightenco/ziggy/src/js'
import { FieldGroup } from '../../Components/FieldGroup'
import { FieldInput } from '../../Components/FieldInput'
import { FieldLabel } from '../../Components/FieldLabel'
import Layout from '../Layout'
import { Head, router, useForm } from '@inertiajs/react'
import { useState } from 'react'
import { FormButton } from '../../Components/FormButton'

export default function Maint({ vehicle }) {
    const { data, setData, processing, errors } = useForm({
        name: vehicle.name,
        registration: vehicle.registration,
        can_tow: vehicle.can_tow,
    })

    const route = useRoute();
    console.dir(route().current())

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

            <form onSubmit={handleSubmit}>
                <FieldGroup>
                    <FieldLabel className="md:w-1/2" label='Name' />
                    <FieldInput type='text' name='name' value={data.name} onChange={handleChange} />
                </FieldGroup>

                <FieldGroup>
                    <FieldLabel className="md:w-1/2" label='Registration' />
                    <FieldInput value={data.registration} name='registration' onChange={handleChange} />
                </FieldGroup>

                {route().current() != 'vehicles.show' &&
                    <FormButton type='submit' disabled={processing}>Submit</FormButton>
                }
            </form>
        </Layout>
    )
}
