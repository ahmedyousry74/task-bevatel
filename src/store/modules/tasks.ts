import axios from 'axios';

// Define types for the task state and payload
interface Task {
  id: number;
  title: string;
  description: string;
  status: "todo" | "done" | "inProgress";
}

interface State {
  tasks: Task[];
  task: Task | null; // Could be null if no task is selected
  filter: any; // Adjust type as necessary
  loading: boolean;
}

const state: State = {
  tasks: [],
  task: null,
  filter: null,
  loading: false,
};

const getters = {
  gettasks: (state: State) => state.tasks,
  gettask: (state: State) => state.task,
  getLoading: (state: State) => state.loading,
};

const mutations = {
  SET_LOADING(state: State, loading: boolean) {
    state.loading = loading;
  },
  SET_tasks(state: State, tasks: Task[]) {
    state.tasks = tasks;
  },
  SET_task(state: State, task: Task) {
    state.task = task;
  },
  setFilter(state: State, filter: any) {
    state.filter = { ...filter };
  },
};

const actions = {
  async handleGettasks({ commit }: { commit: Function }) {
    commit('SET_LOADING', true);
    try {
      const res = await axios.get('tasks', { params: { ...state.filter } });
      commit('SET_tasks', res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      commit('SET_LOADING', false);
    }
  },
  async handleAddtask({ commit }: { commit: Function }, payload: Task) {
    try {
      const res = await axios.post('tasks', payload);
      commit('SET_tasks', res.data);
    } catch (error) {
      console.error("Error adding task:", error);
    } finally {
      commit('SET_LOADING', false);
    }
  },
  async Gettask({ commit }: { commit: Function }, id: number) {
    commit('SET_LOADING', true);
    try {
      const res = await axios.get(`tasks/${id}`);
      commit("SET_task", res.data);
    } catch (error) {
      console.error("Error fetching task:", error);
    } finally {
      commit('SET_LOADING', false);
    }
  },
  async edittask({ commit }: { commit: Function }, { taskID, payload }: { taskID: number; payload: Task }) {
    try {
      await axios.put(`tasks/${taskID}`, payload);
      // Optionally update local state after editing
      commit('SET_tasks', payload); // Adjust this based on your requirements
    } catch (error) {
      console.error("Error editing task:", error);
    } finally {
      commit('SET_LOADING', false);
    }
  },
  async Deletetask({ commit }: { commit: Function }, SelecttaskID: number) {
    try {
      await axios.delete(`tasks/${SelecttaskID}`);
      commit("SET_tasks", state.tasks.filter(task => task.id !== SelecttaskID));
    } catch (error) {
      console.error("Error deleting task:", error);
      commit('SET_LOADING', false);
    }
  }
};

const tasksModule: Module<State, any> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default tasksModule;
