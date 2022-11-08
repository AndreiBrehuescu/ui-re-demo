import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { suggestions, treeData } from '../constants';

import {
  Autosuggest,
  Button,
  ColorDialog,
  ComboBox,
  Counter,
  DateTimePicker,
  EmailField,
  Item,
  MultiInput,
  NumberField,
  Panel,
  PasswordField,
  Select,
  Slider,
  TreeSelect,
} from '../../react-style-comp/element-wrappers';

import './homepage.css';
import { TextField } from '../../react-style-comp/element-wrappers';

export const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [colorOpened, setColorOpened] = useState(false);
  const [rate, setRate] = useState(38.62);
  const [init, setInit] = useState(1000);
  const [conversionValue, setConversionValue] = useState(rate * init);
  const multiInputData = [
    { value: 'V1', label: 'L1' },
    { value: 'V2', label: 'L2' },
    { value: 'V3', label: 'L3' },
  ];

  const [suggestionsData, setSuggestionsData] = useState(suggestions);
  const [suggestionsOpened, setSuggestionsOpened] = useState(false);

  const handleRenderAutoSuggestOnFocus = () => {
    setSuggestionsData(suggestions);
    setSuggestionsOpened(!suggestionsOpened);
  };

  return (
    <div className="content-hm">
      <div className="Homepage">
        <h1>{t('Tab Bar Navigation')}</h1>
        <p>{t('You can also click on a button')}</p>

        <Button onClick={() => navigate('/grid')}>{t('Grid')}</Button>
        <Button
          onClick={() => {
            setColorOpened(!colorOpened);
          }}
        >
          Open color picker dialog
        </Button>
        <ColorDialog opened={colorOpened} onclose={() => setColorOpened(!colorOpened)} />

        <Counter value="20"></Counter>
        <Counter max="100" value="150"></Counter>
        <Counter value="1999"></Counter>
        <Counter max="1000" value="1999"></Counter>
        <Counter max="1000" value="1999"></Counter>
      </div>
      <div className="container-hm">
        <div className="components-hm">
          <TextField id="inputTestAu" placeholder="Type 'e'" onClick={handleRenderAutoSuggestOnFocus}></TextField>
          <Autosuggest attach="#inputTestAu" opened={suggestionsOpened} suggestions={suggestionsData}></Autosuggest>
        </div>
        <div className="components-hm">
          <TreeSelect data={treeData}></TreeSelect>
        </div>
        <div className="components-hm">
          <ComboBox placeholder="Change Placeholder"></ComboBox>
        </div>
        <div className="components-hm">
          <DateTimePicker></DateTimePicker>
          <DateTimePicker range timepicker></DateTimePicker>
        </div>
        <div className="components-hm">
          <EmailField placeholder="Business email address" icon="email"></EmailField>
        </div>
        <div className="components-hm">
          <MultiInput maxLength={3} placeholder="Enter text here"></MultiInput>
          <MultiInput pillsOnly readonly data={multiInputData}></MultiInput>
        </div>
        <div className="components-hm">
          <Select placeholder="Pick item...">
            <Item type="header">Drinks</Item>
            <Item value="1">Cola</Item>
            <Item value="2" disabled>
              Apple Juice
            </Item>
            <Item value="3">Iced Tea</Item>
            <Item type="header">Ice Cream</Item>
            <Item value="4">Vanilla</Item>
            <Item value="5">Chocolate</Item>
            <Item value="6">Honey &amp; Walnut</Item>
            <Item value="7">Raspberry</Item>
          </Select>
          <Select placeholder="Disabled..." disabled></Select>
          <Select placeholder="Default selected...">
            <Item type="header">Drinks</Item>
            <Item value="1">Cola</Item>
            <Item value="2" disabled>
              Apple Juice
            </Item>
            <Item selected value="3">
              Iced Tea
            </Item>
            <Item type="header">Ice Cream</Item>
            <Item value="4">Vanilla</Item>
            <Item value="5">Chocolate</Item>
            <Item value="6">Honey &amp; Walnut</Item>
            <Item value="7">Raspberry</Item>
          </Select>
          <Select disabled>
            <Item selected>Lemonade</Item>
          </Select>
        </div>
        <div className="components-hm">
          <label>Password</label>
          <PasswordField id="pw" pattern="^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"></PasswordField>
          <br />
          <label>Confirm password</label>
          <PasswordField id="confirmedPw" pattern="^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"></PasswordField>
        </div>
        <div className="components-hm">
          <Panel spacing className="display-inline-grid">
            <label>Pound Sterling (£)</label>
            <NumberField
              value={init.toString()}
              step="1"
              min="1"
              stepDown={() => {
                init >= 2 && setInit(init - 1);
                setConversionValue(init * rate);
              }}
              stepUp={() => {
                setInit(init + 1);
                setConversionValue(init * rate);
              }}
            ></NumberField>
            <label>Conversion Rate</label>
            <NumberField value={rate.toString()} min="0" step="0.01" stepDown={() => rate > 0 && setRate(rate - 0.01)}></NumberField>
            <label>Thai Baht (฿)</label>
            <NumberField readonly value={conversionValue.toString()} noSpinner></NumberField>
          </Panel>
        </div>
        <div className="components-hm">
          <Slider showSteps step="5" className="colorSlider" min="0" max="100" value="45"></Slider>
          <Slider range min="0" max="100" from="25" to="75" minRange="1"></Slider>
          <Slider showSteps step="5" showInputField={'readonly'} min="0" max="100" value="45"></Slider>
          <Slider showInputField={'readonly'} range min="0" max="100" from="25" to="75" minRange="1"></Slider>
        </div>
        <div className="componenets=hm">
          <Select
            className=""
            onChange={() => console.log('Clicked')}
            value=""
            data={[
              { label: 'Tea', value: 'tea' },
              { label: 'Beer', value: 'beer' },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
