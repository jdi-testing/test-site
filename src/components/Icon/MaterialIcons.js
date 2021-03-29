import React, {useState} from 'react';
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

export default function MaterialIcons() {
  const [lastClick, setClick] = useState("");
  const [lastHover, setHover] = useState("");

  return (
    <div>
      <h1>Material Icons</h1>
      <h2>Access Alarm</h2>
      <AccessAlarmIcon id={"defaultAccessAlarm"} onClick={() => setClick("default")}
                       onMouseOver={() => setHover("default")}/>
      <AccessAlarmIcon id={"largeAccessAlarm"} fontSize="large" onClick={() => setClick("large")}
                       onMouseOver={() => setHover("large")}/>
      <AccessAlarmIcon id={"secondaryAccessAlarm"} color="secondary" onClick={() => setClick("secondary")}
                       onMouseOver={() => setHover("secondary")}/>
      <p id={"miconLastClick"}>Last click: {lastClick}</p>
      <p id={"miconLastHover"}>Last hover: {lastHover}</p>
    </div>
  );
}