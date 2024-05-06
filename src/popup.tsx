import { useStorage } from "@plasmohq/storage/hook"

import "~style.css"

function IndexPopup() {
  const [overtime] = useStorage<number>("overtime", (overtime) =>
    typeof overtime === "undefined" ? 0 : overtime
  )

  return (
    <div className="bg-slate-400 text-slate-950 px-8 py-4 text-center">
      <h1 className="font-semibold text-lg">overtime</h1>
      <p className="text-4xl">{ Math.floor(overtime / 60) }h{ overtime % 60 }m</p>
    </div>
  )
}

export default IndexPopup
