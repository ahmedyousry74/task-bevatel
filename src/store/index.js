import { createStore } from 'vuex';
import tasks from './modules/tasks.ts'

export default createStore({
    modules: {
        tasks,
    },
    
})