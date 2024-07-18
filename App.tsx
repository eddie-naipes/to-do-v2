import {StatusBar} from 'expo-status-bar';
import {useState} from "react";
import {TaskDTO} from "@interfaces/TaskDTO";
import {Home} from "@screens/Home/Home";
import theme from "@theme/styles";
import {ThemeProvider} from 'styled-components'
import {Container} from "./styles";

export default function App() {

  const [tasks, setTasks] = useState<TaskDTO[]>([]);

  const handleAddTask = (newTask: TaskDTO) => {
    setTasks([...tasks, newTask]);
  }

  const handleRemoveTask = (id: number) => {
      console.log(id)
    setTasks(tasks.filter(task => task.id !== id));
  }

  const handleDoneTask = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    }))
  }

  return (
      <ThemeProvider theme={theme}>
        <Container>
          <StatusBar style="light"/>
          <Home
              tasks={tasks}
              handleAddTask={handleAddTask}
              handleRemoveTask={handleRemoveTask}
              handleDoneTask={handleDoneTask}
          />
        </Container>
      </ThemeProvider>
  );
}

