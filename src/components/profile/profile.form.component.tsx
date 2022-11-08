import React from 'react';
import { Button, Checkbox, DateTimePicker, EmailField, RadioButton, TextField } from '../../react-style-comp/element-wrappers';

import './profile.css';

interface ProfileFormProps {
  handleConfirm: () => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ handleConfirm }: ProfileFormProps) => {
  return (
    <React.Fragment>
      <div className="form-input">
        <label>First Name *</label>
        <TextField placeholder="First Name"></TextField>
      </div>
      <div className="form-input">
        <label>Second Name *</label>
        <TextField placeholder="Second Name"></TextField>
      </div>
      <div className="form-input">
        <label>Gender</label>
        <div>
          <RadioButton>M</RadioButton>
          <RadioButton>Other</RadioButton>
          <RadioButton>F</RadioButton>
        </div>
      </div>
      <div className="form-input">
        <label>Date of birth</label>
        <DateTimePicker></DateTimePicker>
      </div>
      <div className="form-input">
        <label>Address</label>
        <textarea autoCorrect="off" autoComplete="off" autoCapitalize="off" rows={4} cols={30}></textarea>
      </div>
      <div className="form-input">
        <label>Email *</label>
        <EmailField placeholder="user@refinitiv.com"></EmailField>
      </div>
      <div className="form-input">
        <Checkbox>I want to receive news and updates via email</Checkbox>
      </div>
      <div className="form-footer" slot="footer">
        <Button id="confirmButton" cta onClick={handleConfirm}>
          Confirm
        </Button>
        <Button onClick={handleConfirm}>Cancel</Button>
      </div>
    </React.Fragment>
  );
};
