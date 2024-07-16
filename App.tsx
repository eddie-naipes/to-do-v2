import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {styles} from "./global";
import {useState} from "react";
import {TaskDTO} from "./src/shared/interfaces/TaskDTO";
import {Home} from "./src/screens/Home/Home";

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
      <View style={styles.container}>
        <StatusBar style="light"/>
        <Home
            tasks={tasks}
            handleAddTask={handleAddTask}
            handleRemoveTask={handleRemoveTask}
            handleDoneTask={handleDoneTask}
        />
    </View>
  );
}

