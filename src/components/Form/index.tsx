import { Typography } from '@material-tailwind/react'
import { FormProvider, type UseFormReturn } from 'react-hook-form'

type FormProps<T> = Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
  methods: UseFormReturn<any, Record<string, unknown>>
  onSubmit: (data: T) => void
}

export function Form<T>({
  methods,
  onSubmit,
  children,
  ...props
}: React.PropsWithChildren<FormProps<T>>) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  )
}

function FormError({
  children,
}: React.PropsWithChildren) {
  return <Typography color="red" className="my-0.5 text-xs">{children}</Typography>
}

Form.Error = FormError
