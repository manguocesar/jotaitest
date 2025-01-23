'use server';
import ThemeSwitcher from '../components/ThemeSwitcher';
import ReadOnly from '../components/ReadOnly';

export default async function Page() {
 
  return (
    <div>
      <ThemeSwitcher />
      <ReadOnly />
    </div>
  )
}