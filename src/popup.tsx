import { useStorage } from "@plasmohq/storage/hook"

import "~style.css"

function IndexPopup() {
  const [overtime] = useStorage<number>("overtime", (overtime) =>
    typeof overtime === "undefined" ? 0 : overtime
  )

  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40">
      Overtime
      { overtime }
    </div>
  )
}

export default IndexPopup
