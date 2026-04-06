const BackgroundFX = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(200_100%_78%_/_0.18),transparent_28%),radial-gradient(circle_at_80%_18%,hsl(215_100%_74%_/_0.14),transparent_25%),radial-gradient(circle_at_50%_110%,hsl(190_90%_70%_/_0.12),transparent_30%),linear-gradient(180deg,hsl(220_42%_10%),hsl(217_34%_14%)_48%,hsl(222_38%_8%))]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%_/_0.035)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%_/_0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 animate-grid-drift" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(255,255,255,0.22),transparent_18%),radial-gradient(circle_at_80%_20%,rgba(133,214,255,0.12),transparent_20%),radial-gradient(circle_at_60%_80%,rgba(178,235,255,0.1),transparent_24%)] blur-3xl" />
    <div className="absolute left-[-10rem] top-[6rem] h-[28rem] w-[28rem] rounded-full bg-cyan-300/15 blur-3xl animate-float-slow" />
    <div className="absolute right-[-12rem] top-[14rem] h-[30rem] w-[30rem] rounded-full bg-blue-300/10 blur-3xl animate-float-medium" />
    <div className="absolute bottom-[-12rem] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-sky-100/10 blur-3xl animate-float-slower" />
    <div className="absolute inset-0 bg-frost opacity-35" />
    <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-soft-light" />
  </div>
);

export default BackgroundFX;
