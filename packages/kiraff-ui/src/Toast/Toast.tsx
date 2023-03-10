import React from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Loading } from '../Loading'

export function Notification() {
  return (
    <>
      <Toaster />
    </>
  )
}

export const Toast = {
  app: (message: string) => {
    toast.custom(t => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'hidden'
        } max-w-[80%] bg-[#24262B] relative bottom-[calc(50vh-16px)] translate-y-[50%] opacity-80 text-[#fff] py-[11px] px-[17px] text-center pointer-events-auto`}
      >
        {message}
      </div>
    ), {
      duration: 2000,
      position: 'bottom-center',
    })
  },
  success: (message: string) => {
    toast.success(message)
  },
  error: (message: string) => {
    toast.error(message)
  },
  loading: (message?: string) => {
    return toast.custom(t => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'hidden'
        } max-w-[80%] bg-[#24262B] relative bottom-[calc(50vh-16px)] translate-y-[50%] opacity-80 text-[#fff] py-[11px] px-[17px] text-center pointer-events-auto`}
      >
        <div className="text-center">
          <Loading />
          {message}
        </div>
      </div>
    ), {
      duration: Infinity,
      position: 'bottom-center',
    })
  },
  dismiss: (id?: string) => {
    toast.dismiss(id)
  },
}
