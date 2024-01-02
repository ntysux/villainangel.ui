import Link from "next/link"

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Link href='/button'>Button</Link>
      <Link href='/switch'>Switch</Link>
    </div>
  )
}
