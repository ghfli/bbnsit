<script>
  import { Select, ModalContent, notifications } from "hyinsit-bbui"
  import download from "downloadjs"
  import { API } from "api"

  const FORMATS = [
    {
      name: "CSV",
      key: "csv",
    },
    {
      name: "JSON",
      key: "json",
    },
  ]

  export let view

  let exportFormat = FORMATS[0].key

  async function exportView() {
    try {
      const data = await API.exportView({
        viewName: view,
        format: exportFormat,
      })
      download(
        new Blob([data], { type: "text/plain" }),
        `export.${exportFormat}`
      )
    } catch (error) {
      notifications.error(`Unable to export ${exportFormat.toUpperCase()} data`)
    }
  }
</script>

<ModalContent title="Export Data" confirmText="Export" onConfirm={exportView}>
  <Select
    label="Format"
    bind:value={exportFormat}
    options={FORMATS}
    placeholder={null}
    getOptionLabel={x => x.name}
    getOptionValue={x => x.key}
  />
</ModalContent>
