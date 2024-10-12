// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
// import { VCalendar } from 'vuetify/labs/VCalendar'
// import { VDataTable } from 'vuetify/labs/VDataTable'
// import { VuetifyDateAdapter } from 'vuetify/labs/date/adapters/vuetify'

import '@mdi/font/css/materialdesignicons.css';
const vuetify = createVuetify({
  components,
  directives,
  labsComponents,
  // VCalendar,
  // VDataTable,
  //  date: {
    // adapter: VuetifyDateAdapter,
  // },
})

export default vuetify;