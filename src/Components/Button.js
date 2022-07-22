import styles from "./Button.module.css";
import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { authActions } from "../slice.js";

function Button(props) {
  const dispatch = useDispatch();
  const [click, oclick] = useState(false);
  const [changes, onchanges] = useState(0);

  useEffect(() => {
    if (click || changes) {
      fetch(`https://reqres.in/api/users/${props.id}`)
        .then((e) => e.json())
        .then((e) => {
          dispatch(authActions.update({ user: e }));
        });
    }
  }, [dispatch, props.id, click, changes]);
  return (
    <React.Fragment>
      <div
        className={styles.btn}
        onClick={(e) => {
          oclick(true);
          onchanges(Math.random() + 10);
        }}
      >
        {props.id}
      </div>
    </React.Fragment>
  );
}
export default Button;
