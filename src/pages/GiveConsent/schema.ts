import lang from '@/locales/en-US.json'
import { ConsentAgreementType } from '@/types'

import { z } from 'zod'

export const consentSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, { message: lang.email.error.required })
      .email({ message: lang.email.error.invalid }),
    name: z
      .string()
      .trim()
      .min(1, { message: lang.name.error.required }),
    agreements: z.array(z.nativeEnum(ConsentAgreementType)).min(1),
  })
