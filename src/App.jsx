import { Fragment, useState } from 'react';
import './App.css';
import DifferencesSection from './components/DifferencesSection';
import FeedbackSection from './components/FeedbackSection/FeedbackSection';
import Header from './components/Header/Header';
import IntroSection from './components/IntroSection';
import TabsSection from './components/TabsSection';
import TeachingSection from './components/TeachingSection';




function App() {
  
  const [tab, setTab] = useState('intro');

  return (
    <Fragment>
      <Header/>
      <main>
        <TabsSection active={tab} onChange={setTab}/>

        {tab === 'intro' && (<IntroSection/>)}
        {tab === 'learning' && (<TeachingSection/>)}
        {tab === 'differences' && (<DifferencesSection/>)}
        <FeedbackSection></FeedbackSection>
        
      </main>
    </Fragment>
  
  )
}

export default App
