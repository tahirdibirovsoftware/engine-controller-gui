import { ElectronAPI } from '@electron-toolkit/preload'

interface API {
  moveEngine: (value: number)=>void
} 

declare global {
  interface Window {
    electron: ElectronAPI
    api: API
  }
}
