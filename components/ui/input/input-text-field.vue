<template lang="pug">
validation-provider(
    :rules='rules',
    :vid='$attrs.vid',
    :name='name | capitalize',
    :debounce='$attrs.debounce',
    v-slot='{ pending, touched, valid, errors, required, ariaInput }'
)
    v-text-field.font-weight-medium(
        :value='value'
        v-on='$listeners'
        :counter='counter'
        :maxlength='counter'
        :clearable='clearable'
        :error-messages='errors'
        clear-icon='fas fa-times'
        @input='$emit("input", $event)'
        v-bind='{...$attrs, ...ariaInput}'
        :background-color='backgroundColor'
        outlined
    )
        //- * --------------------------------------------------
            * Label
            * -------------------------------------------------- */
        template(#label)
            span.grey--text.text--darken-3.font-weight-bold
                | {{ name }} #[span.error--text(v-if='required') {{ ` *` }}]
        //- * --------------------------------------------------
            * Prepend
            * -------------------------------------------------- */
        template(v-if='validate', #prepend)
            ui-icon-validation(v-show='touched && !pending', :valid='valid')

            v-progress-circular(
                v-show='pending',
                color='info',
                size='24',
                indeterminate
            )
        //- * --------------------------------------------------
            * Prepend inner
            * -------------------------------------------------- */
        template(#prepend-inner): slot(name='prepend-inner')
        //- * --------------------------------------------------
            * Append
            * -------------------------------------------------- */
        template(v-if='tooltip', #append)
            ui-tooltip
                template(#content='{props}')
                    v-icon(
                        color='info',
                        v-on='props.on',
                        v-text='"fas fa-info-circle"'
                    )
                | {{ tooltip }}
</template>

<script lang="ts">
    export default {
        inheritAttrs: false,
        props: {
            value: {
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            rules: {
                type: [String, Object],
                required: false,
            },
            counter: {
                type: Number,
                required: false,
            },
            validate: {
                type: Boolean,
                default: true,
            },
            clearable: {
                type: Boolean,
                default: true,
            },
            tooltip: {
                type: String,
                required: false,
            },
            backgroundColor: {
                type: String,
                default: 'background',
            },
        },
    }
</script>
