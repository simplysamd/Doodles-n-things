import {useLocation} from 'wouter'

export default function ThingsList() {
  const [, navigate] = useLocation()

  const doodles = [
    {
      name: '.hack GU Item Tracker',
      desc: 'Track items from .hack GU games using checkboxes and local storage',
      path: '/things/dothackgu',
    },
  ]

  return doodles.map((doodle) => {
    return (
      <div
        key={doodle.path}
        onClick={() => navigate(doodle.path)}
        className={'cursor-pointer hover:indent-1 hover:text-slate-300 transition-all duration-100'}
      >
        <h3 className={'text-xl'}>{doodle.name}</h3>
        <p className={'text-xs italic'}>{doodle.desc}</p>
      </div>
    )
  })
}
