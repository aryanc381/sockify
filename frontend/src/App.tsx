import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import { ThemeProvider } from './components/ui/theme-provider';
function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <BrowserRouter>
        <Routes>
          <Route path='/chat' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  )
}

export default App
