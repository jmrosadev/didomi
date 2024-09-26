import lang from '@/locales/en-US.json'

export function CustomError({ error }: { error: string }) {
  return (
    <div>
      <h3 className="font-semibold text-xl text-red-400">{lang.error.title}</h3>
      <p>{lang.error.description}</p>

      <div className="border border-red-100 p-4 mt-12">
        <p>
          <b>Error</b>
          :
          {' '}
          {error}
        </p>
      </div>
    </div>
  )
}
