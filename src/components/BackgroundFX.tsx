const BackgroundFX = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(193_100%_70%_/_0.11),transparent_24%),radial-gradient(circle_at_80%_18%,hsl(222_100%_68%_/_0.08),transparent_22%),radial-gradient(circle_at_50%_110%,hsl(190_90%_70%_/_0.06),transparent_26%),linear-gradient(180deg,hsl(228_46%_5%),hsl(223_38%_8%)_52%,hsl(228_42%_4%))]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%_/_0.025)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%_/_0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-18 animate-grid-drift" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(255,255,255,0.09),transparent_18%),radial-gradient(circle_at_80%_20%,rgba(133,214,255,0.06),transparent_20%),radial-gradient(circle_at_60%_80%,rgba(178,235,255,0.04),transparent_24%)] blur-3xl" />
    <div className="absolute left-[-10rem] top-[6rem] h-[28rem] w-[28rem] rounded-full bg-cyan-300/10 blur-3xl animate-float-slow" />
    <div className="absolute right-[-12rem] top-[14rem] h-[30rem] w-[30rem] rounded-full bg-blue-400/8 blur-3xl animate-float-medium" />
    <div className="absolute bottom-[-12rem] left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-sky-100/6 blur-3xl animate-float-slower" />
    <div className="absolute inset-0 bg-frost opacity-25" />
    <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-soft-light" />
  </div>
);

export default BackgroundFX;
