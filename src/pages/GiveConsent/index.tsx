import lang from '@/locales/en-US.json'

import { Button, Checkbox, Input } from '@material-tailwind/react'

export function GiveConsent() {
  return (
    <div className="container m-auto">
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-8">
          <Input
            variant="outlined"
            label={lang.name.label}
            placeholder={lang.name.placeholder}
            name="name"
            className="bg-white"
          />

          <Input
            variant="outlined"
            label={lang.email.label}
            placeholder={lang.email.placeholder}
            name="email"
            className="bg-white"
          />
        </div>

        <fieldset className="border border-blue-gray-100 space-y-4 flex flex-col p-4 w-1/2 m-auto">
          <legend className="text-center font-bold">
            {lang.agree}
            :
          </legend>
          <Checkbox value="newsletter" label={lang.agreements.newsletter} className="bg-white" />
          <Checkbox value="ads" label={lang.agreements.ads} className="bg-white" />
          <Checkbox value="statistics" label={lang.agreements.statistics} className="bg-white" />
        </fieldset>

        <div className="text-center">
          <Button variant="filled" size="lg" type="submit">{lang.createConsent}</Button>
        </div>
      </form>
    </div>
  )
}
