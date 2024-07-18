import {TaskDTO} from "@interfaces/TaskDTO";

export interface ListDTO {
    tasks: TaskDTO[];
    handleRemoveTask: (id: number) => void;
    handleDoneTask: (id: number) => void;
}