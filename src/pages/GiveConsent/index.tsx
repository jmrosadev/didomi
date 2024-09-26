import lang from '@/locales/en-US.json'

import { Button, Checkbox, Input } from '@material-tailwind/react'

export function GiveConsent() {
  return (
    <div>
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-8">
          <Input
            variant="static"
            label={lang.name.label}
            placeholder={lang.name.placeholder}
            name="name"
          />

          <Input
            variant="static"
            label={lang.email.label}
            placeholder={lang.email.placeholder}
            name="email"
          />
        </div>

        <fieldset className="space-y-4 flex flex-col p-4">
          <legend className="text-center font-bold">
            {lang.agree}
            :
          </legend>
          <Checkbox value="newsletter" label={lang.agreements.newsletter} />
          <Checkbox value="ads" label={lang.agreements.ads} />
          <Checkbox value="statistics" label={lang.agreements.statistics} />
        </fieldset>

        <div className="text-center">
          <Button variant="filled" size="lg" type="submit">{lang.createConsent}</Button>
        </div>
      </form>
    </div>
  )
}
