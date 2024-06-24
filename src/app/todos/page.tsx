import AddTodoForm from "@/components/add-todo-form";
import TodosList from "@/components/todos-list";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const TodosPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-center mb-2">Todo App</CardTitle>
          <AddTodoForm />
        </CardHeader>
        <CardContent>
          <h3 className="text-md font-semibold text-blue-400 text-center mb-2">
            Todos List
          </h3>
          <TodosList />
        </CardContent>
      </Card>
    </main>
  );
};

export default TodosPage;
