import { toast, ToastOptions } from 'react-toastify'

interface Props {
  message: string
  type: 'success' | 'error' | 'warning' | 'info' | 'default'
  whereInTheScreen: 'top-right' | 'bottom-right'
}

export function ToastyNotification({ message, type, whereInTheScreen }: Props) {
  const toastOptions: ToastOptions = {
    position: whereInTheScreen,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  }

  switch (type) {
    case 'success':
      toast.success(message, toastOptions)
      break
    case 'error':
      toast.error(message, toastOptions)
      break
    case 'warning':
      toast.warning(message, toastOptions)
      break
    case 'info':
      toast.info(message, toastOptions)
      break
    case 'default':
      toast(message, toastOptions)
      break
    default:
      // Handle unsupported type
      break
  }

  return null // You can return something meaningful if needed
}
