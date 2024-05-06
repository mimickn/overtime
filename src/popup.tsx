import { useStorage } from "@plasmohq/storage/hook"

import "~style.css"

function IndexPopup() {
  const [overtime] = useStorage<number>("overtime", (overtime) =>
    typeof overtime === "undefined" ? 0 : overtime
  )

  return (
    <div className="bg-slate-400 text-slate-950 p-8">
      <h3 className="font-semibold">Overtime</h3>
      <div>{ Math.floor(overtime / 60) }h{ overtime % 60 }m</div>
    </div>
  )
}

export default IndexPopup
