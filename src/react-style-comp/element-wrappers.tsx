import React from 'react';
import { createComponent } from '@lit-labs/react';
import { TabBar as EfTabBar } from '@refinitiv-ui/elements/tab-bar';
import { Tab as EfTab } from '@refinitiv-ui/elements/tab';
import { InteractiveChart as EfInteractiveChart } from '@refinitiv-ui/elements/interactive-chart';
import { Button as EfButton } from '@refinitiv-ui/elements/button';
import { Header as EfHeader } from '@refinitiv-ui/elements/header';
import { Toggle as EfToggle } from '@refinitiv-ui/elements/toggle';
import { Flag as EfFlag } from '@refinitiv-ui/elements/flag';
import { ColorDialog as EfColorDialog } from '@refinitiv-ui/elements/color-dialog';
import { Card as EfCard } from '@refinitiv-ui/elements/card';
import { Dialog as EfDialog } from '@refinitiv-ui/elements/dialog';
import { Label as EfLabel } from '@refinitiv-ui/elements/label';
import { Layout as EfLayout } from '@refinitiv-ui/elements/layout';
import { Panel as EfPanel } from '@refinitiv-ui/elements/panel';
import { ProgressBar as EfProgressBar } from '@refinitiv-ui/elements/progress-bar';
import { Icon as EfIcon } from '@refinitiv-ui/elements/icon';
import { Slider as EfSlider } from '@refinitiv-ui/elements/slider';
import { Counter as EfCounter } from '@refinitiv-ui/elements/counter';
import { NumberField as EfNumberField } from '@refinitiv-ui/elements/number-field';
import { TextField as EfTextField } from '@refinitiv-ui/elements/text-field';
import { RadioButton as EfRadioButton } from '@refinitiv-ui/elements/radio-button';
import { DatetimePicker as EfDateTimePicker } from '@refinitiv-ui/elements/datetime-picker';
import { EmailField as EfEmailField } from '@refinitiv-ui/elements/email-field';
import { Checkbox as EfCheckBox } from '@refinitiv-ui/elements/checkbox';
import { Select as EfSelect } from '@refinitiv-ui/elements/select';
import { Item as EfItem } from '@refinitiv-ui/elements/item';
import { MultiInput as EfMultiInput } from '@refinitiv-ui/elements/multi-input';
import { PasswordField as EfPasswordField } from '@refinitiv-ui/elements/password-field';
import { TreeSelect as EfTreeSelect } from '@refinitiv-ui/elements/tree-select';
import { Autosuggest as EfAutosuggest } from '@refinitiv-ui/elements/autosuggest';
import { ComboBox as EfComboBox } from '@refinitiv-ui/elements/combo-box';

export const TabBar = createComponent({
  react: React,
  tagName: 'ef-tab-bar',
  elementClass: EfTabBar,
});

export const Tab = createComponent({
  react: React,
  tagName: 'ef-tab',
  elementClass: EfTab,
});

export const InteractiveChart = createComponent({
  react: React,
  tagName: 'ef-interactive-chart',
  elementClass: EfInteractiveChart,
});

export const Button = createComponent({
  react: React,
  tagName: 'ef-button',
  elementClass: EfButton,
});

export const Header = createComponent({
  react: React,
  tagName: 'ef-header',
  elementClass: EfHeader,
});

export const Toggle = createComponent({
  react: React,
  tagName: 'ef-toggle',
  elementClass: EfToggle,
});

export const Flag = createComponent({
  react: React,
  tagName: 'ef-flag',
  elementClass: EfFlag,
});

export const ColorDialog = createComponent({
  react: React,
  tagName: 'ef-color-dialog',
  elementClass: EfColorDialog,
  events: {
    onchange: 'value-changed',
    onclose: 'opened-changed',
  },
});

export const Card = createComponent({
  react: React,
  tagName: 'ef-card',
  elementClass: EfCard,
});

export const Dialog = createComponent({
  react: React,
  tagName: 'ef-dialog',
  elementClass: EfDialog,
  events: {
    onabort: 'cancel',
    onclose: 'opened-changed',
    onchange: 'confirm',
  },
});

export const Label = createComponent({
  react: React,
  tagName: 'ef-label',
  elementClass: EfLabel,
});

export const Layout = createComponent({
  react: React,
  tagName: 'ef-layout',
  elementClass: EfLayout,
});

export const Panel = createComponent({
  react: React,
  tagName: 'ef-panel',
  elementClass: EfPanel,
});

export const ProgressBar = createComponent({
  react: React,
  tagName: 'ef-progress-bar',
  elementClass: EfProgressBar,
});

export const Icon = createComponent({
  react: React,
  tagName: 'ef-icon',
  elementClass: EfIcon,
});

export const Slider = createComponent({
  react: React,
  tagName: 'ef-slider',
  elementClass: EfSlider,
});

export const Counter = createComponent({
  react: React,
  tagName: 'ef-counter',
  elementClass: EfCounter,
});

export const NumberField = createComponent({
  react: React,
  tagName: 'ef-number-field',
  elementClass: EfNumberField,
  events: {
    onchange: 'value-changed',
  },
});

export const TextField = createComponent({
  react: React,
  tagName: 'ef-text-field',
  elementClass: EfTextField,
});

export const RadioButton = createComponent({
  react: React,
  tagName: 'ef-radio-button',
  elementClass: EfRadioButton,
});

export const DateTimePicker = createComponent({
  react: React,
  tagName: 'ef-datetime-picker',
  elementClass: EfDateTimePicker,
});

export const EmailField = createComponent({
  react: React,
  tagName: 'ef-email-field',
  elementClass: EfEmailField,
});

export const Checkbox = createComponent({
  react: React,
  tagName: 'ef-checkbox',
  elementClass: EfCheckBox,
});

export const Select = createComponent({
  react: React,
  tagName: 'ef-select',
  elementClass: EfSelect,
  events: {
    onchange: 'opened-changed',
  },
});

export const Item = createComponent({
  react: React,
  tagName: 'ef-item',
  elementClass: EfItem,
});

export const MultiInput = createComponent({
  react: React,
  tagName: 'ef-multi-input',
  elementClass: EfMultiInput,
});

export const PasswordField = createComponent({
  react: React,
  tagName: 'ef-password-field',
  elementClass: EfPasswordField,
});

export const TreeSelect = createComponent({
  react: React,
  tagName: 'ef-tree-select',
  elementClass: EfTreeSelect,
});

export const Autosuggest = createComponent({
  react: React,
  tagName: 'ef-autosuggest',
  elementClass: EfAutosuggest,
});

export const ComboBox = createComponent({
  react: React,
  tagName: 'ef-combo-box',
  elementClass: EfComboBox,
});
