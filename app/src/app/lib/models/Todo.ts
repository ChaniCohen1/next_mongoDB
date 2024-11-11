import mongoose, {Model, Schema} from "mongoose";
import ITodo from "@/app/types/Todo";

const TodoSchema: Schema<ITodo> = new Schema({
    id: {type: Number, required: true, unique:true},
    todo: {type: String, required: true},
    completed: {type: Boolean, required: true},
});


const Todo: Model<ITodo> = mongoose.models.Todo || mongoose.model<ITodo>('Todo', TodoSchema);

export default Todo;