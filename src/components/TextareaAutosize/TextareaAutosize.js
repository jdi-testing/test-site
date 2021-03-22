import React from 'react';
import MTextareaAutosize from '@material-ui/core/TextareaAutosize';
import MinHeightTextarea from "./MinHeightTextarea";
import MaxHeightTextarea from "./MaxHeightTextarea";

export default function TextareaAutosize() {
  return (
    <div>
      <h1>TextArea Autosize</h1>
      <h2>Empty</h2>
      <MTextareaAutosize aria-label="empty textarea" placeholder="Empty" />
      <h2>Minimum height</h2>
      <MinHeightTextarea id={"minHeightTextarea"}/>
      <h2>Maximum height</h2>
      <MaxHeightTextarea id={"maxHeightTextarea"}/>
    </div>
    );
}


