import {useRoute} from 'wouter'
import DotHackGUThing from './DotHackGUThing'
import ThingsList from './ThingsList.jsx'
import Page from '../components/Page.jsx'
import TodoList from './TodoList/index.jsx'

export default function Things() {
  const [isChecklist] = useRoute('/things/dothackgu*')
  const [isTodos] = useRoute('/things/todos')

  const routes = [
    {match: isChecklist, component: DotHackGUThing},
    {match: isTodos, component: TodoList},
  ]

  let Component = ThingsList

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
