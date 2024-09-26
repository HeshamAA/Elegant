import { Outlet } from 'react-router-dom'
import PagesFirstSection from '../../components/common/PagesFirstSection/PagesFirstSection'

export default function DashboardLayout() {
  return (
    <>
    <PagesFirstSection title="Dashboard"></PagesFirstSection>
    <section style={{backgroundColor:"var(--opposite-secondary)"}}><Outlet></Outlet></section>
    </>
  )
}
