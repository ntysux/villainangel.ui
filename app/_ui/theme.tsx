'use client'

import { useEffect, useState } from 'react'
import { setTheme } from '../_lib/theme'
import { Switch } from '@headlessui/react'

export default function Theme({
  mode
}: {
  mode: boolean
}) {
  const [enabled, setEnabled] = useState(mode)

  useEffect(() => {
    setTheme(enabled ? 'dark' : 'light')
  }, [enabled])

  return (
    <div className="fixed top-5 right-5 z-10">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`
          ${enabled ? 'bg-neutral-700' : 'bg-neutral-300/75'}
          outline-none flex py-0.5 px-2.5 rounded-full transition-colors duration-300
        `}
      >
        <span
          className={`
            ${enabled ? 'translate-x-2' : '-translate-x-2'}
            p-2 rounded-full bg-white transform transition-transform duration-300
          `}
        />
      </Switch>
    </div>
  )
}