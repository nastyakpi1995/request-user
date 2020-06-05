import React, { FunctionComponent } from 'react';
import { BoxSwitch } from '../styled';
import {connect} from "react-redux";
import * as actions from "../../redux/actions";

interface SwitchProps {
  setPages: Function;
}

type SwitchType = SwitchProps;
const Switch: FunctionComponent<SwitchType> = ({ setPages }) => (
    <BoxSwitch>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setPages(e.target.checked)}
        />
        <span />
      </label>
    </BoxSwitch>
);

export default (
  connect(null, actions)(Switch)
);
