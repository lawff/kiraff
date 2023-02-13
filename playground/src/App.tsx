import { Toast, Notification } from '@kiraff/ui'

function App() {

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline cursor-pointer" onClick={() => {
        // Toast.app('Hello kiraff! kiraff ui playground!')
        // Toast.success('Hello kiraff! kiraff ui playground!')
        // const id = Toast.loading()
      }}>
        kiraff ui playground
      </h1>
      <h1 className="text-3xl font-bold underline cursor-pointer" onClick={() => {
        Toast.app('Hello kiraff!')
        // Toast.success('Hello kiraff! kiraff ui playground!')
      }}>
        kiraff ui playground
      </h1>
      <Notification />
    </div>
  )
}

export default App
