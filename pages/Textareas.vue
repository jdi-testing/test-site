<template>
    <v-container>
        <v-col>
            <h1>Textareas</h1>
            <p class="body-1 mt-2">
                Textarea components are used for collecting large amounts of textual data.
            </p>
        </v-col>

        <v-col>
            <p class="text-h5">
                Auto grow textarea
            </p>
            <AutoGrowTextarea id="AutoGrowTextarea" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Background color textarea
            </p>
            <BackgroundColorTextarea id="BackgroundColorTextarea" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Browser autocomplete textarea
            </p>
            <BrowserAutocompleteTextarea id="BrowserAutocompleteTextarea" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Clearable textarea
            </p>
            <ClearableTextarea id="ClearableTextarea" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Counter textarea
            </p>
            <CounterTextarea id="CounterTextarea" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Icons textarea
            </p>
            <IconsTextarea id="IconsTextarea" />
        </v-col>

        <v-col>
            <p class="text-h5">
                No resize textarea
            </p>
            <NoResizeTextarea id="NoResizeTextarea" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Rows textarea
            </p>
            <RowsTextarea id="RowsTextarea" />
        </v-col>

        <v-col>
            <p class="text-h5">
                Signup form textarea
            </p>
            <SignupFormTextarea id="SignupFormTextarea" />
        </v-col>

    </v-container>
</template>

<script>
import AutoGrowTextarea from '@/components/form_inputs/textareas/AutoGrowTextarea.vue';
import BackgroundColorTextarea from '@/components/form_inputs/textareas/BackgroundColorTextarea.vue';
import BrowserAutocompleteTextarea from '@/components/form_inputs/textareas/BrowserAutocompleteTextarea.vue';
import ClearableTextarea from '@/components/form_inputs/textareas/ClearableTextarea.vue';
import CounterTextarea from '@/components/form_inputs/textareas/CounterTextarea.vue';
import IconsTextarea from '@/components/form_inputs/textareas/IconsTextarea.vue';
import NoResizeTextarea from '@/components/form_inputs/textareas/NoResizeTextarea.vue';
import RowsTextarea from '@/components/form_inputs/textareas/RowsTextarea.vue';
import SignupFormTextarea from '@/components/form_inputs/textareas/SignupFormTextarea.vue';

export default {
  name: 'Textareas',
  components: {
    AutoGrowTextarea,
    BackgroundColorTextarea,
    BrowserAutocompleteTextarea,
    ClearableTextarea,
    CounterTextarea,
    IconsTextarea,
    NoResizeTextarea,
    RowsTextarea,
    SignupFormTextarea,
  },
};
</script>
