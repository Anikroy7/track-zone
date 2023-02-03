import ClockList from "./components/clock-list"
import useClock from "./components/hooks/useClock"
import LocalClock from "./components/local-clock"

function App() {
  const { clock: local } = useClock()
  const { clock: est } = useClock('EST')
  const { clock: pst } = useClock('PST')
  const { clock: pakisthan } = useClock('UTC', 1 * 60)

  console.log('local utc', local.date)
  console.log('pst clock', pst.date)
  console.log('pst clock', pst.date_utc)

  /*  console.log('est clock', est.date)
   console.log('pakisthan clock', pakisthan.date) */
  return (
    <div>
      <LocalClock />
      <ClockList />
    </div>
  )
}

export default App
