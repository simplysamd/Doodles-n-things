import {useRoute} from "wouter";
import DotHackGUThing from './DotHackGUThing'
import ThingsList from "./ThingsList.jsx";
import Page from "../components/Page.jsx";

export default function Things () {
  const [isChecklist] = useRoute('/things/dothackgu*')

  const routes = [
    {match: isChecklist, component: DotHackGUThing}
  ]

  let Component = ThingsList

  routes.some(route => {
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