import { I18nProvider } from './i18n/i18nContext';
import { AppLayout } from './components/layout/AppLayout';

function App() {
  return (
    <I18nProvider>
      <AppLayout />
    </I18nProvider>
  );
}

export default App;
