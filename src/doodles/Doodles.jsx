import Page from '../components/Page'
import DoodlesList from './DoodleList'
import ChecklistDoodle from './ChecklistDoodle'
import {useRoute} from 'wouter'
import ButtonsDoodle from './ButtonsDoodle'

export default function Doodles() {
  const [isChecklist] = useRoute('/doodles/checklist*')
  const [isButtons] = useRoute('/doodles/buttons*')

  const routes = [
    {match: isChecklist, component: ChecklistDoodle},
    {match: isButtons, component: ButtonsDoodle},
  ]

  let Component = DoodlesList

  routes.some((route) => {
    if (route.match) Component = route.component
    return route.match
  })

  return (
    <>
      <Page>
        <Component />
      </Page>
    </>
  )
}
