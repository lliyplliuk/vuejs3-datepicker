<template>
  <Wrapper :templatecontent="template" :scriptcontent="script">
    <template v-slot:label> Disabled To Date</template>
    <template v-slot:content>
      <div class="flex-block">
        <appdate-picker
          @input="dateSelected"
          :value="defaultValue"
          :initial-date="new Date()"
          :disabled-dates="{ to: disabledToDate }"
          input-class="form-control"
          language="ru"
          theme="red"
          wrapper-class="inputClass"
          format="dd.MM.yyyy"
          placeholder="Начало"
          class="no-margin"
          style="margin-left: 0 !important"
          :typeable="true"
          :clear-button="false"
          :hide-input="true"
          :required="true"
          :open-date="new Date()"
        >
        </appdate-picker>
      </div>
    </template>
  </Wrapper>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Wrapper from '../wrapper/Wrapper.vue';
import Datepicker from '../datepicker/DatePickerComponent.vue';

export default defineComponent({
  name: 'DisabledToDate',
  components: {
    Wrapper,
    'appdate-picker': Datepicker,
  },
  setup() {
    const defaultValue = ref(new Date());
    const disabledToDate = ref(new Date());

    disabledToDate.value.setDate(disabledToDate.value.getDate());
    disabledToDate.value.setHours(0);
    disabledToDate.value.setMinutes(0);
    disabledToDate.value.setSeconds(0);
    console.log('disabledToDate', disabledToDate);
    /**
     * Handler for select-day function
     */
    function dateSelected(payload: Date): void {
      console.log('dateSelected', payload);
    }

    const template = `<template>
    <appdate-picker
     placeholder="Select Date"
          @input="dateSelected"
          :value="defaultValue"
          :openDate="new Date()"
          :disabled-to-date="disabledToDate"
          :prevent-disable-date-selection="preventDisableDateSelection"
    >
    </appdate-picker>
  </template>`;

    const script = `<script lang="js">
  import { ref } from 'vue';
  export default {
    setup(){
      const defaultValue = ref(new Date());
    const disabledToDate = ref(new Date());

    disabledToDate.value.setDate(disabledToDate.value.getDate() - 1);
    /**
     * Handler for select-day function
     */
    function dateSelected(payload: Date): void {
      console.log('dateSelected', payload);
    }

      return {
        dateSelected,
        defaultValue,
        disabledToDate
      }
    }
  }
  <script>`;
    return {
      script,
      template,
      dateSelected,
      defaultValue,
      disabledToDate,
    };
  },
});
</script>
