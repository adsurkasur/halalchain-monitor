# HalalChain User Guide

Welcome to **HalalChain**, the unified traceability platform for Indonesia's fish logistics. This platform is designed to guarantee the cold chain integrity and halal compliance of seafood distribution, from port origin to destination. 

HalalChain uses IoT (Internet of Things) devices embedded in reefer vehicles to monitor GPS location, temperature, and humidity in real-time, syncing directly with **KKP STELINA** and the **MUI LPPOM** registry.

This guide will walk you through the platform from the perspective of both a **Sender (Company)** and a **Receiver**.

---

## 1. Navigating the Platform

When you log in, you will be directed to the **Overview Dashboard**, which displays high-level KPIs, active vehicle fleet statistics, and recent system alerts. 

Use the **Sidebar** to navigate:
- **Overview:** High-level metrics and key performance indicators.
- **Shipments:** Manage, create, and view all active and past shipments.
- **Tracking:** View a live map of all vehicles currently in transit.
- **Scan Validation:** (Receiver Only) Validate incoming shipments via NFC/RFID or QR.
- **Alerts:** View critical temperature spikes, route deviations, or sensor disconnects.
- **History:** Comprehensive audit logs of past deliveries.

> **Pro Tip:** You can toggle the sidebar to be compact using the icon next to the search bar for a wider view of your data. You can also switch between Light and Dark mode using the sun/moon icon in the top right.

---

## 2. Sender: Creating a New Shipment

As a Company or logistics operator, your primary task is generating new shipments and binding them to IoT trackers.

1. Navigate to **Shipments** and click **New Shipment**.
2. **Step 1 (Sender):** Verify your facility origin and contact information.
3. **Step 2 (Product):** Input the product details (e.g., *Frozen Tuna Loin*). You must provide valid **Halal Certificate IDs** and **STELINA references**. The system auto-validates these against national registries.
4. **Step 3 (Destination):** Enter the Receiver's details and the expected ETA.
5. **Step 4 (Logistics):** Assign a driver and vehicle (Reefer truck).
6. **Step 5 (Monitoring):** Set the environmental thresholds. For frozen fish, this is typically between -22°C and -16°C. You will also bind the physical **RFID Tag ID** that will be sealed on the container.
7. **Step 6 (Review & Generate):** Review the summary. Once generated, the shipment enters the *Validation Pending* or *In Transit* state, and STELINA is notified automatically.

---

## 3. Real-Time Tracking & Alerts

Once a shipment departs:
- Go to the **Tracking** page to view the live GPS location of the reefer truck on an interactive map.
- The map plots the intended route vs. actual GPS coordinates.
- If the temperature exceeds the upper threshold (e.g., rises above -16°C), an **Alert** is generated. The shipment's integrity status will change to *Warning* or *Cold Chain Risk*. You can view these details in the **Alerts** tab.

---

## 4. Receiver: Validating Deliveries

As a Receiver (e.g., Cold Storage Facility, Hotel, or Restaurant), your responsibility is to validate that the goods arrived securely and the cold chain was unbroken.

1. Navigate to the **Scan Validation** page.
2. In the physical world, the driver will present the sealed container with an NFC/RFID tag or a Backup QR code.
3. Use the platform (via mobile or scanner integration) to scan the tag.
4. The system will instantly pull the full shipment history. It will verify:
   - Whether the temperature ever spiked out of bounds.
   - Whether the Halal certification is still valid.
   - Whether the shipment matches the STELINA manifest.
5. If everything is green, accept the shipment. The status will update to **Delivered**, generating a final digital Proof of Delivery (PoD).

---

## 5. Changing Your Role (Simulation)

For demonstration purposes, this platform includes a role switcher. 
At the bottom of the left sidebar, click your profile (**PT Mina Bahari** or **Cold Storage SBY**) to toggle your role between **Sender** and **Receiver**. 

Notice how the navigation menu adapts based on your role (e.g., Receivers prioritize Scan Validation, whereas Senders prioritize active Tracking).
