import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageGridList from "./ImageGridList";
import SingleLineGridList from "./SingleLineGridList";
import TitlebarGridList from "./TitleBarGridList";

const useStyles = makeStyles((theme) => ({

}));

export default function GridLists() {
  const classes = useStyles();

  return (
    <div>
      <h1>Grid lists</h1>
      <h2>Image Glist list</h2>
      <ImageGridList id={"imageGridList"} />
      <h2>Singlel line Grid list</h2>
      <SingleLineGridList id={"singleListGridList"} />
      <h2>Title bar Grid list</h2>
      <TitlebarGridList id={"titlebarGridList"} />
    </div>
  );
}