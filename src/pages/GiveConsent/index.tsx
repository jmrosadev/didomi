import type { ConsentType } from '@/types'

import { Form } from '@/components/Form'

import lang from '@/locales/en-US.json'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Checkbox, Input } from '@material-tailwind/react'
import { useForm } from 'react-hook-form'

import { consentSchema } from './schema'

const DEFAULT_VALUES = {
  name: '',
  email: '',
  agreements: [],
}

export function GiveConsent() {
  const methods = useForm({
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange',
    resolver: zodResolver(consentSchema),
  })

  const handleSubmit = async (consent: ConsentType) => consent

  const agreements = methods.watch('agreements')
  const agreementsHasError = Boolean(methods.formState.errors.agreements)

  return (
    <div className="container m-auto">
      <Form
        methods={methods}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Input
              variant="outlined"
              label={lang.name.label}
              placeholder={lang.name.placeholder}
              className="bg-white"
              {...methods.register('name')}
              error={Boolean(methods.formState.errors.name)}
            />
            {Boolean(methods.formState.errors.name) && <Form.Error>{methods.formState.errors.name?.message}</Form.Error>}
          </div>

          <div>
            <Input
              type="email"
              variant="outlined"
              label={lang.email.label}
              placeholder={lang.email.placeholder}
              className="bg-white"
              {...methods.register('email')}
              error={Boolean(methods.formState.errors.email)}
            />
            {Boolean(methods.formState.errors.email) && <Form.Error>{methods.formState.errors.email?.message}</Form.Error>}
          </div>
        </div>

        <fieldset className="border border-blue-gray-100 space-y-4 flex flex-col p-4 w-1/2 m-auto">
          <legend className="text-center font-bold">
            {lang.agree}
            :
          </legend>
          <Checkbox value="newsletter" label={lang.agreements.newsletter} className="bg-white" {...methods.register('agreements')} />
          <Checkbox value="ads" label={lang.agreements.ads} className="bg-white" {...methods.register('agreements')} />
          <Checkbox value="statistics" label={lang.agreements.statistics} className="bg-white" {...methods.register('agreements')} />

          {agreementsHasError && <Form.Error>{lang.agreements.error.required}</Form.Error>}
        </fieldset>

        <div className="text-center">
          <Button variant="filled" size="lg" type="submit" disabled={agreementsHasError || agreements.length === 0}>{lang.createConsent}</Button>
        </div>
      </Form>
    </div>
  )
}
