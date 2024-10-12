import axios from 'axios'
const state = {
    tasks: [],
    task: "",
    filter: null,
    loading: false
}
const getters = {
    gettasks: state => state.tasks,
    gettask: state => state.task,
    getLoading: state => state.loading,
}
const mutations = {
    SET_LOADING(state, loading) {
        state.loading = loading
    },
    SET_tasks(state, tasks) {
        state.tasks = tasks
    },
    SET_task(state, task) {
        state.task = task
    },
    setFilter(state, filter) {
        state.filter = { ...filter };
    },
}
const actions = {
    async handleGettasks({ commit }) {
        commit('SET_LOADING', true);
        try {
            const res = await axios.get('tasks', { params: { ...state.filter } });
            commit('SET_tasks', res.data)
        } catch (error) {
        } finally {
            commit('SET_LOADING', false);
        }
    },
    async handleAddtask({commit}, payload){
        try {
            const res = await axios.post('tasks', payload);
            commit('SET_tasks', res.data)
        } catch (error) { 
            
        }
        finally {
            commit('SET_LOADING', false);
        }
    },
    async Gettask({ commit }, id) {
        commit('SET_LOADING', true);
        try {
            const res = await axios.get(`tasks/${id}`);
            commit("SET_task", res.data);
        } catch (error) { }
        finally {
            commit('SET_LOADING', false);
        }
    },
    async edittask({ commit }, { taskID, payload }) {
        try {
            const res = await axios.put(`tasks/${taskID}`, payload)
        }
        catch (error) {
        }
        finally{
            commit('SET_LOADING', false);
        }
    },
    async Deletetask({ commit }, SelecttaskID) {
        try {
            const res = await axios.delete(`tasks/${SelecttaskID}`)
            const Updatedtask = state.tasks.filter(task => task.id !== SelecttaskID);
            commit("SET_tasks", Updatedtask);
        }
        catch (error) {
            commit('SET_LOADING', false);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}