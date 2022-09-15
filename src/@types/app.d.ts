export interface Device {
  icon: {
    id: string;
    resolutions: Array<>;
  };
  line: {
    id: string;
    name: string;
  };
  product: {
    name: string;
  };
  shortnames: Array<>;
  unifi?: {
    adoptability?: string;
    network?: {
      numberOfPorts?: number;
      minimumFirmwareRequired?: string;
      ethernetMaxSpeedMegabitsPerSecond?: number;
      chipset?: string;
      deviceCapabilities?: Array<string>;
      features?: {
        ac?: boolean;
        bandsteer?: boolean;
        gen?: number;
        outdoorModeSupport?: boolean;
        atfDisabled?: boolean;
        zh?: boolean;
      }
    }
  }
}

export interface FilterList {
  [key: string]: string
}

export interface AppStateType {
  searchValue: string;
  setSearchValue: (string) => void;
  devices: Array<any>;
  activeDevice: Device | null;
  setActiveDevice: (Device) => void;
  layoutView: string;
  setLayoutView: (string) => void;
  filterValue: Array[string];
  setFilterValue: (string) => void;
  filterList: FilterList;
}
