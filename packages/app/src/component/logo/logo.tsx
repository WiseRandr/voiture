import { LogoImg } from "./logo.style";

export default function Logo({ width = 55, height = 55, loading = false }) {
  return <LogoImg src="/logo.png" width={width} height={height} className={loading ? "logo-loading" : ""} />
}