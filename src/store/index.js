import { createStore } from 'vuex';
import tasks from './modules/tasks.js'

export default createStore({
    modules: {
        tasks,
    },
    
})