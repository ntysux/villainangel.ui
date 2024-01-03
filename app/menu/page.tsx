'use client'
import { Menu, Transition } from '@headlessui/react'
import { IconKeyframes, IconStack, IconSwipe, TablerIconsProps } from '@tabler/icons-react'

interface List {
  name: string
  quantity?: number
  color?: string
  Icon: (props: TablerIconsProps) => JSX.Element
}

const list: List[] = [
  {name: 'Premium', Icon: IconKeyframes, color: 'text-purple-300'},
  {name: 'Công thức', Icon: IconSwipe, quantity: 21},
  {name: 'Thực đơn', Icon: IconStack, quantity: 3}
]

export default function Page() {
  return (
    <Menu as='div' className='relative'>
      {({open}) => (
        <>
          <Menu.Button>
            More
          </Menu.Button>
          <Transition
            show={open}
            enter="ease-out duration-200"
            enterFrom="scale-95"
            enterTo="scale-100"
            leave="ease-in duration-200"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <Menu.Items 
              as='ul'
              className='
                absolute z-10 overflow-hidden mt-3 py-4 flex flex-col rounded-xl w-screen max-w-xs bg-white shadow-lg shadow-neutral-200
                dark:bg-neutral-700 dark:shadow-neutral-700
              '
            >
              {list.map(({name, Icon, quantity, color}, index) => 
                <Menu.Item 
                  key={index} 
                  as='li' 
                  className='py-4 px-7 cursor-pointer flex items-center justify-between group'
                >
                  <div className='flex items-center gap-3'>
                    {
                      Icon && 
                      <Icon 
                        size='20px' 
                        strokeWidth='2.3' 
                        className={`${color ?? 'text-neutral-300 dark:text-neutral-500'}`} 
                      />
                    }
                    <span className='text-sm text-neutral-800 font-medium group-hover:font-bold dark:text-neutral-300'>
                      {name}
                    </span>
                  </div>
                  {
                    quantity &&
                    <span className='px-3 py-0.5 flex text-xs text-neutral-700 font-medium bg-neutral-200 rounded-xl dark:bg-neutral-600 dark:text-neutral-300'>
                      {quantity}
                    </span>
                  }
                </Menu.Item>
              )}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}