import {Device} from "../../@types/app"

export default function getProductDetails(activeDevice: Device) {
  const {line, product, shortnames, unifi} = activeDevice

  const listData = [
    {
      title: 'Product line',
      text: line.name
    },
    {
      title: 'ID',
      text: line.id
    },
    {
      title: 'Name',
      text: product.name
    },
    {
      title: 'Short name',
      text: shortnames[0]
    }
  ]

  if (unifi?.network?.numberOfPorts) {
    listData.push({
      title: 'Number of ports',
      text: unifi.network.numberOfPorts
    })
  }
  if (unifi?.adoptability) {
    listData.push({
      title: 'Adoptability',
      text: unifi.adoptability
    })
  }
  if (unifi?.network?.minimumFirmwareRequired) {
    listData.push({
      title: 'Minimum firmware required',
      text: unifi.network.minimumFirmwareRequired
    })
  }
  if (unifi?.network?.ethernetMaxSpeedMegabitsPerSecond) {
    listData.push({
      title: 'Ethernet max speed mbps',
      text: unifi.network.ethernetMaxSpeedMegabitsPerSecond
    })
  }
  if (unifi?.network?.chipset) {
    listData.push({
      title: 'Chipset',
      text: unifi.network.chipset
    })
  }
  if (unifi?.network?.deviceCapabilities) {
    listData.push({
      title: 'Device capabilities',
      text: unifi.network.deviceCapabilities.join(', ')
    })
  }
  if (unifi?.network?.features?.ac) {
    listData.push({
      title: 'Feature - ac',
      text: 'yes'
    })
  }
  if (unifi?.network?.features?.bandsteer) {
    listData.push({
      title: 'Feature - bandsteer',
      text: 'yes'
    })
  }
  if (unifi?.network?.features?.gen) {
    listData.push({
      title: 'Feature - gen',
      text: unifi.network.features.gen
    })
  }
  if (unifi?.network?.features?.outdoorModeSupport) {
    listData.push({
      title: 'Feature - outdoor mode sport',
      text: 'yes'
    })
  }
  if (unifi?.network?.features?.atfDisabled) {
    listData.push({
      title: 'Feature - atfDisabled',
      text: 'yes'
    })
  }
  if (unifi?.network?.features?.zh) {
    listData.push({
      title: 'Feature - zh',
      text: 'yes'
    })
  }

  return listData
}
