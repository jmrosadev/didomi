import { Menu } from '@/components/Menu'
import { Outlet } from 'react-router-dom'

export function HomeLayout() {
  return (
    <>
      <div className="w-64 bg-gray-800 text-white h-full fixed">
        <Menu>
          <Menu.item to="/give-consent" text="Give Consent" />
          <Menu.item to="/consents" text="Collected consents" />
        </Menu>
      </div>
      <main className="ml-64 flex-1 overflow-auto p-8">
        <h1 className="text-5xl font-bold pb-4 mb-4">Didomi</h1>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  )
}
