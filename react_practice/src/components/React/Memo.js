import React, { memo } from 'react'

function Memo({name}) {
    console.log("MEMO COMPONENT")
  return (
    <div>
        {name}
    </div>
  )
}

export default React.memo(Memo)