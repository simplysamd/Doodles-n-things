import {useLocation} from 'wouter'

export default function DoodlesList() {
  const [, navigate] = useLocation()

  const doodles = [
    {
      name: 'Checklist',
      desc: 'Basic checklist with custom checkboxes',
      path: '/doodles/checklist',
    },
    {
      name: 'Buttons',
      desc: "It's buttons",
      path: '/doodles/buttons',
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
