import { Stack } from '@chakra-ui/layout'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Usuários</NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÂO">
        <Stack spacing="4" mt="8" align="stretch">
          <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink icon={RiGitMergeLine}>Automação</NavLink>
        </Stack>
      </NavSection>
    </Stack>
  )
}
