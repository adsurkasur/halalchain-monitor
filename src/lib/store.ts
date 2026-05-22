import { create } from "zustand";
import { shipments as initialShipments, Shipment } from "./mock-data";

export type Role = "sender" | "receiver";

interface AppState {
  role: Role;
  setRole: (role: Role) => void;
  shipments: Shipment[];
  addShipment: (shipment: Shipment) => void;
}

export const useAppStore = create<AppState>((set) => ({
  role: "sender",
  setRole: (role) => set({ role }),
  shipments: initialShipments,
  addShipment: (shipment) => set((state) => ({ shipments: [shipment, ...state.shipments] })),
}));
