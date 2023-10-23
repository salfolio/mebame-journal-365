import Image from 'next/image'
import JournalPrompt from '@/components/journal-prompt'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Header/>
      <JournalPrompt />
      <Footer/>
    </>
  )
}
