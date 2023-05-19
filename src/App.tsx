import React from "react";
import { TaskInfo } from "./task-info";
import { apiMock } from "./api";
import "./styles.css";

async function getItems() {
  return Promise.resolve(
    apiMock.map(({ id, value, order }) => ({
      id,
      value,
      order
    }))
  );
}

async function getItemsExpirations() {
  return Promise.resolve(
    apiMock.map(({ id, expired }) => ({
      id,
      expired
    }))
  );
}

export const App = () => {
  return (
    <div>
      <TaskInfo />
      ...
    </div>
  );
};
