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

  return (
      <View style={styles.container}>
        <StatusBar style="light"/>
        <Home
            tasks={tasks}
            handleAddTask={handleAddTask}
        />
    </View>
  );
}

