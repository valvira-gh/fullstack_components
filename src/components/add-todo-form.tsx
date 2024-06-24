"use client";

import { useActionState } from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

const AddTodoForm = () => {
  return (
    <form className="flex space-x-2">
      <Input name="title" placeholder="What do you want to do?" />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTodoForm;
