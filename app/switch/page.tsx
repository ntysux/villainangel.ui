'use client'
import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function Page() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`
        ${enabled ? 'bg-neutral-500 dark:bg-neutral-700' : 'bg-neutral-300/75 dark:bg-neutral-600'}
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
  )
}
