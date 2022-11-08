import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { HomePage } from './components/homepage/homepage.component';
import { ChartPageContainer } from './components/charts/chart.page.container';
import { GridContainer } from './components/grid/grid.container';
import { ProfileForm } from './components/profile/profile.form.component';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { Button, Flag, Header, Tab, TabBar, Toggle, Dialog } from './react-style-comp/element-wrappers';
import './App.css';
import { CointainersPage } from './components/containers/containers.component';

interface AppProps {
  theme: any;
  nr?: number; // testing
}

export const App: React.FC<AppProps> = ({ theme, nr }: AppProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dialogRef = useRef({ opened: false });
  const [dialogOpen, setDialogOpen] = useState(false);

  const [checked, setChecked] = useState(theme);
  const [chartType, setChartType] = useState('line');

  useEffect(() => {
    const isChecked = theme === 'dark' || undefined;
    document.body.setAttribute('theme', theme);
    setChecked(isChecked);
  }, [theme]);

  const handleClickToggleTheme = (e: any) => {
    const toggleTheme = e.target.checked ? 'dark' : 'light';
    sessionStorage.setItem('elf-theme', toggleTheme);
    window.location.reload();
  };

  const handleToggleEditProfile = () => {
    setDialogOpen(!dialogOpen);
  };

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === 'ro' ? 'en' : 'ro');
  };

  return (
    <React.Fragment>
      <div className="container">
        <Header level="2" className="toolbar">
          <div className="toolbar-items" slot="left">
            <TabBar>
              <Tab value="/" onClick={() => navigate('/')}>
                {t('Home')}
              </Tab>
              <Tab value="/charts" onClick={() => navigate('/interactive-charts')}>
                Interactive Charts
              </Tab>
              <Tab value="/containers" onClick={() => navigate('/containers')}>
                Containers
              </Tab>
              <Tab value="/grid" onClick={() => navigate('/grid')}>
                {t('Grid')}
              </Tab>
            </TabBar>
          </div>
          <div className="toolbar-items" slot="right">
            Theme:
            <Toggle className="theme-switcher" label="light" checked-label="dark" checked={checked} onClick={handleClickToggleTheme}></Toggle>
            <Flag flag={i18n.language === 'ro' ? 'ro' : 'gb'} onClick={handleLanguageChange}></Flag>
            <Button icon="profile" onClick={handleToggleEditProfile}></Button>
          </div>
        </Header>
        <div className="content-container">
          <Routes>
            <Route path="/containers" element={<CointainersPage />} />
            <Route path="/interactive-charts" element={<ChartPageContainer chartType={chartType} setChartType={setChartType} />} />
            <Route path="/grid" element={<GridContainer />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
      <Dialog opened={dialogOpen} header="Edit Profile" onclose={handleToggleEditProfile}>
        <ProfileForm handleConfirm={handleToggleEditProfile} />
      </Dialog>
    </React.Fragment>
  );
};

export default App;
