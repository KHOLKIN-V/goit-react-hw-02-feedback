import React from "react";
import cs from "./Notification.module.css";

const Notification = ({ message }) => <h2 className={cs.title}>{message}</h2>;

export default Notification;
