import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import {
  Navigation,
  PackagePlus,
  Activity,
  ShieldCheck,
  UserCog,
  CheckCircle2,
} from "lucide-react";

export default function GuidePage() {
  return (
    <DashboardLayout
      title="Operations Guide"
      subtitle="Learn how to navigate and operate the HalalChain platform."
    >
      <article className="mx-auto max-w-3xl pb-16 pt-4">
        {/* Intro */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Welcome to HalalChain
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The unified traceability platform for Indonesia's fish logistics. This platform is
            designed to guarantee the cold chain integrity and halal compliance of seafood
            distribution, from port origin to destination.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            HalalChain uses IoT (Internet of Things) devices embedded in reefer vehicles to monitor
            GPS location, temperature, and humidity in real-time, syncing directly with{" "}
            <strong>KKP STELINA</strong> and the <strong>MUI LPPOM</strong> registry.
          </p>
          <div className="mt-8 flex items-start gap-4 rounded-xl border border-primary/20 bg-primary/5 p-5">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary shrink-0" />
            <p className="text-sm text-primary/90 leading-relaxed">
              This guide will walk you through the platform from the perspective of both a{" "}
              <strong>Sender (Company)</strong> and a <strong>Receiver</strong>. Switch your role
              using the profile selector at the bottom left of your sidebar.
            </p>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Section 1 */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <Navigation className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              1. Navigating the Platform
            </h3>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            When you log in, you will be directed to the <strong>Overview Dashboard</strong>, which
            displays high-level KPIs, active vehicle fleet statistics, and recent system alerts. Use
            the sidebar to navigate the platform seamlessly:
          </p>
          <ul className="grid gap-3 text-base text-muted-foreground sm:grid-cols-2 bg-surface-muted/50 p-6 rounded-2xl border border-border/50">
            <li className="flex items-start gap-3">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{" "}
              <span>
                <strong>Overview:</strong> High-level metrics.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{" "}
              <span>
                <strong>Shipments:</strong> Create & manage.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{" "}
              <span>
                <strong>Tracking:</strong> Live fleet map.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{" "}
              <span>
                <strong>Scan Validation:</strong> Validate deliveries.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{" "}
              <span>
                <strong>Alerts:</strong> Critical system pings.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{" "}
              <span>
                <strong>History:</strong> Full audit logs.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <PackagePlus className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              2. Creating a New Shipment
            </h3>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            As a Sender, your primary task is generating new shipments and binding them to IoT
            trackers before dispatch. You can initiate this process from the Shipments tab.
          </p>
          <div className="rounded-2xl border border-border/50 bg-surface-muted/50 p-6 sm:p-8">
            <ol className="list-decimal pl-5 space-y-4 text-base text-muted-foreground marker:text-primary marker:font-semibold">
              <li className="pl-2">Verify facility origin and contact info.</li>
              <li className="pl-2">Input product details (Halal Cert & STELINA metadata).</li>
              <li className="pl-2">Enter Receiver's details and expected ETA.</li>
              <li className="pl-2">Assign an active driver and Reefer vehicle.</li>
              <li className="pl-2">Set environmental limits (e.g., -22°C to -16°C).</li>
              <li className="pl-2">
                Bind the physical <strong>RFID Tag ID</strong> that seals the payload.
              </li>
              <li className="pl-2">Review the manifest and issue the shipment.</li>
            </ol>
          </div>
        </section>

        {/* Section 3 & 4 */}
        <section className="mb-12 grid gap-12 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <Activity className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">3. Tracking & Alerts</h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Once a shipment departs, view the live GPS location on the <strong>Tracking</strong>{" "}
              interactive map. If the temperature exceeds the upper threshold (e.g., &gt; -16°C), an
              Alert fires and the shipment integrity changes to <em>Warning</em>.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">4. Validating Deliveries</h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              As a Receiver, you validate that goods arrived securely. Navigate to{" "}
              <strong>Scan Validation</strong>, scan the NFC tag or QR code, and verify the digital
              temperature audit. Accept it to generate a final Proof of Delivery.
            </p>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* Role Switcher Note */}
        <section className="mb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
              <UserCog className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              5. Role Simulation
            </h3>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            For demonstration purposes, this platform includes a role switcher. At the bottom of the
            left sidebar, click your profile (<strong>PT Mina Bahari</strong> or{" "}
            <strong>Cold Storage SBY</strong>) to toggle your role between <strong>Sender</strong>{" "}
            and <strong>Receiver</strong>. Notice how the navigation menu actively adapts based on
            your role!
          </p>
        </section>
      </article>
    </DashboardLayout>
  );
}
