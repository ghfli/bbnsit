<script>
  import { ColorPicker } from "hyinsit-bbui"
  import { store } from "builderStore"

  export let value
</script>

<ColorPicker {value} on:change spectrumTheme={$store.theme} />
