"use server";

import dbConnect from "./database/connect";
import Task from "./database/task.model";

export async function getTasks() {
  await dbConnect();

  try {
    const tasks = await Task.find({});
    return tasks;
  } catch (err) {
    console.log(err);
  }
}
